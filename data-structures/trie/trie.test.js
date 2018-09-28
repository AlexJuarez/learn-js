import Trie from '.';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('add()', () => {
    const word = 'banana';
    const word2 = 'bananas';

    test('one word', () => {
      trie.add(word);
      expect(trie.has(word)).toBeTruthy();
      expect(trie.has(word2)).toBeFalsy();
    });

    test('two words', () => {
      trie.add(word);
      trie.add(word2);
      expect(trie.has(word)).toBeTruthy();
      expect(trie.has(word2)).toBeTruthy();
    });
  });

  test('remove()', () => {
    const word = 'test1';

    trie.add(word);
    expect(trie.has(word)).toBeTruthy();
    trie.remove(word);
    expect(trie.has(word)).toBeFalsy();
  });

  test('suggestNextCharacters()', () => {
    const word1 = 'abba';
    const word2 = 'abbc';
    const test = 'abb';

    trie.add(word1);
    trie.add(word2);

    expect(trie.suggestNextCharacters(test)).toEqual(jasmine.arrayContaining(['a', 'c']));
  });

  test('has()', () => {
    const test = 'test123';

    expect(trie.has(test)).toBeFalsy();

    trie.add(test);

    expect(trie.has(test)).toBeTruthy();
  });

  test('getLastNode()', () => {
    const word = 'testword';
    trie.add(word);

    expect(trie.getLastNode(word).isWord).toBeTruthy();
  });

  test('toString()', () => {
    const word = 'testword';
    const output = '*:t:e:s:t:w:o:r:d*';
    trie.add(word);

    expect(trie.toString()).toEqual(output);
  });
});
