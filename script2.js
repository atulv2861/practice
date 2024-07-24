//------------------------Polyfills----------------------------
console.log('===============trim================')
let str='  asdf  ';
console.log(str);
console.log(str.replace(/^\s+|\s+$/g,''));

console.log('==============split===============')
let str1='Please Run the code again';
let current='';
let newStr=[];
let separator=' ';
for(let i=0;i<str1.length;i++){
    if(str1[i]===separator){
        newStr.push(current);
        current='';
    }else{
        current+=str1[i];
    }
}
newStr.push(current);
current='';
console.log(newStr)

console.log('==============join===============')
let str2='';
for(let i=0;i<newStr.length;i++){
    if(i==newStr.length-1){
        str2+=newStr[i];
    }else{
        str2+=newStr[i]+' ';
    }
}
console.log(str2);

console.log('==============map===============');
let data=[1,2,3,4,5,6];
Array.prototype.myMap = function(cb) {
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}
const res=data.myMap((num,i,arr)=>num*5);
console.log(res)
console.log('==============filter===============');
Array.prototype.myFilter = function(cb) {
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}
const res1=data.myFilter((num,i,arr)=>num>2);
console.log(res1)

console.log('==============reduce===============');
Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}
const res2=data.myReduce((acc,cur,i,arr)=>acc+cur,0);
console.log(res2)

console.log('==============call===============');
let car={
    color:'Red',
    company:'Ferrari',
};
function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color}-${this.company} car for ${currency} ${price}`);
}

Function.prototype.myCall=function(context={},...args){
    if(typeof this !== `function`){
        throw new Error(this+"It's not callable");
    }
    context.fn=this;
    context.fn(...args);
}
purchaseCar.call(car,"Rs",5000000);

console.log('==============apply===============');
Function.prototype.myApply=function(context={},args=[]){
    if(typeof this !== `function`){
        throw new Error(this+"It's not callable");
    }
    if(!Array.isArray(args)){
        throw new TypeError("Create List From Array Like called on non-object");
    }
    context.fn=this;
    context.fn(...args);
}
purchaseCar.myApply(car,["Rs",5000000]);

console.log('==============bind===============');
Function.prototype.myBind=function(context={},...args){
    if(typeof this !== `function`){
        throw new Error(this+"can't be bound as it's not callable");
    }
    context.fn=this;
    return function(...newArgs){
        return context.fn(...args,...newArgs);
    };
}
const newFun=purchaseCar.myBind(car);
newFun("Rs",5000000);