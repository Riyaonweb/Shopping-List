const add = document.querySelector('#add');
//Add Event
add.addEventListener('click', () =>{
    const clear = document.querySelector('#clear');
    const item = document.querySelector('#item').value;
    document.querySelector('#item').value = '';
    const li = document.createElement('li');
    const list = document.querySelector("#list"); 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.float = "right";
    li.textContent = item;
    li.appendChild(deleteBtn);
    li.setAttribute('style','border-bottom: 1px solid gray; padding: 5px; margin: 5px; font-family: Arial;') ;
    list.appendChild(li);
    //Delete Event
   deleteBtn.addEventListener('click',(e) => {
    e.target.parentElement.remove();
   })
   //Clear Event
   clear.addEventListener('click',() => {
    list.remove();
   })
    
})