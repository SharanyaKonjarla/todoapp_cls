class taskdone {
  constructor(todolistelement) {
    this.todolistelement = todolistelement;
  }
  addToDo() {
    this.todoText = document.querySelector("#todo-text").value;
    if (this.todoText == "") {
      return;
    } else {
      this.todoObject = {
        id: todolist.length+1 ,
        todoText: this.todoText,
        isDone: false,
      };
      todolist.unshift(this.todoObject);
      //console.log(this.todolist);
      //display the added task
      this.displayTodos();
    }
  }
  displayTodos() {    
    todolistelements.innerHTML = "";
    document.querySelector("#todo-text").value = "";
    todolist.forEach((item) => {
      this.listElement = document.createElement("li");
      this.listElement.innerHTML = item.todoText;
      this.delBtn = document.createElement("i");
      this.delBtn.setAttribute("class", "fas fa-trash-alt");
      this.delBtn.setAttribute("data-id", item.id);
      if (item.isDone) {
        listElement.setAttribute("class", "checked");
      }
      this.listElement.setAttribute("data-id", item.id);
      //ADD EVENT TO LIST ITEM
      this.listElement.addEventListener("click", function (e) {
        this.selectedID = e.target.getAttribute("data-id");
        main.doneToDo(this.selectedID);
      });
      this.delBtn.addEventListener("click", function (e) {
        this.delID = e.target.getAttribute("data-id");
        main.deleteitem(this.delID);
      });
      todolistelements.appendChild(this.listElement);
      this.listElement.appendChild(this.delBtn);
    });
  }
  deleteitem(delID) {
    this.deleteIndex = todolist.findIndex((item) => item.id == delID);
    todolist.splice(this.deleteIndex, 1);
    this.displayTodos();
  }
  doneToDo(selectedID) {
    this.selectedIdIndex = todolist.findIndex(
      (item) => item.id == this.selectedID,

    );
    if (this.selectedIdIndex == -1) {
      return;
    } else {
      this.todolist[this.selectedIdIndex].isDone
        ? (this.todolist[selectedIdIndex].isDone = false)
        : (this.todolist[selectedIdIndex].isDone = true);
      this.displayTodos();
    }
  }
  

  
}
const todolist = [];
const todolistelement = document.querySelector("[todo-text]");
const main = new taskdone(todolistelement);
const todolistelements = document.querySelector("#to-do-list-ul");


addtask.addEventListener("click", (button) => {
  main.addToDo();
  
});