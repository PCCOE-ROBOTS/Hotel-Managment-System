class Queue {
  constructor() {
    this.data = ["no-sort", "asc", "desc"];
  }

  shift() {
    let first = this.data[0];
    let second = this.data[1];
    let last = this.data[2];
    this.data = [second, last, first];
  }
}

export default Queue;
