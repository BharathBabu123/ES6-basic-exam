// const and let
let name = 'bharath';
let test;

name = 'anu';


const person = {
    name:'bharath',
    age:'23'
};
person.name='anu';
console.log(person);

const no =[1,2,3,4];
no.push(5);
console.log(no);


// Arrow functions-------------------------------------------------------------------------------------------

// function sayhello(){
//     console.log('hello');
// }

const sayhello =  ()=>{console.log('hello');}
sayhello();
// only one parameters
const bharath = ()=> console.log('Anudeep');
bharath();
// concat
const charan =(name)=>console.log('naveen'+name);
charan('dimbu');
// templete literals
const uma =(name)=>console.log(`koti ${name}`);
uma('dharshan');

console.log('----------');
// for each --------------------------------------------------------------------------------------------

const fruits = ['aples','grapes','sita'];
fruits.forEach((fruits,index)=>console.log(fruits));


// map -------------------------------------------------------------------------------------------
const singlefruit = fruits.map((fruit)=>fruit.slice(0,-1).toUpperCase());
console.log(singlefruit);

// filter----------------------------------------------------------------------------

const people = [
    {id:1 , name:'bharath'},
    {id:2 , name:'bharath'},
    {id:3 , name:'bharath'}
];
const people2 =people.filter(person=>person.id !== 2);
console.log(people2);