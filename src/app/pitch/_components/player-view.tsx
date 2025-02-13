"use client";

import React from "react";
import { players } from "@/constants/players";
import { Avatar, Badge, Card, CardBody, CardHeader } from "@nextui-org/react";

export type PlayerType = {
  id: number;
  index: number;
  name: string;
  age: number;
  rate: number;
  position: "GK" | "CB" | "RB" | "LB" | "DM" | "CM" | "LW" | "RW" | "CF";
  img: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  shirtNumber: number;
};

const positions: Record<string, string> = {
  GK: "Goalkeeper",
  CB: "Defender",
  RB: "Defender",
  LB: "Defender",
  CM: "Midfielder",
  DM: "Midfielder",
  LW: "Forward",
  RW: "Forward",
  CF: "Forward",
};

export default function PlayerView() {
  const groupedPlayers = Object.entries(
    players.reduce<Record<string, PlayerType[]>>((acc, player) => {
      const pos = positions[player.position];
      acc[pos] = acc[pos] || [];
      acc[pos].push(player);
      return acc;
    }, {})
  );

  return (
    <div className="flex flex-col items-center">
      {groupedPlayers.map(([position, group]) => (
        <div key={position} className="flex gap-4 my-4">
          {group.map((player) => (
            <Card key={player.id}>
              <CardHeader className="justify-center">
                <Badge
                  size="sm"
                  color={player.color}
                  variant="shadow"
                  content={player.rate}
                  placement="top-right"
                  className="!absolute"
                >
                  <Avatar
                    isBordered
                    color={player.color}
                    radius="full"
                    src={player.img}
                    className="w-20 h-20"
                  />
                </Badge>
              </CardHeader>
              <CardBody className="text-center">
                <div className="font-bold">
                  {player.name} ({player.age})
                </div>
                <div className="text-sm">{player.shirtNumber}</div>
              </CardBody>
            </Card>
          ))}
        </div>
      ))}

      <div className="shadow-sm absolute left-2 bg-white rounded-sm p-4 text-left">
        <div className="text-lg font-bold">Total: {players.length} players</div>
        {groupedPlayers.map(([position, group]) => (
          <div key={position} className="text-sm">
            {position}: {group.length} players
          </div>
        ))}
      </div>
    </div>
  );
}
