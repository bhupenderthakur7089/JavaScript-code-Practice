// console.dir(document.head);
// document.getElementById();
// console.log(document.domain);
// console.log(document.URL);
// console.dir(document);
// console.log(document.all);
// console.log(document.all[8]);
// document.all[8].textContent='Hello World';
// console.log(document.forms);
// // console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
// console.log(document.getElementById('main-header'));

// let  headerTitle=document.getElementById('header-title');
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// // headerTitle.textContent='This is the heading';
// // headerTitle.innerText='Goodbye';
// // headerTitle.innerHTML='<h3>This is third Heading Size</h3>';
// // headerTitle.style.borderBottom='solid 3px black';
// let header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px black';

var item2=document.querySelector('.list-group-item:nth-child(2)');
var item3=document.querySelector('.list-group-item:nth-child(3)');
// var items=document.getElementsByClassName('list-group-item');
// var items=document.getElementsByTagName('li');
// console.log(typeof items);
// console.log(items[0]);
// items[0].innerHTML='This is new item by inner HTML';
// items[0].style.fontWeight='bold';
item2.style.backgroundColor='green';
item3.style.display='none';
// items.style.display='none';
// console.log(typeof items);
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
//     items[i].style.backgroundColor='#f4f4f4';
// }
// items.forEach(item => {
//     item.style.fontWeight='bold';   
// });
// items[0].textContent='This is new item by text content';
let items = document.querySelectorAll('li');
for(let i=0;i<items.length;i++){
    if((i+1)%2==1){
        items[i].style.backgroundColor='green';
    }
}
// items.forEach(item => {
//     item.style.backgroundColor='#f3f3f3';
// });