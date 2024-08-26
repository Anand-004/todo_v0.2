function check(){
    alert("js connected")
}
//check()
var container=document.getElementById("showList")
var input=document.getElementById("input")
var input2=document.getElementById("input2")
var rembtn=document.querySelector(".removebutton")
var checkbtn=document.querySelector(".checkit")
var overlay=document.getElementById("overlay")
var popup=document.getElementById("popup")
var popup2=document.getElementById("popup2")
var todos=[]
var idname=0;
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem("todos"))|| []
    todos.forEach(todo => {
        createlist(todo)
        
    });
}

overlay.addEventListener("click",()=>{
    hidepopups();
})

function hidepopups(){
    overlay.style.display="none";
    popup.style.display="none"; 
    popup2.style.display="none";  

}

function makeNote(){
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos)
    var todo=input.value;
    
    createlist(todo)
   
}

function createlist(todo){

    console.log(todos.indexOf(todo))
    console.log(typeof(todo))
    
    var div=document.createElement("div")
    div.setAttribute("class","listcont")
    div.innerHTML=`
    <div class="boxlist">
    <input type="checkbox" class="checkit">
    <h3>${todo}</h3>
    </div>
    <button class="removebutton" onclick="removeelt(event);remaray('${todo}')">Del</button>`


    div.addEventListener("dblclick",()=>{showpopup2(todo);
     })
    

    container.append(div)
    overlay.style.display="none";
    popup.style.display="none";   
    input.value=""
}

function removeelt(event){
    event.target.parentElement.remove()
}

function remaray(todo){
    console.log(todo)
    console.log(typeof(todo));
    
    index=todos.indexOf(todo)
    console.log(index)
       if(index > -1){
        todos.splice(index,1)
       }
       localStorage.setItem('todos',JSON.stringify(todos))
}


function showpopup(){
    overlay.style.display="block";
    popup.style.display="block";    

}

function showpopup2(todo){
    overlay.style.display="block";
    popup2.style.display="block";    
    input2.value=todo
}

input2.addEventListener("click",()=>{
    
    globalThis.oldvalue=input2.value

})

function editNote(){
    var oldval=globalThis.oldvalue
    var index02=todos.indexOf(oldval)
    todos[index02]=input2.value
    localStorage.setItem('todos',JSON.stringify(todos))
    overlay.style.display="none";
    popup2.style.display="none";  
    location.reload()    
}
