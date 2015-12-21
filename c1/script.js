


var addTodo = function(){

	var id = getItemsCount();

	var task = document.getElementById('task');
	var ul = document.getElementById('todos');
	var todoItem = document.createElement('li');
	todoItem.setAttribute('id','myId' + id);
		
	//Förhindra script
	todoItem.innerHTML = preventScripts(task.value);
	
	ul.appendChild(todoItem);
	
	createTodo(todoItem, id);

	}
	
var preventScripts = function(val){
	return val.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}	
var clearInput = function(){
	var input = document.getElementById('task');
	input.value = "";
}

var getItemsCount = function(){
	var ul = document.getElementById('todos');
	var items = ul.querySelectorAll('li');
	if(items){
	var count = items.length;
	return count;
	} else{
		return;
	}

}

function createTodo(todo) {
	
	var lineBreak = document.createElement('hr');
  
  var buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('class', 'col-xs-12')

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute('class', 'btn btn-warning col-xs-3');
  deleteBtn.innerHTML = 'Delete';

  var editBtn = document.createElement("button");
  editBtn.setAttribute('class', 'btn btn-primary col-xs-3');
  editBtn.innerHTML = 'Edit';

  var doneBtn = document.createElement("button");
  doneBtn.setAttribute('class', 'btn btn-success col-xs-3');
  doneBtn.innerHTML = 'Done!';


  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);
  buttonContainer.appendChild(doneBtn);
 
 todo.appendChild(buttonContainer);

   editBtn.addEventListener("click", function(event) {
   editTodo(todo.id);
 });
  deleteBtn.addEventListener("click", function(event) {
  deleteTodo(todo.id);
});
  doneBtn.addEventListener("click", function(event) {
  doneTodo(todo.id);
});
 clearInput();
}

function deleteTodo(id){
  var elToRemove = document.getElementById(id);
  elToRemove.parentElement.removeChild(elToRemove);
  document.getElementById('task').value = "";
  
}

function deleteCompleted(id){
 id.parentNode.parentNode.removeChild(id.parentNode);
  
}


function doneTodo(id){		
    var completedTodo = document.getElementById(id);
	var completedList = document.getElementById('completed');
	var li = document.createElement("li");
	//Knapp för att ta-bort ifrån completed
	var deleteBtn = document.createElement("button");
	deleteBtn.setAttribute('class', 'btn btn-warning');
	deleteBtn.innerHTML = 'Delete';
		
			
    li.appendChild(document.createTextNode(completedTodo.firstChild.nodeValue))	
	li.appendChild(deleteBtn);
	completedList.appendChild(li);
	deleteTodo(id);
	
	deleteBtn.addEventListener("click", function(event) {
  deleteCompleted(this);
});
}


function editTodo(id){
	var completedTodo = document.getElementById(id);
	//Hämta popupen, sätt värdet och "klicka" för att visa
	//Borde kunna lösas snyggare...
	//Måste på nåt sätt kunna få med mig id´t tillbaka ifrån popupen
	//och har därför lagt till attributet name...
	var edit = document.getElementById('edit');
	edit.value = completedTodo.firstChild.nodeValue;
	edit.name = id;
	document.getElementById('myPopup').click();
 
}

function updateEdit(){
	var inp = document.getElementById('edit');	
    var completedTodo = document.getElementById(inp.name);
	completedTodo.firstChild.nodeValue = inp.value;
}
