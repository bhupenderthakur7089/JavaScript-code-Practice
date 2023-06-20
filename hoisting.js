// console.log(printName());
// console.log(a);
// var a =3;
// var printName=(name)=>{
//     console.log(name);
// }
// printname='john';
// let a=2;
// let c=2;
// function b(){
//     var x=2;
//     var c=4;
//     console.log(c);
// }
// console.log(a);
// console.log(window.a);
// console.log(this.c);
// console.log(this.x);
// console.log(window.a);
// console.log(window.x);
// console.log(b());
// function outer(){
//     console.log(a);
//     var a =10;
//     inner();
//     function inner(){
//         console.log(a);
//         console.log(window.a);
//         console.log(this.a);
//     }
// }
// var a=7;
// var b=3;
// outer();
// let a=5;
// const b;
// b=6;
// console.log(this.b);
// console.log(window.b);
// console.log(window.a);
// console.log(this.a);
// console.log('a');
// console.log('b');
// setTimeout(()=>console.log('c'),1000);
// setTimeout(()=>console.log('d'),0);
// console.log('e');
// var a = 40;
// {
//  let a=100;
// }
// console.log(a);

// function x(){
//     let a=20;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     let a=30;
//     function y(){
//         return a;
//     }
//    console.log(y());
// }
// x();

// function x(){
//     let a=50;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// console.log(x());

// function x(){
//     let a=20;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// const z=x();
// console.log(z());

// function x(){
//     let a=20;
//     function y(){
//         console.log(a);
//     }
//     a=30;
//     return y;
// }
// const z=x();
// console.log(z());

// var obj={
//     num:100
// }
// function display(a){
//     console.log(this.num+a);
// }
// display.call(obj);

// var obj={
//     num:100
// }
// function display(a){
//     console.log(this.num+a);
// }
// display.call(obj,3);

// var obj={
//     num:100
// }
// function display(a,b,c){
//     console.log(this.num+a+b+c);
// }
// display.call(obj,3,5,7);

// var obj={
//     num:100
// }
// function display(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// display.call(obj,[3,4,5]);

// var obj={
//     num:100
// }
// function display(a,b,c){
//     console.log(this.num+a+b+c);
// }
// display.apply(obj,[3,4,5]);

// var obj={
//     num:100
// }
// function display(a,b,c){
//     console.log(this.num+a+b+c);
// }
// const disp=display.bind(obj);
// disp(1,2,3);

// function y(){
//     setTimeout(function(){
//         console.log("a");
//     },1000)
//     console.log("done coding");
// }
// y();

// function y(){
//     setTimeout(function(){
//         console.log("b");
//     },0)
//     console.log("done coding");
// }
// y();

// function y(){
//     for(var i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)    
//     }

//     console.log("done coding");
// }
// y();

// function y(){
//     for(let i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)    
//     }

//     console.log("done coding");
// }
// y();

// const num=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         console.log("hello "+arr[i]);
//     }
// }
// let x=num(["ram","shyam"]);
// a();
// b();
// function a(){
//     console.log("inside a");
// }
// var b=function(){
// console.group("inside b");
// }

// function a(){
//     console.log("inside a");
// }
// var b=function abc(){
// console.group("inside b");
// }

// a();
// abc();

// function a() {
//     console.log("a");
//     return () => {
//         console.log("b");
//     }
// }
// let result=a();
// console.log(result);

// function a() {
//     var a=10;
//     return () => {
//         a=20;
//         console.log(a);
//     }
// }
// a()();

// function add(a) {
//     return () => {
//         a+=20;
//         console.log(a);
//     }
// }
// add(10)(20);

// function add(a) {
//     return (b) => {
//         a+=b;
//         console.log(a);
//     }
// }
// add(10)(30);

function add(a) {
    const add1 = (b) => {
        a+=b;
        console.log(a);
    }
    return add1;
}
add(10)(30);