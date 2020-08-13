let username = ['tola','segun','tobi','a','b','c', 'aa','ab']

function search(arr, name){

for(nam of arr){
 if(nam == name){
     return arr.indexOf(name)
 }

}
 return 'not found'
}

console.log(search(username,'tola'))


// console.log(username.sort())


console.log(username.sort((a,b) => a-b))