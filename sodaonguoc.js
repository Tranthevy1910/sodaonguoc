let num = Number(prompt("Nhap vao 1 so nguyen duong"));
let result ="";
let numString= num.toString();
for ( let i =0; i < numString.length; i++){
    let surplus = num%10;
    result+=surplus;
    num =Math.floor(num/10);
}
document.write(Number(result));