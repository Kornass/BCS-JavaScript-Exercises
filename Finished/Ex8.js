// Write a function called stringChop that chops a string into chunks of a given length and returns an array with these chunks.

// The function takes 2 arguments -- the first one being the string to chop, and the second one a number that will be the size of you chunks. If the second argument is not provided or it is 0 then your function should return the full original string inside an array.

let stringChop = (str,x) => {
let strToArr = str.split('');
let dividedArr = [];
let cut = [];
if(x > 0) {
for(i=0;i<strToArr.length + i;i++) {
dividedArr.push(strToArr.splice(0,x))

}
for(i=0;i<dividedArr.length;i++) {
    cut.push(dividedArr[i].join(''))
}
return cut
} else if (x == 0) return [str]

return [str]

}

stringChop("BarcelonaCodeSchool")












module.exports = {
    stringChop
}