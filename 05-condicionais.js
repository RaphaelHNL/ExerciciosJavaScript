var num = 1;

//if...else
if(num === 1){
    console.log('num is equal to 1');
}else{
    console.log('num is not equal to, value of num is ' + num);
}

//operador ternario

(num === 1) ? num-- : num++;

//executar o if diversas vezes com if...else if...else

var month = 2;

if(month === 1){
    console.log('Janeiro');
}else if (month === 2){
    console.log('Fevereiro');
}else if (month === 3){
    console.log('março');
}else{
    console.log('Month is not Janeiro, Fevereiro or March');
}

//com switch

switch(month){
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    default:
        console.log('Month is not Janeiro, Fevereiro or March');
}

