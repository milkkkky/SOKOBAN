import { createPinia, setActivePinia } from "pinia";
import { usePlayerStore } from "../player";
import { it, expect, describe, beforeEach } from "vitest";
describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should move to left", () => {
    const { movePlayerToLeft, player } = usePlayerStore();
    player.x = 1;
    player.y = 1;
    movePlayerToLeft();
    expect(player.x).toBe(0);
  });
});
