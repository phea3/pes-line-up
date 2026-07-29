"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Input,
} from "@nextui-org/react";

import budget from "@/../data/budget.json";

type Expense = {
  id: number;
  name: string;
  amount: number;
};

export default function Home() {
  const [salary, setSalary] = useState(budget.salary);

  const [expenses, setExpenses] = useState<Expense[]>(
    budget.expenses as Expense[],
  );

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("budget");

    if (!saved) return;

    const data = JSON.parse(saved);

    setSalary(data.salary);
    setExpenses(data.expenses);
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem(
      "budget",
      JSON.stringify({
        salary,
        expenses,
      }),
    );
  }, [salary, expenses]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
  }, [expenses]);

  const remaining = salary - totalExpenses;

  const status = useMemo(() => {
    if (remaining < 0) return { text: "Over Budget", color: "danger" as const };

    if (remaining < 50)
      return { text: "Very Tight", color: "warning" as const };

    if (remaining < 100) return { text: "Good", color: "primary" as const };

    return { text: "Excellent", color: "success" as const };
  }, [remaining]);

  const updateName = (id: number, value: string) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, name: value } : e)),
    );
  };

  const updateAmount = (id: number, value: string) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, amount: Number(value) || 0 } : e)),
    );
  };

  const addExpense = () => {
    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        amount: 0,
      },
    ]);
  };

  const removeExpense = (id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <main className="min-h-screen bg-default-100 p-8 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardBody className="gap-5">
          <h1 className="text-3xl font-bold">Budget Calculator</h1>

          <Input
            label="Monthly Salary"
            type="number"
            value={salary.toString()}
            onValueChange={(v) => setSalary(Number(v) || 0)}
            startContent="$"
          />

          <Divider />

          {expenses.map((expense) => (
            <div key={expense.id} className="flex gap-3 items-end">
              <Input
                label="Expense Name"
                value={expense.name}
                onValueChange={(v) => updateName(expense.id, v)}
              />

              <Input
                label="Amount"
                type="number"
                value={expense.amount.toString()}
                onValueChange={(v) => updateAmount(expense.id, v)}
                startContent="$"
              />

              <Button
                color="danger"
                variant="flat"
                onPress={() => removeExpense(expense.id)}
              >
                Delete
              </Button>
            </div>
          ))}

          <Button color="primary" onPress={addExpense}>
            + Add Expense
          </Button>

          <Divider />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Expenses</span>
              <strong>${totalExpenses.toFixed(2)}</strong>
            </div>

            <div className="flex justify-between">
              <span>Remaining</span>
              <strong>${remaining.toFixed(2)}</strong>
            </div>

            <Chip color={status.color} variant="flat">
              {status.text}
            </Chip>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
