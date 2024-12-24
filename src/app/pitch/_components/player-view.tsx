"use client";

import React from "react";
import { players } from "@/constants/players";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import { Shirt } from "lucide-react";

type Props = {
  order: number;
};

export default function PlayerView({ order }: Props) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div>
      {players.map((load) =>
        order === load.index ? (
          <div
            key={load.id}
            className="w-full flex items-center justify-center max-w-full"
          >
            <div className="flex flex-col gap-1 items-center ">
              <Card className="p-1 shadow-none border">
                <CardHeader className="justify-between">
                  <div className="flex gap-3">
                    <Badge
                      size="sm"
                      color={load.color}
                      variant="faded"
                      content={load.rate} // The number to display
                      placement="top-right" // Adjust position
                      className="!absolute" // Customize if needed
                    >
                      <Avatar
                        isBordered
                        color={load.color}
                        radius="full"
                        src={load.img}
                        className="w-10 h-10"
                      />
                    </Badge>
                    <Button
                      startContent={<Shirt size={14} />}
                      className={
                        isFollowed
                          ? "bg-transparent text-foreground border-default-200"
                          : ""
                      }
                      color={load.color}
                      radius="full"
                      size="sm"
                      variant={isFollowed ? "bordered" : "solid"}
                      onPress={() => setIsFollowed(!isFollowed)}
                    >
                      {load.shirtNumber}
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-1 py-0 text-small">
                  <div className="text-sm">Name: {load.name}</div>
                  <div className="text-sm mb-4">Age: {`(${load.age}y)`}</div>
                </CardBody>
                <Divider />
                <CardFooter className="py-1">
                  <Chip color={load.color} variant="dot" size="sm">
                    <div className="text-sm">{load.positiom}</div>
                  </Chip>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
