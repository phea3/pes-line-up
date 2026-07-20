"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import { menus } from "@/constants/manu";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen border-r bg-content1 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        {!collapsed && <span className="font-bold text-lg">My App</span>}

        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2 p-2">
        {menus.map((menu) => (
          <Button
            key={menu.href}
            as={Link}
            href={menu.href}
            variant="light"
            className={`justify-start ${collapsed ? "px-0" : ""}`}
          >
            <menu.icon className="h-5 w-5 shrink-0" />

            {!collapsed && <span className="ml-3">{menu.name}</span>}
          </Button>
        ))}
      </div>
    </aside>
  );
}
