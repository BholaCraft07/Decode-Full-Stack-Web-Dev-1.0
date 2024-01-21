let num = 6;
let sum = 0;
if (num <= 0)
{
    console.log("enter positive number");
}
else {
    
    let i = 1;
    do {
        sum += i;
        i++;
    }
    while (i <= num);
}
console.log(sum);