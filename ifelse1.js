let a = Math.floor(Math.random() * 100);
console.log(a)
if (a>10){
    a+=0
}
else{
    a=a*2
}
if (a>5){
    a=2*a+1
}
else{
    if (a<3){
        a=1
    }

    else{
        a=2*a-4
    }
    if (a>4){
        a=5
    }
    else{
        if(a%2==0){
            a=6
        }
        else{
            a=7
        }
    }
}
console.log(a)