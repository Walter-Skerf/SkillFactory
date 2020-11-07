const arr = [2,2,2,2, 2,2];
let a = arr[0];
let b =0;
let s = 0;
while (b < arr.length && arr[b] === a)
{
   
    ++b;
    ++s;
}


if (s == arr.length) {console.log(true)
    
} else {console.log(false)
    
}
