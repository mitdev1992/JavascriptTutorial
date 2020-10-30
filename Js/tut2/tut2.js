console.log('Tutorial 2');
console.log(7+11);
console.log(true);
console.log('Mit');
console.log([100,200,300]);
console.log({name:'Mit',rollNo:100});
console.warn('You Get an Error');


//Here we will see The differnce between let and const

let name="MIT";
console.log(name);

name="Foram";
console.log(name);

const surname = "Patel";
console.log(surname);

console.log(surname);
// data types and array
let number =100;
console.log('Number ::::::::'+number);
let myname="mit";
console.log('Name::::::::'+name);

let todayDate =  new Date();
console.log(todayDate);

// If we  want to convert one data type from one type to another type in Javascript

let myvar =100;

let type = String(myvar);
console.log(myvar/2);
console.log(type/2);



let NameOfCouple =['Mit','ForaM'];
console.log(typeof NameOfCouple);

let NameOfCouple1 = Number(NameOfCouple);
console.log(typeof NameOfCouple1);

let i = "abcdefghijklmnopqrstvuwz";
console.log(i.toUpperCase());


let uniid = 10200002020.00200202020020201321001010;
console.log(parseInt(uniid));

//Type correction

let q1=102002;
let q3=Number(q1);

let q2=89;
console.log(q1+q2);
console.log(q3+q2);