// var arr = new Uint16Array(10);
// arr[0] = 0xFFFF;
// console.log(arr[0]);

let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);     //16

let int8View = new Int8Array(buffer);
console.log(int8View.length);      //16

let int16View = new Int16Array(buffer);
console.log(int16View.length);      // 8

let int32View = new Int32Array(buffer);
console.log(int32View.length);      // 4

for (var i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
}
console.log(int32View)


for (var i = 0; i < int16View.length; i++) {
    console.log('Entry ' + i + ': ' + int16View[i]);
}

console.log(int16View);