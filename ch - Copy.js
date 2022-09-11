console.log("common play");
//const prompt= require("prompt-sync")();
/*
var fname=prompt("enter first name");
var sname=prompt("enter 2nd name");
console.log("full name of person is "+fname,sname);
*/
let x=news("mixing");
function news(x){
    return "row";
}
let str="How is it made";
console.log(str.indexOf("s"));
console.log("function value print is "+x);
const car={type:"riot",model:"200",color:"blue"};
console.log(car.type+" "+car.color);

const cars=["Honda","safari","maruti"];
cars.forEach(eachTraverse);
function eachTraverse(value){
   console.log(value);
}

//console.log(value);

//
let reach=function(){
    console.log("Hello,try");
   // return 2;
}
console.log(reach);

let r=(u1,u2)=>{
    console.log("required value");
    if(u1>0 && u2>0){
    return u1+u2;
    }
    else{
        u1=Math.abs(u1);
        u2=Math.abs(u2);
        return u1*u2;
    }
}
console.log(r(2,6));
console.log(r(-2,6));

//Async,callback,promises,Async/Await
const datas=[{id:"123A",age:24,prof:"jing"},
        {id:"123B",age:25,prof:"kins"}
    ];
function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output=output+"<p>${data.age}</p>";
    })
    document.body.innerHTML=output
},1000);
}

function createData(newData,callback){
    setTimeout(() => {
        datas.push(newData);
        callback();
    }, 3000);
}

//callback is used to require the particular method when required, but because of sometimeout the data display took more time than expected.
createData({id:"123C",age:25,prof:"tings"},getDatas)
//promise has two argument called resolve or rject. These both can be put into if loop or after some conditional check. positive is resolve negative is reject.


//Async and await.
//Note: await works only with async. These all async,await and promise are used with third party call, such as fetching the data from API,Jos library.
function getDemo(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=<li><u>${data.id}</u></li>
    })
    document.body.innerHTML=output
},1000);
}

function createDemo(newData,callback){
    setTimeout(() => {
        datas.push(newData);
        callback();
    }, 3000);
}

async function usestart(){
   await createDemo({id:"123C",age:25,prof:"tings"})
   getDemo();
}

usestart();



