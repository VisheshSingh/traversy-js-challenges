export function avoidObstacles(arr: number[]): number {
  let obstacles = arr.sort();
  let max = Math.max(...obstacles);

  for (let jump = 1; jump < max + 1; jump++) {
    let hitObstacle = false;
    for (let pos of obstacles) {
      if (pos % jump === 0) {
        hitObstacle = true;
        break;
      }
    }

    if (!hitObstacle) {
      return jump;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
