import { PlayerType } from "@/constants/marsei-players";
import { nanoid } from "nanoid";

export function normalizePlayerIds(players: PlayerType[]): PlayerType[] {
  const usedIds = new Set<string>();

  return players.map((player) => {
    let id = player.id;

    // Generate a new ID if:
    // - ID doesn't exist
    // - ID is empty
    // - ID was already used
    if (!id || usedIds.has(id)) {
      do {
        id = `player_${nanoid(21)}`;
      } while (usedIds.has(id));
    }

    usedIds.add(id);

    return {
      ...player,
      id,
    };
  });
}
