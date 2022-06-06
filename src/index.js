import css from "./style.css";
import {createScreen,addProjectButton} from "./Ui";


if(localStorage.getItem('allProjects')){
    var allProjects = JSON.parse(localStorage.getItem('allProjects'));
}
else{
    var allProjects = [];
}


createScreen();
addProjectButton();



export{allProjects}