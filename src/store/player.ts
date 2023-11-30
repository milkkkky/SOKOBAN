import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", () => {
  function movePlayerToLeft() {
    player.x -= 1;
  }
  const player = {
    x: 1,
    y: 1,
  };
  return { player, movePlayerToLeft };
});
