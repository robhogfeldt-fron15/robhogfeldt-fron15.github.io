var addTodo = function(){

	  var id = getItemsCount();


		var task = document.getElementById('task');
		var ul = document.getElementById('todos');
		var todoItem = document.createElement('li');
		todoItem.innerHTML = task.value;
		todoItem.setAttribute('id','myId' + id);
		ul.appendChild(todoItem);
		createTodo(todoItem, id);

	}
var clearInput = function(){
	var input = document.getElementById('task');
	input.textContent = "";
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


  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute('class', 'btn btn-warning');
  deleteBtn.innerHTML = 'Delete';

  var editBtn = document.createElement("button");
  editBtn.setAttribute('class', 'btn btn-primary');
  editBtn.innerHTML = 'Edit';

  var doneBtn = document.createElement("button");
  doneBtn.setAttribute('class', 'btn btn-success');
  doneBtn.innerHTML = 'Done!';


  todo.appendChild(editBtn);
  todo.appendChild(deleteBtn);
  todo.appendChild(doneBtn);


   editBtn.addEventListener("click", function(event) {
   editTodo(todo.id);
 });
  deleteBtn.addEventListener("click", function(event) {
  deleteTodo(todo.id);
});
  doneBtn.addEventListener("click", function(event) {
  doneTodo(todo.id);
});
 
}

function deleteTodo(id){
  var elToRemove = document.getElementById(id);
  elToRemove.parentElement.removeChild(elToRemove);
  document.getElementById('task').value = "";
  
}



function doneTodo(id){		
    var completedTodo = document.getElementById(id);
	var completedList = document.getElementById('completed');
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(completedTodo.firstChild.nodeValue))	
	completedList.appendChild(li);
	deleteTodo(id);
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
