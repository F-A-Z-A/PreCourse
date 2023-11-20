// ----------- DATA -----------
// создаем currentUser --> вызывает getCurrentUser() --> возвращает объект
const currentUser = getCurrentUser();
// создаем cards --> вызывает getCards() --> возвращает массив
const cards = getCards();
// создаем rootElement --> связывает rootElement с #root
const rootElement = document.querySelector('#root');


// ----------- RENDER -----------
// вызываем renderHeader(), в качестве аргумента передаем currentUser.name
renderHeader(currentUser.name);

// вызываем renderCards(), в качестве аргумента передаем массив cards
renderCards(cards);


// ----------- functions GET -----------
// создает и возвращает объект с данными юзера
function getCurrentUser() {
	let newUser = {
		name: 'Alex',
		age: 39,
		balance: 3333,
	}
	return newUser;
}

// создает и возвращает массив карт
function getCards() {
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

	let cards = [card_1, card_2, card_3];

	return cards;
}

// ----------- functions RENDER -----------

// создает в HTML тег h1 --> в h1 создает текст c заголовком --> помещает h1 в #root
function renderHeader(userName) {
	const h1Element = document.createElement('h1');
	h1Element.innerText = `Hello, ${userName}`;
	rootElement.appendChild(h1Element);
}

// создает в HTML тег h2 --> в h2 создает текст c заголовком --> помещает h2 в #root
function renderCardsHeader() {
	const h2Element = document.createElement('h2')
	h2Element.innerText = `Cards: `
	rootElement.appendChild(h2Element);
}

// вызывает renderCardsHeader() --> цикл for перебирает массив cards
function renderCards(cards) {
	renderCardsHeader();
	for (let i = 0; i < cards.length; i++) {
		// создает в HTML тег div
		const divElement = document.createElement('div');
		// присваивает тегу div параметр class="card_block"
		divElement.classList.add('card_block');

		// создает cardElement --> вызывает createCardElement(cards[i])
		const cardElement = createCardElement(cards[i]);
		// помещает cardElement в div class="card_block"
		divElement.appendChild(cardElement);

		// создает в HTML тег h2
		const h2Element = document.createElement('h2')
		// в h2 создает текст c заголовком
		h2Element.innerText = `History Transaction`;
		// помещает h2Element в div class="card_block"
		divElement.appendChild(h2Element);

		// создает cardElement --> createCardTransactionsElement(cards[i].transactions)
		const transactionElement = createCardTransactionsElement(cards[i].transactions);
		// помещает transactionElement в div class="card_block"
		divElement.appendChild(transactionElement);

		// помещает divElement (cardElement / transactionElement) в #root
		rootElement.appendChild(divElement);
	}
}

// ----------- functions CREATE -----------

// отрисовка данных карты
function createCardElement(card) {
	// создает в HTML тег hr (горизонтальный разделитель)
	const hrElement = document.createElement('hr')
	rootElement.appendChild(hrElement);

	// создает тег div (отображение данных карты)
	const cardElement = document.createElement('div');

	// создает в HTML тег b
	const cardTypeElement = document.createElement('b')
	// в b создает текст с типом карты
	cardTypeElement.innerText = `${card.type} card`;
	// помещает в div (cardElement)
	cardElement.appendChild(cardTypeElement);

	// создает разделитель строки <br>
	const br1 = document.createElement('br');
	cardElement.appendChild(br1);

	// создает тег img
	const networkLogo = document.createElement('img');
	// в соответствии с card.networkType задает логотип карты
	switch (card.networkType) {
		case 'visa':
			networkLogo.src = "./image/visa_logo.png";
			break;
		case 'mastercard':
			networkLogo.src = "./image/mastercard_logo.png";
			break;
	}
	// помещает в div (cardElement)
	cardElement.appendChild(networkLogo);

	// создает в HTML тег b
	const textCurrentBalance = document.createElement('b')
	// в b создает текст с балансом карты
	textCurrentBalance.innerText = `current balance: `;
	// помещает в div (cardElement)
	cardElement.appendChild(textCurrentBalance);

	// создает тег span
	const currencySign = document.createElement('span')
	// в соответствии с card.currencyType задает символ валюты
	switch (card.currencyType) {
		case 'USD':
			currencySign.innerText = '$';
			break;
		case 'EUR':
			currencySign.innerText = '€';
			break;
		case 'GBP':
			currencySign.innerText = '£';
			break;
	}
	// помещает в div (cardElement)
	cardElement.appendChild(currencySign)

	const currentBalance = document.createElement('span');
	currentBalance.innerText = card.currentBalance;
	cardElement.appendChild(currentBalance);

	const cardNumber = document.createElement('h4');
	cardNumber.innerText = card.number;
	cardElement.appendChild(cardNumber);

	const cardExpiration = document.createElement('span');
	cardExpiration.innerText = `${card.expirationMonth} / ${card.expirationYear}`;
	cardElement.appendChild(cardExpiration);

	return cardElement;
}

// создание списка транзакций
function createCardTransactionsElement(transactions) {
	const ulElement = document.createElement('ul');
	for (let j = 0; j < transactions.length; j++) {
		const transactionElement = createTransactionElement(transactions[j]);
		ulElement.appendChild(transactionElement);
	}
	return ulElement;
}

// отрисовка транзакций
function createTransactionElement(transaction) {
	const transactionElement = document.createElement('li');
	transactionElement.innerText = `${transaction.title}, ${transaction.date}, `;

	if (transaction.amount > 0) {
		const transactionAmountIncome = document.createElement('span');
		transactionAmountIncome.classList.add('income');
		transactionAmountIncome.innerText = transaction.amount;
		transactionElement.appendChild(transactionAmountIncome);
	} else {
		const transactionAmountOutcome = document.createElement('span');
		transactionAmountOutcome.classList.add('outcome');
		transactionAmountOutcome.innerText = transaction.amount;
		transactionElement.appendChild(transactionAmountOutcome);
	}
	return transactionElement;
}