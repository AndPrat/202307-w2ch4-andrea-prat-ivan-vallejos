class CodersArray {
  length = 0;

  constructor(...itemsCodersArray) {
    for (const item of itemsCodersArray) {
      this[this.length] = item;
      this.length++;
    }
  }
}

export default CodersArray;
