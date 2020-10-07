class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }

    //SET/GET

    //SET
//     accepts a key and a value
//     hashes the key
//     stores the key-value pair in the hash table
//     array vai seperate chaining

//     GET
//     accepts a key
//     hashes the key
//     retrieves the key-value pair in the hash table

set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
}
get(key){
   let index = this._hash(key);
   if(this.keyMap[index]){
    for(let i = 0; i< this.keyMap[index].length; i++){
       if(this.keyMap[index][i][0] == key){
           return this.keyMap[index][i][1]
       }
    }
   }
   return undefined;
}

}

let ht = new HashTable()
ht.set("maroon", "#8000000")
ht.set("yellow", "#ffff00")
ht.set("olive", "#808000")
ht.set("salmon", "#fa8072")
ht.set("ligthcoral", "8080f0")
ht.set("maroon", "#8000000")