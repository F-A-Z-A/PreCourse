

// Создай переменную myVariable и условие if else, по которому консолит: "Переменная содержит значение null" или "Переменная содержит [А СЮДА ВСТАВЬ ЗНАЧЕНИЕ myVariable ]"

let myVariable;

if (myVariable === null) {
	console.log("myVariable is null")
} else if (myVariable === undefined) {
	console.log("myVariable is undefined")
} else {
	console.log("myVariable is " + myVariable)
}