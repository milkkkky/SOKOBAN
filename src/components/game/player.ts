import { computed } from "vue";
import { usePlayerStore } from "../../store/player";
export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  } = usePlayerStore();
  window.addEventListener("keyup", (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
      default:
        break;
    }
  });
}

export function usePosition() {
  const { player } = usePlayerStore();
  const STEP = 32;
  const position = computed(() => {
    return {
      left: player.x * STEP + "px",
      top: player.y * STEP + "px",
    };
  });
  return {
    position,
  };
}
