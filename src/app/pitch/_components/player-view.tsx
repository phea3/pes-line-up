"use client";

import React from "react";
import { Avatar } from "@nextui-org/react";
import { marsei_players, PlayerType } from "@/constants/marsei-players";

//
// 🧠 1. Split Teams (based on index)
//
const teamA = marsei_players.filter((p) => p.index === 1);
const teamB = marsei_players.filter((p) => p.index === 2);

//
// 🧠 2. Build 1-4-3-3 Formation
//
function build433(team: PlayerType[]) {
  const pick = (pos: PlayerType["position"], count: number) =>
    team.filter((p) => p.position === pos).slice(0, count);

  return {
    GK: pick("GK", 1),

    DEF: [...pick("LB", 1), ...pick("CB", 2), ...pick("RB", 1)],

    MID: [...pick("AM", 1), ...pick("DM", 1), ...pick("CM", 1)],

    FWD: [...pick("LW", 1), ...pick("CF", 1), ...pick("RW", 1)],
  };
}

const formationA = build433(teamA);
const formationB = build433(teamB);

//
// 🎯 3. Position Map (FIFA style)
//
const positionMap = {
  GK: [{ top: "92%", left: "50%" }],

  DEF: [
    { top: "78%", left: "15%" }, // LB
    { top: "80%", left: "35%" }, // CB
    { top: "80%", left: "65%" }, // CB
    { top: "78%", left: "85%" }, // RB
  ],

  MID: [
    { top: "40%", left: "35%" },
    { top: "60%", left: "50%" },
    { top: "45%", left: "65%" },
  ],

  FWD: [
    { top: "25%", left: "20%" },
    { top: "20%", left: "50%" },
    { top: "25%", left: "80%" },
  ],
};

//
// 🎨 4. Player Node
//
function PlayerNode({
  player,
  style,
}: {
  player: PlayerType;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
      style={style}
    >
      <div className="relative">
        <Avatar src={player.img} className="w-16 h-16 border-2 border-white" />
        <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1 rounded">
          {player.rate}
        </div>
      </div>

      <div className="text-white text-xs font-bold text-center mt-1">
        {player.name} ({player.age}y)
      </div>

      <div className="text-white text-[10px] opacity-80">
        #{player.shirtNumber}
      </div>
    </div>
  );
}

//
// 🧩 5. Pitch Component
//
function Pitch({
  formation,
  reverse = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formation: any;
  reverse?: boolean;
}) {
  const flip = (value: string) => {
    if (!reverse) return value;
    return `${100 - parseFloat(value)}%`;
  };

  return (
    <div className="relative w-full max-w-3xl h-[600px] bg-green-600 rounded-xl overflow-hidden border-4 border-white">
      {/* 🌱 Grass stripes */}
      <div className="absolute inset-0 bg-green-600">
        <div
          className="absolute inset-0 bg-[repeating-linear-gradient(
      0deg,
      rgba(255,255,255,0.05) 0px,
      rgba(255,255,255,0.05) 40px,
      transparent 40px,
      transparent 80px
    )]"
        />
      </div>

      {/* ⚽ Halfway line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white" />

      {/* ⚽ Center circle */}
      <div className="absolute w-40 h-40 border-2 border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* ⚽ Center spot */}
      <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* 🥅 Top penalty area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[18%] border-2 border-white border-t-0" />

      {/* 🥅 Top goal box */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[8%] border-2 border-white border-t-0" />

      {/* ⚽ Top penalty spot */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />

      {/* 🥅 Bottom penalty area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[18%] border-2 border-white border-b-0" />

      {/* 🥅 Bottom goal box */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[8%] border-2 border-white border-b-0" />

      {/* ⚽ Bottom penalty spot */}
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />

      {/* 🟡 Corner arcs */}
      <div className="absolute top-0 left-0 w-6 h-6 border-white border-l-2 border-t-2 rounded-tl-full" />
      <div className="absolute top-0 right-0 w-6 h-6 border-white border-r-2 border-t-2 rounded-tr-full" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-white border-l-2 border-b-2 rounded-bl-full" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-white border-r-2 border-b-2 rounded-br-full" />

      {/* GK */}
      {formation.GK.map((p: PlayerType, i: number) => (
        <PlayerNode
          key={p.id}
          player={p}
          style={{
            top: flip(positionMap.GK[i].top),
            left: positionMap.GK[i].left,
          }}
        />
      ))}

      {/* DEF */}
      {formation.DEF.map((p: PlayerType, i: number) => (
        <PlayerNode
          key={p.id}
          player={p}
          style={{
            top: flip(positionMap.DEF[i].top),
            left: positionMap.DEF[i].left,
          }}
        />
      ))}

      {/* MID */}
      {formation.MID.map((p: PlayerType, i: number) => (
        <PlayerNode
          key={p.id}
          player={p}
          style={{
            top: flip(positionMap.MID[i].top),
            left: positionMap.MID[i].left,
          }}
        />
      ))}

      {/* FWD */}
      {formation.FWD.map((p: PlayerType, i: number) => (
        <PlayerNode
          key={p.id}
          player={p}
          style={{
            top: flip(positionMap.FWD[i].top),
            left: positionMap.FWD[i].left,
          }}
        />
      ))}
    </div>
  );
}

//
// 🚀 6. Main View
//
export default function PlayerPitchView() {
  return (
    <div className="flex flex-row items-center gap-10 p-6 bg-gray-900 min-h-screen">
      {/* <h1 className="text-white text-2xl font-bold">Team A</h1> */}
      <Pitch formation={formationA} />

      {/* <h1 className="text-white text-2xl font-bold">Team B</h1> */}
      {/* reverse = true flips pitch */}
      <Pitch formation={formationB} />
    </div>
  );
}
