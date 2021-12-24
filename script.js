window.onload = addToList;//Вызываем функцию при загрузке страницы

function addToList(){//объявляем функцию
    var todoList = [];//создаем массив тудулист
    if(localStorage.getItem('todo')!=undefined) {//если ничего нет в массиве localstorage по указанному ключу, todo
        todoList = JSON.parse(localStorage.getItem('todo'));// Мы получаем данные по ключу todo и записывем это в локал стораж 
        out();//Вызываем фунцию out, out->addToList-> onload
    }
    document.getElementById("add").onclick = function(){//Добавляем функцию добавить в список
        var d = document.getElementById('in').value; //Переменной d добавляем обработчик событий на инпут in в html
       // {todo : Добавить Хлеб, check: false} То что нам надо
       var temp  = {};//Объявляем объект temp
       temp.todo = d;//в этом объекте первым ключом задаем todo и присваиваем его d, а  в d мы именно записываем что мы сделали "поел"
       temp.check = false;// следующим  ключом в объекте  будет check, а значением false, то есть check: false, значение еще не проверено
       var i = todoList.length;// Создаем переменную i она будет равна длине массива todoList
       todoList[i] = temp;// Присваиваем итой тудулиста объект temp 
       out();// Вызываем функцию out, мы обязательно должны после объявления функции, вызывать её
     
       localStorage.setItem('todo', JSON.stringify(todoList));// Мы передаем ключ и значение методу setItem интерфейса storage, чтобы записать данные в хранилище, причем мы применяем метод stringify к массиву todoList, чтобы превратить его в string( строку), только так браузер сохранит значение в хранилище

       
    }
    function out () {// создаем функцию out 
        var out = '';// Создаем переменную out
        
        for ( let key in todoList) { // запускаем цикл по переменны key в массиве todoList
            if(todoList[key].check == true) {// условие, если  key, следовательно ключ в значении check правда
                out +='<input type="checkbox" checked>';// Мы переменной оут назначаем чекбокс чекед
            }
            else {
                out +='<input type="checkbox" >';// Мы переменной оут назначаем чекбокс просто, он не чекед
            }
            out += todoList[key].todo + '<br>';// мы также переменной аут назначаем ключ для значения todo, причем с переводом на следующую строку
     
        }
        document.getElementById('out').innerHTML =  out;// назначаем обработчик для id out из html, и в innerHTML выводим out
    }

}


