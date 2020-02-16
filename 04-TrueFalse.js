function testTruphy(val){
    return val ? console.log('truphy') : console.log('falsy');
}

testTruphy(true); // true
testTruphy(false); //false
testTruphy(new Boolean(false)); //true (objeto é sempre true)
testTruphy(''); //false
testTruphy('Packt'); //true
testTruphy(new String('')); // true (objeto é sempre true)
testTruphy(1); //true
testTruphy(-1); //true
testTruphy(NaN); //false
testTruphy(new Number(NaN)); //true (objeto é sempre true)
testTruphy({}); //true (objeto é sempre true)
var obj = {name: 'John'};
testTruphy(obj); //true
testTruphy(obj.name); //true
testTruphy(obj.age); //age (propriedade não existe);