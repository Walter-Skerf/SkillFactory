const arr = [1, 2, 3,];
console.log(arr.length);
for (let a = 0; a < arr.length; ++a) {console.log(arr[a])}

// Всё верно. Только переменную-счетчик, которая используется внутри цикла, имеет смысл объявлять в цикле, не снаружи.