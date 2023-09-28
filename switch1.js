let a = Math.floor(Math.random() * 100);
console.log(a)
switch(a>10){
    case true:
        a+=0
        break
    case false:
        a=a*2
}
switch(a>5){

    case true:
        a=2*a+1
        break
    case false:
        switch(a<3){
            case true:
                a=1
                break
            case false:
                a=2*a-4
        }
        switch(a>4){
            case true:
                a=5
                break
            case false:
                switch(a%2==0){
                    case true:
                        a=6
                        break
                    case false:
                        a=7
                }
        }
}
console.log(a)