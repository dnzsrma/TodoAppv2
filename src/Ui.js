import { project } from "./project";
import { allProjects } from ".";
import { todoItem } from "./todo";


function createScreen(){
    let container = document.getElementById("main-container");
    let header = document.createElement("div");
    let sidebar = document.createElement("div");
    let taskContainer = document.createElement("div");
    taskContainer.id = "task-container";
    sidebar.id = "sidebar";
    header.id = "header";
    container.appendChild(taskContainer);
    container.appendChild(header);
    container.appendChild(sidebar);
    showSidebarItems();
}
function addProjectButton(){
    let btn = document.createElement("button");
    btn.id = "add-project-btn";
    btn.innerHTML = ("Add project");
    btn.addEventListener("click",function(){
        if(!document.getElementById("popup-project-add")){
            createProjectPopup();
        }  
    });
    document.getElementById("sidebar").appendChild(btn);
}
function createProjectPopup(){
    let popup = document.createElement("div");
    popup.id = "popup-project-add";
    popup.classList.add("popup");
    popup.innerHTML = `
    <button id ="close-button">X</button>
    <label for="ftitle"> TITLE: </label>
    <input type="text" id = "project-title-input" name="ftitle">
    <button id ="project-add-btn">ADD</button>
    `;    
    document.getElementById("main-container").appendChild(popup);
    document.getElementById("close-button").addEventListener("click",function(){
        document.getElementById("popup-project-add").remove();
    });
    projectAddBtn();

}
//Adds project popup's add button the required logic.
function projectAddBtn(){
    document.getElementById("project-add-btn").onclick = function(){
        let projectTitle = document.getElementById("project-title-input").value;
        let newProject = new project(projectTitle);
        allProjects.push(newProject);
        console.log("All projects array : " + allProjects);
        showSidebarItems();
        addProjectButton();
    }
}
function showSidebarItems(){
    if(allProjects.length > 0){
        cleanInside("sidebar");
        for(let i = 0; i < allProjects.length; i++){
            let projectTab = document.createElement("div");
            projectTab.innerHTML = allProjects[i].title;
            projectTab.classList.add("project-tab");
            projectTab.addEventListener("click",function(){
                showTasksInProject(allProjects[i]);
            })
            document.getElementById("sidebar").appendChild(projectTab);
        }
    }
}
function cleanInside(divName){
    let div = document.getElementById(divName);
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}
function showTasksInProject(project){
    cleanInside("task-container");
    project.projectPage();
    let button = document.createElement("button");
    button.id = "new-todo-btn";
    button.onclick = function(){
        openTaskPopup(project);
        console.log(project.arrayOfTodos);
    }
    button.innerHTML = "Add Task To "+ project.title;
    document.getElementById("task-container").appendChild(button);
    
}
function openTaskPopup(project){
    let popup = document.createElement("div");
    popup.id = "popup-task-add";
    popup.classList.add("popup");
    popup.innerHTML = `
    <button class ="close-button">X</button>
    <label for="ftitle"> TITLE: </label>
    <input id = "todo-title-input" type="text" name="ftitle">
    <label for="fdesc"> DESCRIPTION: </label>
    <input id = "todo-desc-input" type="text" name="fdesc">
    <label for="fdue"> DUE DATE: </label>
    <input id = "todo-due-input" type="text" name="fdue">
    <label for="fpriority"> PRIORITY: </label>
    <input id = "todo-priority-input" type="text" name="fpriority">
    <button id ="task-add-btn">ADD</button>
    `;    
    document.getElementById("main-container").appendChild(popup);
    let closeBtns = document.getElementsByClassName("close-button")
    for(let i = 0 ; i < closeBtns.length ; i++ ){
        closeBtns[i].addEventListener("click",function(){
            document.getElementById("popup-task-add").remove();
        });
    }
    
    taskAddBtn(project);
}
function taskAddBtn(project){
        document.getElementById("task-add-btn").onclick = function(){
        let projectTitle = document.getElementById("todo-title-input").value;
        let projectDesc = document.getElementById("todo-desc-input").value;
        let projectDue = document.getElementById("todo-due-input").value;
        let projectPrio = document.getElementById("todo-priority-input").value;
        let newTask = new todoItem(projectTitle,projectDesc,projectDue,projectPrio);
        project.arrayOfTodos.push(newTask);
        showTasksInProject(project);
        console.log(project.arrayOfTodos);
    }
}

export{createScreen,addProjectButton}