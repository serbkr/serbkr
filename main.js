const tasks = document.querySelector("#tasks .text");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(tasks.value === ''){
      alert("You must write something!");
    }
    else{
      const li = document.createElement("li");
      li.textContent = tasks.value;
      const span = document.createElement("span");
      span.textContent = "\u00d7";
      li.appendChild(span);
      listContainer.appendChild(li);
    }
    tasks.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()