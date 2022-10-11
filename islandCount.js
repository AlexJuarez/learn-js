function islandCount(map) {
  let count = 0;
  for(let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === "1") {
        dfs(j, i, map);
        count++;
      }
    }
  }

  return count;
}

function dfs(x0, y0, map) {
  const queue = [[x0, y0]];
  while (queue.length) {
    const [x, y] = queue.pop();
    if (map[x][y] === "0") continue;
    if (x - 1 >= 0) {
      queue.push([x - 1, y]);
    }
    if (x + 1 < map.length) {
      queue.push([x + 1, y]);
    }
    if(y - 1 >= 0) {
      queue.push([x, y - 1]);
    }
    if (y + 1 < map[0].length) {
      queue.push([x, y + 1]);
    }
    map[x][y] = "0";
  }
}

const test = [
  ["0", "0", "0", "1"],
  ["0", "0", "0", "1"],
  ["0", "0", "0", "1"],
  ["0", "0", "0", "1"],
];

console.log(islandCount(test));