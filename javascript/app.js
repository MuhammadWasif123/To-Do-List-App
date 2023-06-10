const form=document.querySelector("form");
const list=document.querySelector("ul");
// var list3=[];
// let todos=JSON.parse(localStorage.getItems("mytasks")) || [];

// window.addEventListener("load",()=>{
// // let todo_list=JSON.parse(localStorage.getItem("todos"))||[];
// saveTask();
// showTask();

// })


// })
// let todo=localStorage.getItem("data")
// let  todo_list=todo?JSON.parse(ls):[];


form.addEventListener("submit",(e)=>{
e.preventDefault();
const newGoal=e.target.addGoal.value
// todo_list.push(newGoal);
// console.log(todo_list)

const li=document.createElement('li');

const p=document.createElement('p');
p.textContent=newGoal;

const textInput=document.createElement("input");
textInput.setAttribute("type","text")
// var textInput4=textInput.value;
// todos.push(textInput4);
// saveItem();

const editBtn=document.createElement("button")
const deleteBtn=document.createElement("button")
const updateBtn=document.createElement("button")

editBtn.setAttribute("type","text");
editBtn.setAttribute("class","edit");

deleteBtn.setAttribute("type","button")
deleteBtn.setAttribute("class","delete")

updateBtn.setAttribute("type","button");

const editIcon=document.createElement("i");
const deleteIcon=document.createElement("i");
const updateIcon=document.createElement("i");

editIcon.setAttribute("class","fa-solid fa-pencil");
deleteIcon.setAttribute("class","fa-solid fa-trash");
updateIcon.setAttribute("class","fa-solid fa-check");

editBtn.appendChild(editIcon);
deleteBtn.appendChild(deleteIcon);
updateBtn.appendChild(updateIcon);


li.appendChild(p)
li.appendChild(textInput)
li.appendChild(editBtn)
li.appendChild(deleteBtn)
li.appendChild(updateBtn)
list.appendChild(li)


saveTask(newGoal);
// saveTask();

textInput.style.display="none";
updateBtn.style.display="none";



// localStorage.setItem("Item",li.innerHTML);
// console.log(list3.push(li.innerHTML))


// console.log(t);


p.addEventListener("click",function(){
this.classList.toggle("completed")
})

editBtn.addEventListener("click",()=>{
p.style.display="none";
deleteBtn.style.display="none";
editBtn.style.display="none";
textInput.style.display="block";
textInput.style.border="1px solid #fefefe";
textInput.style.borderRadius="2rem";
textInput.style.fontSize="1.7rem";
textInput.style.fontWeight="500";
updateBtn.style.display="block";
updateBtn.style.backgroundColor="#333";
updateBtn.style.color="#fefefe";
updateBtn.style.fontSize="1.6rem";
textInput.value=p.textContent;
textInput.focus();
// saveTask();
})


updateBtn.addEventListener("click",()=>{
updateBtn.style.display="none";
textInput.style.display="none";
p.style.display="block";
editBtn.style.display="block";
deleteBtn.style.display="block";
p.innerText=textInput.value;
// saveTask();

})


deleteBtn.addEventListener("click",(r)=>{
list.removeChild(r.target.parentElement);
deleteTask(r.target.parentElement);


})

e.target.addGoal.value=" ";
})

// window.addEventListener("load",function(){
// showTask();
// })

function saveTask(todo){
let todos=[];
if(localStorage.getItem("data")===null){
todos=[];
}

else{
todos=JSON.parse(localStorage.getItem("data"));

}


todos.push(todo);     
localStorage.setItem("data",JSON.stringify(todos));


}

function showTask(){

let todos=[];

if(localStorage.getItem("data")===null){
todos=[];

}


else{
todos=JSON.parse(localStorage.getItem("data"))
todos.forEach(todo=>{
    const li=document.createElement('li');

const p=document.createElement('p');
p.textContent=todo;

const textInput=document.createElement("input");
textInput.setAttribute("type","text")
// var textInput4=textInput.value;
// todos.push(textInput4);
// saveItem();

const editBtn=document.createElement("button")
const deleteBtn=document.createElement("button")
const updateBtn=document.createElement("button")

editBtn.setAttribute("type","text");
editBtn.setAttribute("class","edit");

deleteBtn.setAttribute("type","button")
deleteBtn.setAttribute("class","delete")

updateBtn.setAttribute("type","button");

const editIcon=document.createElement("i");
const deleteIcon=document.createElement("i");
const updateIcon=document.createElement("i");

editIcon.setAttribute("class","fa-solid fa-pencil");
deleteIcon.setAttribute("class","fa-solid fa-trash");
updateIcon.setAttribute("class","fa-solid fa-check");

editBtn.appendChild(editIcon);
deleteBtn.appendChild(deleteIcon);
updateBtn.appendChild(updateIcon);


li.appendChild(p)
li.appendChild(textInput)
li.appendChild(editBtn)
li.appendChild(deleteBtn)
li.appendChild(updateBtn)
list.appendChild(li)

textInput.style.display="none";
updateBtn.style.display="none";

p.addEventListener("click",function(){
this.classList.toggle("completed")
})

editBtn.addEventListener("click",()=>{
p.style.display="none";
deleteBtn.style.display="none";
editBtn.style.display="none";
textInput.style.display="block";
textInput.style.border="1px solid #fefefe";
textInput.style.borderRadius="2rem";
textInput.style.fontSize="1.7rem";
textInput.style.fontWeight="500";
updateBtn.style.display="block";
updateBtn.style.backgroundColor="#333";
updateBtn.style.color="#fefefe";
updateBtn.style.fontSize="1.6rem";
textInput.value=p.textContent;
textInput.focus();
// saveTask();
})


updateBtn.addEventListener("click",()=>{
updateBtn.style.display="none";
textInput.style.display="none";
p.style.display="block";
editBtn.style.display="block";
deleteBtn.style.display="block";
p.innerText=textInput.value;
// saveTask();
})


deleteBtn.addEventListener("click",(r)=>{
list.removeChild(r.target.parentElement);
deleteTask(r.target.parentElement);
})

})


}

};




var deleteTask=(task)=>{

let todos=[];

if(localStorage.getItem("data")===null){
todos=[];

}
else{

    todos=JSON.parse(localStorage.getItem("data"));

}
let mytask=task.children[0].innerHTML;
let mytask1=JSON.stringify(mytask);

let myindex=todos.indexOf(mytask1);
todos.splice(myindex,1);
localStorage.setItem("data",JSON.stringify(todos));





}

// deleteTask()


document.addEventListener("DOMContentLoaded",showTask());