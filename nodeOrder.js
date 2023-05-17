let items=document.querySelector('.list-group');
console.log(items.parentNode);
console.log(items.childNodes);
console.log(items.children[4]);
console.log(items.firstChild);
console.log(items.lastChild);
console.log(items.firstElementChild);
console.log(items.lastElementChild);
 console.log(items.nextSibling);
console.log(items.nextElementSibling);
 console.log(items.previousSibling);
 console.log(items.previousElementSibling);

let newDiv=document.createElement('div');
newDiv.className='newText';
newDiv.id='head';
let text=document.createTextNode('Hello User');
newDiv.innerHTML='Hello User';
console.log(newDiv);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
console.log(h1);
container.insertBefore(newDiv,h1);
