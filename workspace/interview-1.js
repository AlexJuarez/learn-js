function missingWords(s, t) {
  const words = s.split(/\s/g);
  const wordMap = {};
  words.forEach((w, i) => {
    if (wordMap[w] == null) {
      wordMap[w] = [];
    }
    wordMap[w].push(i);
  });

  t.split(/\s/g).forEach((w) => {
    wordMap[w].shift();
  })


}
