function flatten(arr) {
  const queue = [arr];
  const output = [];

  while (queue.length) {
    const curr = queue.pop();

    if (Array.isArray(curr)) {
      queue.push(...curr.reverse());
    } else {
      output.push(curr);
    }
  }

  return output;
}

export default flatten;
