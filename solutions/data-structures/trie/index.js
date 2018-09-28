import TrieNode from './TrieNode';
import TrieInterface from ':data-structures/trie/interfaces';

const HEAD_CHARACTER = '*';

class Trie extends TrieInterface {
  constructor() {
    super();
    this.root = new TrieNode(HEAD_CHARACTER);
  }

  add(word) {
    const characters = Array.from(word).reverse();
    let curr = this.root;

    while (characters.length) {
      const char = characters.pop();
      curr = curr.addChild(char);

      if (characters.length === 0) {
        curr.isWord = true;
      }
    }

    return this;
  }

  remove(word) {
    const characters = Array.from(word).reverse();

    let curr = this.root;

    while (characters.length) {
      const character = characters.pop();

      if (!curr.hasChild(character)) {
        return this;
      }

      const node = curr.getChild(character);

      if (characters.length === 0) {
        node.isWord = false;
      }

      curr.removeChild(character);

      curr = node;
    }

    return this;
  }

  suggestNextCharacters(word) {
    const lastCharacter = this.getLastNode(word);

    if (lastCharacter == null) {
      return [];
    }

    return lastCharacter.suggestChildren();
  }

  has(word) {
    const lastCharacter = this.getLastNode(word);

    return lastCharacter != null && lastCharacter.isWord;
  }

  getLastNode(word) {
    const characters = Array.from(word).reverse();

    let curr = this.root;

    while (characters.length) {
      const character = characters.pop();
      if (!curr.hasChild(character)) {
        return null;
      }

      curr = curr.getChild(character);
    }

    return curr;
  }

  toString() {
    return this.root.toString();
  }
}

export default Trie;
