"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Button, Chip, Input } from "@nextui-org/react";
import { PlayerType } from "@/constants/marsei-players";
import { Plus, Trash2, Pencil, Shirt } from "lucide-react";
import { nanoid } from "nanoid";
import axios from "axios";

type EditableField = "name" | "age" | "rate" | "shirtNumber" | "img";

//
// ---------------------------------------------------------
// FORMATION
// ---------------------------------------------------------
//

// function build433(team: PlayerType[]) {
//   const pick = (pos: PlayerType["position"], count: number) =>
//     team.filter((p) => p.position === pos).slice(0, count);

//   return {
//     Bench: team.filter((p) => p.position === "Bench"),

//     GK: pick("GK", 1),

//     DEF: [...pick("LB", 1), ...pick("CB", 2), ...pick("RB", 1)],

//     MID: [...pick("AM", 1), ...pick("CM", 1)],

//     FWD: [
//       ...pick("LW", 1),
//       ...pick("CF", 1),
//       ...pick("ST", 1),
//       ...pick("RW", 1),
//     ],
//   };
// }

function build343(team: PlayerType[]) {
  const pick = (pos: PlayerType["position"], count: number) =>
    team.filter((p) => p.position === pos).slice(0, count);

  return {
    Bench: team.filter((p) => p.position === "Bench"),

    GK: pick("GK", 1),

    DEF: pick("CB", 3),

    MID: [...pick("LM", 1), ...pick("CM", 2), ...pick("RM", 1)],

    FWD: [...pick("CF", 3)],
  };
}

//
// ---------------------------------------------------------
// POSITION MAP
// ---------------------------------------------------------
//

// const positionMap433 = {
//   GK: [{ top: "88%", left: "50%" }],

//   DEF: [
//     { top: "75%", left: "12%" }, // LB
//     { top: "78%", left: "33%" }, // CB
//     { top: "78%", left: "68%" }, // CB
//     { top: "75%", left: "88%" }, // RB
//   ],

//   MID: [
//     { top: "50%", left: "35%" },
//     { top: "50%", left: "65%" },
//   ],

//   FWD: [
//     { top: "30%", left: "15%" },
//     { top: "12%", left: "40%" },
//     { top: "15%", left: "60%" },
//     { top: "30%", left: "85%" },
//   ],
// };

const positionMap = {
  GK: [{ top: "90%", left: "50%" }],

  DEF: [
    { top: "70%", left: "25%" }, // CB
    { top: "70%", left: "50%" }, // CB
    { top: "70%", left: "75%" }, // CB
  ],

  MID: [
    { top: "50%", left: "15%" }, // LM
    { top: "50%", left: "38%" }, // CM
    { top: "50%", left: "62%" }, // CM
    { top: "50%", left: "85%" }, // RM
  ],

  FWD: [
    { top: "25%", left: "25%" }, // CF
    { top: "15%", left: "50%" }, // AM
    { top: "25%", left: "75%" }, // CF
  ],
};

//
// ---------------------------------------------------------
// PLAYER NODE
// ---------------------------------------------------------
//

