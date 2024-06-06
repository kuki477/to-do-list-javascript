// link inputow
const mainText = document.getElementById("mainText");
const mainButton = document.getElementById("mainButton");

var toDo = document.getElementById("todoLista");
var licznik = 0;

mainButton.addEventListener("click", function () {
  licznik++;
  utworzTask();
  mainText.value = "";
});

function utworzTask() {
  var task = document.createElement("div");
  task.className = "child";
  task.id = licznik;
  task.textContent = `Zadanie ${licznik}: ${mainText.value}`
  toDo.appendChild(task);

  //usuwanie
  task.addEventListener("dblclick", function () {
    toDo.removeChild(task);
  });

  //   zrobione
  //   task.addEventListener("click", function () {
  //     this.className = "done";
  //   });

  //odznaczanie i zaznaczanie
  task.addEventListener("click", function () {
    if (this.className == "done") {
      this.className = "child";
    } else {
      this.className = "done";
    }
  });
}



// to do 
//dodac localstorage zeby zapisywalo rzeczy ktore zostaly wpisane