export interface ILoading {
  type:
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";

  width?: number;
  height?: number;
  color?: string;
}
