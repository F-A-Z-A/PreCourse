// ---------- CARDS ----------
let currentUser = {
	name: 'Alex'
}

let card_1 = {
	type: 'debit',
	networkType: 'mastrecard',
	currencyType: 'USD',
	currentBalance: 5750.03,
	number: 5282_3456_7890_1289,
	expirationYear: 2025,
	expirationMonth: 9,
	isActive: true
};

let card_2 = {
	type: 'credit',
	networkType: 'visa',
	currencyType: 'EUR',
	currentBalance: 1343.53,
	number: 9232_6543_2101_2032,
	expirationYear: 2026,
	expirationMonth: 4,
	isActive: false
};

// render
document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');

// render card_1
document.write('<div>');
document.write('<b>', card_1.type + ' card', '</b>','<br>');
document.write('<b>', card_1.networkType, '</b>','<br>');
document.write('<b>', 'current balance: ', '</b>');
document.write('<span>', card_1.currentBalance, '</span>','<br>');
document.write('<h4>', card_1.number, '</h4>','<br>');
document.write('<span>', card_1.expirationMonth, ' / ', card_1.expirationYear, '</span>');
document.write('</div>','<br>');

// render card_2
document.write('<div>');
document.write('<b>', card_2.type + ' card', '</b>','<br>');
document.write('<b>', card_2.networkType, '</b>','<br>');
document.write('<b>', 'current balance: ', '</b>');
document.write('<span>', card_2.currentBalance, '</span>','<br>');
document.write('<h4>', card_2.number, '</h4>','<br>');
document.write('<span>', card_2.expirationMonth, ' / ', card_2.expirationYear, '</span>');
document.write('</div>','<br>');