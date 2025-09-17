class HashTable {
  constructor(limit) {
    this.limit = limit;
    this.storage = [];
  }

  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  set(key, val) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, val]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = val;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, val]);
      }
    }
  }

  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i}: Empty`);
      }
    }
  }
}

const myhashtable = new HashTable(14);
myhashtable.set('John', '111-222-3333');
myhashtable.set('James', '222-333-4444');
myhashtable.set('Jim', '333-444-5555');
myhashtable.set('Sara', '444-555-6666');
myhashtable.printTable();

module.exports = HashTable;
