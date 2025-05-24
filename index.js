const inputEl = document.getElementById('input-element');  
const unorderEl = document.getElementById('unorderedList');
const btnEl = document.getElementById('button-element'); 
let todoItems =[]     
let editId = null;
document.addEventListener('DOMContentLoaded', () => {
    const savedTodos = localStorage.getItem('todoList');
    if (savedTodos) {
        todoItems = JSON.parse(savedTodos);
    }
    renderListItems(); // only render after data is ready
});

window.changeToComplete=function(id){ 
     if(todoItems.length){
         todoItems.map(eachItem =>{
              if(eachItem?.id === id){
                   eachItem.completed = !eachItem?.completed
              }
         })
     }  
     localStorage.setItem('todoList',JSON.stringify(todoItems))
     renderListItems()

}
window.deleteTheItem= function(id){  
    
   if(todoItems.length >= 1){
         const findexIndex = todoItems.findIndex(each=> each.id === id
         )   
         if(findexIndex !== -1){
               todoItems.splice(findexIndex,1)    
               localStorage.setItem('todoList',JSON.stringify(todoItems))
               renderListItems()
         }   
   }
}
function updateTheItem(id){
    const Index= todoItems.findIndex(each => each.id === id)    
    if(Index !== -1){
        const {value,id,completed} = todoItems[Index]
        inputEl.value = value;   
        editId  = id;
        //todoItems.splice(Index,1);  
        renderListItems()
    }
}
function renderListItems(){      
     unorderEl.textContent='' 
     let AllListItems =''
         todoItems.map(each=>{
              AllListItems+= `
                <div class="listItemContainer">
                    <div class="subListItemContainer"  style="backgroundColor:'pink'">
                        <input onclick="changeToComplete('${each?.id}')" id=${each.id} type='checkbox'  ${each?.completed ? 'checked':''} />
                        <label class='${each.completed ? 'checkElement' :''}' style=color:${each.completed ?'white': 'gray'} for="${each.id}" id="para-${each.id}">${each?.value}</label>
                    </div>  
                     <div>
                          <i class="fa-solid fa-pen delete" onclick="updateTheItem('${each?.id}')"  id='update-${each.id}' style="color: #B197FC; marginRight:30px"></i>
                         <span onclick="deleteTheItem('${each?.id}')" class="delete" id='delete-${each.id}' style="color:red"> x </span>
                     </div>
                </div>
              `
         })  
         unorderEl.innerHTML = AllListItems;
      document.getElementById('todoWrapper').style.display = 'block';
}
btnEl.addEventListener('click',function(){
    if(inputEl.value.trim()){  
         if(editId){
             const Index = todoItems.findIndex(each => each.id === editId); 
             if(Index){
                   todoItems[Index].value= inputEl.value 
             }
         }
           
         else{
                const newItem={
                id:uuid.v4(),
                value : inputEl.value , 
                completed :false
            }     
            todoItems.push(newItem)   
         }  
          inputEl.value=''
         localStorage.setItem('todoList',JSON.stringify(todoItems))
         renderListItems()
    }
})