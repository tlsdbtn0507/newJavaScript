class HashTable {
  constructor(size = 4) {
  // constructor(size = 51) {
    this.keyMap = new Array(size)
  }

  hash( key ) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length,100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value)%this.keyMap.length
    }

    return total
  }

  set(key,value) {
    const hashVal = this.hash(key);
    if (!this.keyMap[hashVal]) this.keyMap[hashVal] = [[key,value]];
  
    else this.keyMap[hashVal].push([key,value]);
  
    return this.keyMap
  }

  get(key) {
    const result = this.keyMap.
      filter(e => e[0][0] === key).
      flat().
      filter(e => e[0] === key);
    
    return result.length ? result.flat()[1] : undefined
  }
  
  getKeys() {
    const result = this.keyMap.map(e=>e).flat().map(v=>v[0])
    return Array.from(new Set(result))
  }

  getValues() {
    const result = this.keyMap.map(e=>e).flat().map(v=>v[1])
    return result
  }
}

const ex = new HashTable()

ex.set('a','f')
ex.set('b','g')
ex.set('c','h')
ex.set('d','i')
ex.set('e','j')
// console.log(ex.keyMap)
console.log(ex.getKeys())
console.log(ex.getValues())
// console.log(ex.get('e'))
// console.log(ex.get('f'))

// console.log(ex.set('a','f'))
// console.log(ex.set('b','g'))
// console.log(ex.set('c','h'))
// console.log(ex.set('d','i'))
// console.log(ex.set('e','j'))