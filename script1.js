const btn=document.querySelector(".increment_btn");
const btnPressed=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

let triggerCount=0;
let pressedCount=0;

// -------------Throttling--------------
//time interval
const start=new Date().getTime();

const myThrottle=(cb,d)=>{
    let last=0;
    return(...args)=>{
        let now=new Date().getTime();
        if(now-last<d) return;
        last=now;
        return cb(...args);
    }
}

const throttled=myThrottle(()=>{
    triggerCount+=1;
    count.innerHTML=triggerCount;
},1000);

// -------------Debouncing--------------
const myDebounce=(cb,d)=>{
    let timer;
    return function (...args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...args);
        },d);
    }
}

const debouncedCount=myDebounce(()=>{
    triggerCount+=1;
    count.innerHTML=triggerCount;
},800);



btn.addEventListener("click",()=>{
    btnPressed.innerHTML=++pressedCount;
    throttled();
})