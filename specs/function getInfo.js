function getInfo (name,surname,age) {
    return `Имя: ${name},Фамилия: ${surname},возраст: ${age}`
}
const myName = getInfo (Alina,Les,11);
console.log(myName);

function returnObject (оbject) {
return [returnObject.name, returnObject.surname, returnObject.age]
}
const myObject = returnObject (Alina,Les,11);
console.log(myObject);

function getInfo (name,surname,age) {
    return `Имя: ${name},Фамилия: ${surname},возраст: ${age}`
}
const myCreds = getInfo (Alina,Les,11);
console.log(myCreds);


function returnObject (оbject) {
return [returnObject.name, returnObject.surname, returnObject.age]
}
const оbject = {
    name:'Alina',
    surname:'Malina',
    age:1,
}
const myyObject = returnObject (Alina,Les,11);
console.log(myyObject);