function Jersey({ player }: { player: PlayerType }) {
  return (
    <div className="relative w-[85px] h-[75px]">
      <svg viewBox="0 0 100 110" className="absolute inset-0 w-full h-full">
        {/* Full jersey */}
        <path
          d="
            M25 12
            L40 5
            Q50 15 60 5
            L75 12
            L95 30
            L82 48
            L72 40
            L72 105
            L28 105
            L28 40
            L18 48
            L5 30
            Z
          "
          fill="currentColor"
          className="text-blue-300"
        />

        {/* Collar */}
        <path d="M40 5 Q50 15 60 5 Q57 20 50 20 Q43 20 40 5" fill="white" />
      </svg>

      {/* Name */}
      <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[50px] text-center text-[7px] font-bold text-white truncate">
        {player.name}
      </div>

      {/* Shirt number */}
      <div className="absolute top-[28px] left-1/2 -translate-x-1/2 text-xl font-black text-white">
        {player.shirtNumber}
      </div>
      <div className="absolute top-[55px] left-1/2 -translate-x-1/2 w-[50px] text-center text-[7px] font-bold text-white truncate">
        {player.age}y
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PlayerNodeUnuse({
  player,
  style,
  onEdit,
}: {
  player: PlayerType;
  style: React.CSSProperties;
  onEdit: (player: PlayerType) => void;
}) {
  return (
    <div
      className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={style}
      onClick={() => onEdit(player)}
    >
      <div className="relative flex items-center justify-center">
        {/* Jersey */}
        <Jersey player={player} />

        {/* Rate */}
        <Chip
          className="absolute -top-2 -right-5 text-white text-[10px] px-1 rounded"
          color="secondary"
          size="sm"
        >
          {player.rate}
        </Chip>

        {/* Position */}
        <Chip
          className="absolute -left-6 text-white text-[8px] px-1"
          color={player.color}
          size="sm"
          radius="full"
        >
          {player.position}
        </Chip>

        {/* Edit overlay */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition">
          <Pencil size={18} color="white" />
        </div>
      </div>
    </div>
  );
}

function PlayerNode({
  player,
  style,
  onEdit,
}: {
  player: PlayerType;
  style: React.CSSProperties;
  onEdit: (player: PlayerType) => void;
}) {
  return (
    <div
      className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={style}
      onClick={() => onEdit(player)}
    >
      <div className="relative">
        <Avatar
          src={player.img}
          className="w-16 h-16 border-2 border-white"
          color={player.color}
        />

        <Chip
          className="absolute -top-2 -right-2 text-white text-[10px] px-1 rounded"
          color={player.color}
          size="sm"
        >
          {player.rate}
        </Chip>

        {/* Edit icon */}
        <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <Pencil size={18} color="white" />
        </div>
      </div>

      <div className="text-white text-xs font-bold text-center mt-1">
        {player.name} ({player.age}y)
      </div>

      <div className="relative opacity-80 flex justify-center items-center mt-2">
        <Chip
          className="absolute -left-9 text-white text-[8px] px-1"
          color="warning"
          size="sm"
          radius="full"
        >
          {player.position}
        </Chip>

        <Shirt color="white" className="absolute" />

        <div className="text-white text-[10px] opacity-80">
          {player.shirtNumber}
        </div>
      </div>
    </div>
  );
}

//
// ---------------------------------------------------------
// BENCH
// ---------------------------------------------------------
//

function Bench({
  players,
  onEdit,
  onAdd,
}: {
  players: PlayerType[];
  onEdit: (player: PlayerType) => void;
  onAdd: () => void;
}) {
  return (
    <div className="mt-4 rounded-xl bg-gray-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-white font-bold">Bench ({players.length})</div>

        <Button
          size="sm"
          color="success"
          startContent={<Plus size={16} />}
          onPress={onAdd}
        >
          Add Player
        </Button>
      </div>

      {players.length === 0 ? (
        <div className="text-gray-400 text-sm py-3">No bench players</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {players.map((player) => (
            <div
              key={player.id}
              className="flex items-center gap-3 rounded-lg bg-gray-700 p-2 cursor-pointer hover:bg-gray-600 transition"
              onClick={() => onEdit(player)}
            >
              <Avatar
                src={player.img}
                className="w-10 h-10"
                color={player.color}
              />

              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold truncate">
                  {player.name}
                </div>

                <div className="text-gray-400 text-xs">
                  #{player.shirtNumber} · {player.age}y · Rate {player.rate}
                </div>
              </div>

              <Pencil size={15} className="text-gray-400" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

//
// ---------------------------------------------------------
// PLAYER EDITOR
// ---------------------------------------------------------
//

function PlayerEditor({
  player,
  onSave,
  onDelete,
  onClose,
}: {
  player: PlayerType;
  onSave: (player: PlayerType) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState(player);

  const updateField = (field: EditableField, value: string) => {
    setForm((current) => {
      if (field === "name") {
        return {
          ...current,
          name: value,
        };
      }

      return {
        ...current,
        [field]: Number(value),
      };
    });
  };

  return (
    <div className="fixed inset-0 z-[999999] bg-black/60 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="text-white text-lg font-bold">Edit Player</div>

          <Button size="sm" variant="solid" onPress={onClose}>
            Close
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            label="Name"
            value={form.img}
            onChange={(e) => updateField("img", e.target.value)}
          />
          <Input
            label="Name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
          />

          <div className="grid grid-cols-3 gap-3">
            <Input
              type="number"
              label="Age"
              value={String(form.age)}
              onChange={(e) => updateField("age", e.target.value)}
            />

            <Input
              type="number"
              label="Rate"
              value={String(form.rate)}
              onChange={(e) => updateField("rate", e.target.value)}
            />

            <Input
              type="number"
              label="Shirt"
              value={String(form.shirtNumber)}
              onChange={(e) => updateField("shirtNumber", e.target.value)}
            />
          </div>

          <div className="text-gray-400 text-sm">
            Position:{" "}
            <span className="text-white font-semibold">{form.position}</span>
          </div>

          <div className="flex gap-2 mt-3">
            <Button
              color="primary"
              className="flex-1"
              onPress={() => {
                onSave(form);
                onClose();
              }}
            >
              Save
            </Button>

            <Button
              color="danger"
              variant="flat"
              startContent={<Trash2 size={16} />}
              onPress={() => {
                onDelete(form.id);
                onClose();
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

//
// ---------------------------------------------------------
// PITCH
// ---------------------------------------------------------
//

function Pitch({
  formation,
  reverse = false,
  onEdit,
}: {
  formation: ReturnType<typeof build343>;
  reverse?: boolean;
  onEdit: (player: PlayerType) => void;
}) {
  const flip = (value: string) => {
    if (!reverse) return value;
    return `${100 - parseFloat(value)}%`;
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div className="relative w-full h-[600px] bg-green-600 rounded-xl overflow-hidden border-4 border-white">
        {/* Grass */}
        <div className="absolute inset-0 bg-green-600">
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 40px, transparent 40px, transparent 80px)",
            }}
          />
        </div>

        {/* Center line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white" />

        {/* Center circle */}
        <div className="absolute w-40 h-40 border-2 border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Top penalty */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[18%] border-2 border-white border-t-0" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[8%] border-2 border-white border-t-0" />

        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />

        {/* Bottom penalty */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[18%] border-2 border-white border-b-0" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[8%] border-2 border-white border-b-0" />

        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />

        {/* Corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-white border-l-2 border-t-2 rounded-tl-full" />
        <div className="absolute top-0 right-0 w-6 h-6 border-white border-r-2 border-t-2 rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-white border-l-2 border-b-2 rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-white border-r-2 border-b-2 rounded-br-full" />

        {/* GK */}
        {formation.GK.map((p, i) => (
          <PlayerNode
            key={p.id}
            player={p}
            onEdit={onEdit}
            style={{
              top: flip(positionMap.GK[i].top),
              left: positionMap.GK[i].left,
            }}
          />
        ))}

        {/* DEF */}
        {formation.DEF.map((p, i) => (
          <PlayerNode
            key={p.id}
            player={p}
            onEdit={onEdit}
            style={{
              top: flip(positionMap.DEF[i].top),
              left: positionMap.DEF[i].left,
            }}
          />
        ))}

        {/* MID */}
        {formation.MID.map((p, i) => (
          <PlayerNode
            key={p.id}
            player={p}
            onEdit={onEdit}
            style={{
              top: flip(positionMap.MID[i].top),
              left: positionMap.MID[i].left,
            }}
          />
        ))}

        {/* FWD */}
        {formation.FWD.map((p, i) => (
          <PlayerNode
            key={p.id}
            player={p}
            onEdit={onEdit}
            style={{
              top: flip(positionMap.FWD[i].top),
              left: positionMap.FWD[i].left,
            }}
          />
        ))}
      </div>
    </div>
  );
}

//
// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
//

export default function PlayerPitchView() {
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API!;

  const updatePlayer = async (player: PlayerType) => {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        action: "update",
        player,
      }),
    });

    setPlayers((current) =>
      current?.map((p) => (p.id === player.id ? player : p)),
    );
  };

  const [editingPlayer, setEditingPlayer] = useState<PlayerType | null>(null);

  const teamA = useMemo(() => players.filter((p) => p.index === 1), [players]);

  const teamB = useMemo(() => players.filter((p) => p.index === 2), [players]);

  const formationA = useMemo(() => build343(teamA), [teamA]);

  const formationB = useMemo(() => build343(teamB), [teamB]);

  const deletePlayer = async (id: string) => {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        action: "delete",
        id,
      }),
    });

    setPlayers((current) => current.filter((player) => player.id !== id));
  };

  const addBenchPlayer = async (teamIndex: number) => {
    const newPlayer: PlayerType = {
      id: `player_${nanoid(21)}`,
      index: teamIndex,
      name: "New Player",
      age: 20,
      rate: 70,
      shirtNumber: 99,
      position: "Bench",
      img: "",
      color: "default",
    };

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        action: "create",
        player: newPlayer,
      }),
    });

    setPlayers((current) => [...current, newPlayer]);
  };

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        if (!API_URL) {
          throw new Error("Google Sheet API URL is missing");
        }

        const { data } = await axios.get<PlayerType[]>(API_URL);

        console.log("Players:", data);

        setPlayers(data);
      } catch (error) {
        console.error("LOAD PLAYERS ERROR:", error);

        if (axios.isAxiosError(error)) {
          console.error("Axios message:", error.message);
          console.error("Axios code:", error.code);
          console.error("Axios URL:", error.config?.url);
          console.error("Axios response:", error.response);
          console.error("Axios request:", error.request);
        }
      }
    };

    loadPlayers();
  }, [API_URL]);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 p-6 bg-gray-900 min-h-screen">
      {/* TEAM A */}
      <div className="w-full max-w-3xl">
        <div className="text-white text-xl font-bold mb-3 text-center">
          Team A
        </div>

        <Pitch
          formation={formationA}
          reverse={false}
          onEdit={setEditingPlayer}
        />

        <Bench
          players={formationA.Bench}
          onEdit={setEditingPlayer}
          onAdd={() => addBenchPlayer(1)}
        />
      </div>

      {/* TEAM B */}
      <div className="w-full max-w-3xl">
        <div className="text-white text-xl font-bold mb-3 text-center">
          Team B
        </div>

        <Pitch
          formation={formationB}
          reverse={false}
          onEdit={setEditingPlayer}
        />

        <Bench
          players={formationB.Bench}
          onEdit={setEditingPlayer}
          onAdd={() => addBenchPlayer(2)}
        />
      </div>

      {/* EDIT MODAL */}
      {editingPlayer && (
        <PlayerEditor
          player={editingPlayer}
          onSave={updatePlayer}
          onDelete={deletePlayer}
          onClose={() => setEditingPlayer(null)}
        />
      )}
    </div>
  );
}
