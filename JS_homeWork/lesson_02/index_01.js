// ---------------- DATA ----------------
const containerElement = document.querySelector('#container')

// --- ДАННЫЕ ЮЗЕРА
const currentUser = getCurrentUser();

// --- ДНИ НЕДЕЛИ
const dayOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

// --- НОМЕРА ПОДХОДОВ
const numberOfApproach = [
	'First approach',
	'Second approach',
	'Third approach',
	'Fourth approach',
	'Fifth approach',
	'Sixth approach',
	'Seventh approach',
];

// --- УПРАЖНЕНИЕ "СТАНОВАЯ ТЯГА"
const exercise_deadlift = {
	name: 'Deadlift',
	weight: [50, 40, 35, 35],
	repetitions: [10, 15, 12, 12],
	image: [
		'<img src="./img/exercisesOnMonday/deadlift-01_small.png">',
		'<img src="./img/exercisesOnMonday/deadlift-02_small.png">',
		'<img src="./img/exercisesOnMonday/deadlift-03_small.png">'
	],
}

// --- УПРАЖНЕНИЕ "ПОДТЯГИВАНИЯ"
const exercise_pullUpsChinUps = {
	name: 'Pull-ups & Chin-ups',
	weight: [0, 0, 0, 0],
	repetitions: [10, 15, 12, 12],
	image: [
		'<img src="./img/exercisesOnMonday/pull_ups_chin-ups-01_small.png">',
		'<img src="./img/exercisesOnMonday/pull_ups_chin-ups-02_small.png">',
		'<img src="./img/exercisesOnMonday/pull_ups_chin-ups-03_small.png">'
	],
}

// --- УПРАЖНЕНИЕ "ПРИСЕДАНИЯ СО ШТАНГОЙ"
const exercise_barbellSquats = {
	name: 'Barbell squats',
	weight: [50, 40, 35, 35],
	repetitions: [10, 15, 12, 12],
	image: [
		'<img src="./img/exercisesOnTuesday/barbell_squats-01_small.png">',
		'<img src="./img/exercisesOnTuesday/barbell_squats-02_small.png">',
		'<img src="./img/exercisesOnTuesday/barbell_squats-03_small.png">'
	],
}

// --- УПРАЖНЕНИЕ "ВЫПАДЫ"
const exercise_dumbbellLunges = {
	name: 'Dumbbell lunges',
	weight: [8, 8, 7, 5],
	repetitions: [10, 15, 12, 12],
	image: [
		'<img src="./img/exercisesOnTuesday/dumbbell_lunges-01_small.png">',
		'<img src="./img/exercisesOnTuesday/dumbbell_lunges-02_small.png">',
		'<img src="./img/exercisesOnTuesday/dumbbell_lunges-03_small.png">'
	],
}

// --- РАСПИСАНИЕ НА НЕДЕЛЮ
const exercisesWeeklyTraining = [
	[
		dayOfWeek[0],
		exercise_deadlift,
		exercise_pullUpsChinUps,
	],
	[
		dayOfWeek[1],
		exercise_barbellSquats,
		exercise_dumbbellLunges,
	],
]

// ----------- RENDER -----------
renderHeader(currentUser.name)

// вывод недельной тренировки
for (let i = 0; i < exercisesWeeklyTraining.length; i++) {
	// вывод дня недели
	renderDayOfWeek(exercisesWeeklyTraining[i][0]);

	// вывод дневной тренировки
	for (let j = 0; j < exercisesWeeklyTraining[i].length - 1; j++) {
		// создаем div class='exercise_wrapper' в div id='container'
		const divElement = document.createElement('div');
		divElement.classList.add('exercise_wrapper')
		containerElement.appendChild(divElement);
		//  exercise = упражнение в дневной тренировке
		let exercise = exercisesWeeklyTraining[i][j + 1];
		// пишем название упражнения
		const h2Element = document.createElement('h2');
		h2Element.classList.add('exercise_name')
		h2Element.innerText = `${exercise.name}`;
		divElement.appendChild(h2Element);

		// вывод подходов
		for (let k = 0; k < exercise.repetitions.length; k++) {
			// вывод номера подхода
			const pElement = document.createElement('p');
			pElement.innerText = `${k + 1}. ${numberOfApproach[k]}`
			divElement.appendChild(pElement);

			// вывод веса и повторов в подходе
			if (exercise.weight[k] > 0) {
				const spanElement = document.createElement('span');
				spanElement.innerText = ` with ${exercise.weight[k]} kg x ${exercise.repetitions[k]} repetitions`;
				pElement.appendChild(spanElement);
			} else {
				const spanElement = document.createElement('span');
				spanElement.innerText = ` ${exercise.repetitions[k]} repetitions`;
				pElement.appendChild(spanElement);
			}
		}

		// вывод картинок
		for (let l = 0; l < exercise.image.length; l++) {
			const imgElement = document.createElement('span');
			imgElement.innerHTML = `${exercise.image[l]}`;
			divElement.appendChild(imgElement);
		}
	}
}

// ----------- FUNCTIONS -----------

function getCurrentUser() {
	return {
		name: 'Andrey',
		age: 39,
		gender: 'male',
	}
}

function renderHeader(userName) {
	const h1Element = document.createElement('h1');
	h1Element.innerText = `Hi, ${userName}!`;
	containerElement.appendChild(h1Element);
	const h2Element = document.createElement('h2');
	h2Element.innerText = `Do you want to get in shape? 
	Keep your plan for this week!`;
	containerElement.appendChild(h2Element);
}

function renderDayOfWeek(day) {
	const h2Element = document.createElement('h2');
	h2Element.innerText = day;
	containerElement.appendChild(h2Element);
}