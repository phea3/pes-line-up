"use client";

import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragEndEvent,
} from "@dnd-kit/core";
import { Avatar } from "@nextui-org/react";
import { marsei_players, PlayerType } from "@/constants/marsei-players";

//
// 🧠 SLOT CONFIG (4-3-3)
//
type Slot = {
  id: string;
  position: PlayerType["position"];
  top: string;
  left: string;
};

const slots: Slot[] = [
  { id: "GK", position: "GK", top: "92%", left: "50%" },

  { id: "LB", position: "LB", top: "78%", left: "15%" },
  { id: "CB1", position: "CB", top: "80%", left: "35%" },
  { id: "CB2", position: "CB", top: "80%", left: "65%" },
  { id: "RB", position: "RB", top: "78%", left: "85%" },

  { id: "DM", position: "DM", top: "55%", left: "50%" },
  { id: "CM1", position: "CM", top: "45%", left: "30%" },
  { id: "CM2", position: "CM", top: "45%", left: "70%" },

  { id: "LW", position: "LW", top: "25%", left: "20%" },
  { id: "CF", position: "CF", top: "20%", left: "50%" },
  { id: "RW", position: "RW", top: "25%", left: "80%" },
];

//
// 🎮 DRAGGABLE PLAYER
//
function DraggablePlayer({ player }: { player: PlayerType }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: player.id.toString(),
    data: player,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      className="cursor-grab text-center"
    >
      <Avatar src={player.img} className="w-12 h-12 mx-auto" />
      <div className="text-xs text-white">{player.name}</div>
    </div>
  );
}

//
// 🎯 SLOT NODE
//
function SlotNode({ slot, player }: { slot: Slot; player: PlayerType | null }) {
  const { setNodeRef, isOver } = useDroppable({
    id: slot.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${
        isOver ? "ring-2 ring-yellow-400" : ""
      }`}
      style={{ top: slot.top, left: slot.left }}
    >
      {player ? (
        <Avatar src={player.img} className="w-12 h-12 border-2 border-white" />
      ) : (
        <div className="w-12 h-12 rounded-full border-2 border-dashed border-white opacity-50" />
      )}
    </div>
  );
}

//
// 🚀 MAIN COMPONENT
//
export default function SquadBuilder() {
  const [lineup, setLineup] = useState<Record<string, PlayerType | null>>(
    Object.fromEntries(slots.map((s) => [s.id, null])),
  );

  //
  // 🧠 VALIDATE POSITION
  //
  function isValidPosition(slot: Slot, player: PlayerType) {
    return slot.position === player.position;
  }

  //
  // 🔄 SWAP LOGIC
  //
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const player = active.data.current as PlayerType;
    const targetSlotId = over.id as string;

    const slot = slots.find((s) => s.id === targetSlotId);
    if (!slot) return;

    // ❌ reject wrong position
    if (!isValidPosition(slot, player)) return;

    setLineup((prev) => {
      const newLineup = { ...prev };

      // remove player from previous slot if exists
      const existingSlot = Object.keys(prev).find(
        (key) => prev[key]?.id === player.id,
      );

      if (existingSlot) {
        newLineup[existingSlot] = null;
      }

      // swap if slot occupied
      if (prev[targetSlotId]) {
        const swappedPlayer = prev[targetSlotId];
        if (existingSlot) {
          newLineup[existingSlot] = swappedPlayer;
        }
      }

      newLineup[targetSlotId] = player;
      return newLineup;
    });
  }

  //
  // 💾 EXPORT JSON
  //
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function exportSquad() {
    const result = {
      formation: "4-3-3",
      lineup: Object.fromEntries(
        Object.entries(lineup)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, p]) => p)
          .map(([slot, p]) => [slot, p!.id]),
      ),
    };

    console.log("SQUAD JSON:", result);
    alert(JSON.stringify(result, null, 2));
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-6 p-6 bg-gray-900 min-h-screen text-white">
        {/* 🟢 PITCH */}
        <div className="relative w-[500px] h-[700px] rounded-xl overflow-hidden border-4 border-white">
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

          {/* 👇 PLAYERS */}
          {slots.map((slot) => (
            <SlotNode key={slot.id} slot={slot} player={lineup[slot.id]} />
          ))}
        </div>

        {/* 🧾 BENCH */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {marsei_players.map((p) => (
              <DraggablePlayer key={p.id} player={p} />
            ))}
          </div>

          {/* <button onClick={exportSquad} className="bg-blue-500 p-2 rounded">
            Export Squad JSON
          </button> */}
        </div>
      </div>
    </DndContext>
  );
}
