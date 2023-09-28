let a = Math.floor(Math.random() * 20) + 1;
console.log(`a = ${a}`);
let akl =""
switch(a>10){
    case true:
        akl+="a is bigger than 10"
        break
    case false:
        akl+="a is less than or equal to 10"
        switch(a==5){
            case true:
                akl +="an example of a special case"
                break
            case false:
                akl+=""
        }
    
}
switch(a==15){
    case true:
        akl+="but is not 15"
        break
    case false:
        akl+=""
}
switch(a>5){
    case true:
        akl+="and a is  greater than 5"
        break
    case false:
        akl+="and a is less than or equal to 5"

}
 switch(a%2==0){
    case true:
        akl+="and a is odd"
        break
    case false:
        akl+="and a is even"
}
console.log(a)