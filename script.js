menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav')/*переменная Х которая применяет значения по елементу з идентификатором (myTopnav)*/

	if (x.className == "topnav"){
		x.className += " responsive";
	} 
	else{
		x.className = "topnav";
	}
}
/*1. При клике menu.onclick(меню) запускаем функцию function myFunction()
  2. Переменой X присваюєм елемент з индификатором ('myTopnav') 
  3. Пишем условие в кором значения атрибута className проверяем ,=== сравнюет на идентичность (содержит ли клас topnav)
    если да то добавляем клас responsive */
