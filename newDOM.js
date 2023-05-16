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

// var items=document.querySelectorAll('.list-group-item');
var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[0].innerHTML='This is new item by inner HTML';
// items[0].style.fontWeight='bold';
// items[2].style.backgroundColor='green';
console.log(typeof items);
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
// items.forEach(item => {
//     item.style.fontWeight='bold';   
// });
// items[0].textContent='This is new item by text content';
