export default class TrieNode {
  constructor(character, isWord = false) {
    this.character = character;
    this.isWord = isWord;
    this.children = new Map();
  }

  getChild(character) {
    return this.children.get(character);
  }

  addChild(character, isWord = false) {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isWord));
    }

    const childNode = this.getChild(character);

    childNode.isWord = childNode.isWord || isWord;

    return childNode;
  }

  removeChild(character) {
    const childNode = this.getChild(character);

    if (
      childNode != null
      && !childNode.isWord
      && !childNode.hasChildren()
    ) {
      this.children.delete(character);
    }

    return this;
  }

  hasChild(character) {
    return this.children.has(character);
  }

  hasChildren() {
    return this.children.keys().length !== 0;
  }

  suggestChildren() {
    return [...this.children.keys()];
  }

  toString() {
    const children = Array.from(this.children.values()).map(child => child.toString());
    const childrenAsString = children.length ? `:${children.join(', ')}` : '';
    const isCompleteString = this.isWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
