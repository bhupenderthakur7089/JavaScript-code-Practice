let form=document.querySelector('#addForm');
let itemList=document.querySelector('#items');
// let filter=document.querySelector('#filter');

//add event listeners
form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteBtn);
// filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    //get input value for new item to be added
    let newItem=document.querySelector('#item').value;
    //create new list element
    let li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node
    li.appendChild(document.createTextNode(newItem));
    //create delete button
    let deleteBtn=document.createElement('button');
    //add class to del button
    deleteBtn.className='btn btn-danger btn-sm float-end delete';
    //add text to the del button
    deleteBtn.appendChild(document.createTextNode('X'));
    //add del button to the list
    li.appendChild(deleteBtn);

    //add li to the Items list
    itemList.appendChild(li);
}

function deleteBtn(e){
    console.log(e.target.parentElement);
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete the Item ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}