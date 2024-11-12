//const _ = require('lodash');
const data={
    name:"Atul",
    phone:'6396921670',
    address:{
         city:'Ayodhya',
         pin:'224001'
     },
    fun:function(){
        console.log("Anonymous function");
    },
    date:new Date().getFullYear(),
}

5//console.log("=================Shallow Copy=================");
//let user=Object.assign({},data);
//let user={...data};

console.log("=================Deep Copy=================");
//let user = _.cloneDeep(data);
//let user=structuredClone(data)
let user = JSON.parse(JSON.stringify(data));


user.name='Atul1';
user.address.city='Faizabad'
user.date='2030'
console.log(data)
console.log(user)


// console.log(new Date().getMonth())


// function getWeekNumber(date) {
//     const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
//     const dayOfMonth = date.getDate();
//     const weekNumber = Math.ceil((dayOfMonth + firstDayOfMonth.getDay()) / 7);
//     return weekNumber;
// }

// const date = new Date('2024-08-05');
// console.log(getWeekNumber(date)); // Output: 3 (3rd week of August 2024)
