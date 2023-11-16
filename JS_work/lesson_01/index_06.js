// ---------- CARDS ----------
let currentUser = {
	name: 'Alex'
}

let card_1 = {
	type: 'debit',
	networkType: 'mastercard',
	currencyType: 'USD',
	currentBalance: 5750.03,
	number: 5282_3456_7890_1289,
	expirationYear: 2025,
	expirationMonth: 9,
	isActive: true,
	transactions: [
		{
			title: 'Order Revenue',
			amount: 874,
			date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
		},
		{
			title: 'Order Revenue',
			amount: -874,
			date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
		}
	]
};

let card_2 = {
	type: 'credit',
	networkType: 'visa',
	currencyType: 'EUR',
	currentBalance: 1343.53,
	number: 9232_6543_2101_2032,
	expirationYear: 2026,
	expirationMonth: 4,
	isActive: false,
	transactions: [
		{
			title: 'Order Revenue',
			amount: -874,
			date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
		},
		{
			title: 'Order Revenue',
			amount: -874,
			date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
		}
	]
};

let card_3 = {
	type: 'debit',
	networkType: 'mastercard',
	currencyType: 'GBP',
	currentBalance: 3263.65,
	number: 5543_2593_4958_2930,
	expirationYear: 2028,
	expirationMonth: 3,
	isActive: true,
	transactions: [
		{
			title: 'Order Revenue',
			amount: 874,
			date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
		},
		{
			title: 'Order Revenue',
			amount: 874,
			date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
		}
	]
};

let cards = [card_1, card_2, card_3]

// render
document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');

for (let i = 0; i < cards.length; i++) {
	let card = cards[i];
	document.write('<hr>');
	document.write('<div class="card_block">');
	document.write('<b>', card.type + ' card', '</b>','<br>');
	let networkLogo = '';
	switch (card.networkType) {
		case 'visa':
			networkLogo = '<img src="visa_logo.png">';
			break;
		case 'mastercard':
			networkLogo = '<img src="mastercard_logo.png">';
			break;
	}

	document.write(networkLogo);
	document.write('<b>', 'current balance: ', '</b>');
	let currencySign = '';
	switch (card.currencyType) {
		case 'USD':
			currencySign = '$';
			break;
		case 'EUR':
			currencySign = '€';
			break;
		case 'GBP':
			currencySign = '£';
			break;
	}

	document.write('<span>', currencySign, card.currentBalance, '</span>','<br>');
	document.write('<h4>', card.number, '</h4>','<br>');
	document.write('<span>', card.expirationMonth, ' / ', card.expirationYear, '</span>');
	document.write("<h2>", "History Transaction", "</h2>");
	document.write("<ul>");
	for (let j = 0; j < card.transactions.length; j++) {
		let transaction = card.transactions[j];
		document.write("<li>", transaction.title, ", ", transaction.date, ", ");
		if (transaction.amount > 0) {
			document.write('<span class="income">', transaction.amount, "</span>")
		} else {
			document.write('<span class="outcome">', transaction.amount, "</span>")
		}
		document.write("</li>");
	}
	document.write("</ul>");
	document.write('</div>','<br>');
	document.write('<hr>');
}
