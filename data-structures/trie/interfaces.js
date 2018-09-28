export default class TrieInterface {
  /**
   * adds a word to the trie
   * @param {string} word
   * @returns {*}
   */
  add(word) {
    throw new Error('Method not implemented');
  }

  /**
   * removes a word from the trie
   * @param {string} word
   * @returns {*}
   */
  remove(word) {
    throw new Error('Method not implemented');
  }

  /**
   * suggest all valid child characters for the word
   * @param {string} word
   * @returns {string[]}
   */
  suggestNextCharacters(word) {
    throw new Error('Method not implemented');
  }

  /**
   * Does the trie contain the word
   * @param {string} word
   * @returns {boolean}
   */
  has(word) {
    throw new Error('Method not implemented');
  }

  /**
   * returns the last node for the last character in a word
   * @param {string} word
   */
  getLastNode(word) {
    throw new Error('Method not implemented');
  }
}
