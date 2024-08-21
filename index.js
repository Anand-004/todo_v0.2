function check(){
    alert("js connected")
}
var container=document.getElementById("showList")
var input=document.getElementById("input")
var rembtn=document.querySelector(".removebutton")
var checkbtn=document.querySelector(".checkit")
var todos=[]
var idname=0;
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem("todos"))|| []
    todos.forEach(todo => {
        createlist(todo)
        
    });
}

function makeNote(){
    // var item=document.createElement("li")
    // item.innerHTML="<input name='str' type='checkbox' class='strikeit'><label for='str'>"+input.value+"</label>"+"<button onclick='removeelt(event)' style='font-size:12px' class='removebutton'>.</button>"+"<hr>"
    // ul.append(item)
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
    // rembtn.addEventListener('click',()=>{
    //     remaray(todo)
    // })

    

    container.append(div)
    overlay.style.display="none";
    popup.style.display="none";   
    input.value=""
}



function removeelt(event){
    event.target.parentElement.remove()
      
      
    //   index=todos.indexOf(todo)
    //   if(index>-1)
    //     todos.splice(index,1)
      
      

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

var overlay=document.getElementById("overlay")
var popup=document.getElementById("popup")
function showpopup(){
    overlay.style.display="block";
    popup.style.display="block";    

}