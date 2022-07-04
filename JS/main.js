// Define variables
let input=document.querySelector(".taskinput");
let btn=document.querySelector(".taskbtn");
let close=document.querySelector(".closebtn");
let modal=document.getElementById("myModal");
let liarr=[];
let iconarr=[];
let clearbtn=document.querySelector(".clearbtn");
let ul=document.getElementById("list");
let text;
// Modal modification Start
modal.style.zIndex="1000";
btn.addEventListener("click",showpop);
function showpop(){
    if(input.value.trim()==""){
        modal.style.display = "block";
    }
}
close.addEventListener("click",closed);
function closed(){
    modal.style.display = "none";
}
// Modal modification End
// button Modification Start
input.addEventListener("keyup",show);
function show(){
    if(input.value.trim()!=""){
        btn.classList.remove("unactive");
    }
    else{
        btn.classList.add("unactive");
    }
}
// button Modification End
// add task in the task part
btn.addEventListener("click",addTask);
function addTask(){
    if(input.value.trim() != ""){
    var task=document.createElement("li");
    let icon=document.createElement("span");
    task.appendChild(document.createTextNode(input.value));
    task.classList.add("task__list");
    icon.appendChild(document.createTextNode("X"));
    icon.classList.add("exit");
    icon.id="exiticon";
    var x=document.querySelector(".task ul").appendChild(task);
    x.appendChild(icon);
    liarr.push(x);
    iconarr.push(icon);
    input.value="";
    for(let i=0;i<liarr.length;i++){
        iconarr[i].addEventListener("click",exit);
        function exit(){
            liarr[i].style.display="none";
        }
        }
    // button clear all tasks 
clearbtn.addEventListener("click",hide);
function hide(){
    task.style.display="none";
    
}
}
console.log(4); 

// Filter tasks
document.querySelector(".filterinput").addEventListener("keyup",filtered);
function filtered(){
    let filter=document.querySelector(".filterinput");
    const filtervalue=filter.value.toLowerCase();
    const li=document.querySelectorAll("li.task__list");
    li.forEach((item)=>{
        let text=item.textContent;
        if(text.toLowerCase().includes(filtervalue.toLowerCase())){
            item.style.display="";
        }
        else{
            item.style.display="none";
        }
    });
}
}
// Local Storage 
// btn.addEventListener("click",save);
// function save(){
//     for(let i=0;i<liarr.length;i++){
//     window.localStorage.setItem(i,liarr[i].outerHTML);
// }
// for(let i=0;i<localStorage.length;i++){
//     let key=localStorage.key(i);
//     let value=localStorage.getItem(key);
//     liarr[i].outerHTML+=value;
// }
// }
