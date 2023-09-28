let a = Math.floor(Math.random() * 20) + 1;
console.log(`a = ${a}`);
let an =""
if (a>10){
    an+="a is bigger than 10"

}
else{
    an+="a is less than or eaual to 10"
    if(a==5){
        an+="an example of a special case"
    }
}
if (a==15){
    an+="but a is not 15"

}
if (a>5){
    an+="and a is greater than 5"
}
else{
    an+="and a is less than or equal to 5" 
}
if (a%2==0){
    an+="and a is odd"
}
else{
    an+="and a is even"
}
console.log(an)