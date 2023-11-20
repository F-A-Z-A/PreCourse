// ----------- DATA -----------
// создан контейнер всего проекта и привязан к div id="container" в HTML
const containerElement = document.querySelector('#container')
const currentUser = getCurrentUser(); // получение данных юзера
const dayOfWeek = getDayOfWeek(); // получение дней недели
const allExercises = getAllExercises(); // получение всех упражнений
const exercisesOfWeek = getExercisesPlanForWeek(); // получение плана упражнений на неделю
const numberOfApproach = getNumberOfApproach(); // получение номера подхода

// ----------- RENDER -----------
renderHeader(currentUser.name); // вывод приветствия
renderExercisesOfWeek(exercisesOfWeek); // вывод недельной тренировки

// ----------- functions GET -----------
function getCurrentUser() {
	return {
		name: 'Andrey',
		age: 39,
		gender: 'male',
	}
} // получить объект с данными юзера

function getAllExercises() {
	return {
		exercise_deadlift: {
			name: 'Deadlift',
			weight: [50, 40, 35, 35],
			repetitions: [10, 15, 12, 12],
			image: [
				'<img src="./img/exercises/deadlift-01_small.png" alt=":(">',
				'<img src="./img/exercises/deadlift-02_small.png" alt=":(">',
				'<img src="./img/exercises/deadlift-03_small.png" alt=":(">'
			],
		}, // становая тяга
		exercise_pullUpsChinUps: {
			name: 'Pull-ups & Chin-ups',
			weight: [0, 0, 0, 0],
			repetitions: [10, 15, 12, 12],
			image: [
				'<img src="./img/exercises/pull_ups_chin-ups-01_small.png" alt=":(">',
				'<img src="./img/exercises/pull_ups_chin-ups-02_small.png" alt=":(">',
				'<img src="./img/exercises/pull_ups_chin-ups-03_small.png" alt=":(">'
			],
		}, // подтягивания
		exercise_barbellSquats: {
			name: 'Barbell squats',
			weight: [50, 40, 35, 35],
			repetitions: [10, 15, 12, 12],
			image: [
				'<img src="./img/exercises/barbell_squats-01_small.png" alt=":(">',
				'<img src="./img/exercises/barbell_squats-02_small.png" alt=":(">',
				'<img src="./img/exercises/barbell_squats-03_small.png" alt=":(">'
			],
		}, // приседания со штангой
		exercise_dumbbellLunges: {
			name: 'Dumbbell lunges',
			weight: [8, 8, 7, 5],
			repetitions: [10, 15, 12, 12],
			image: [
				'<img src="./img/exercises/dumbbell_lunges-01_small.png" alt=":(">',
				'<img src="./img/exercises/dumbbell_lunges-02_small.png" alt=":(">',
				'<img src="./img/exercises/dumbbell_lunges-03_small.png" alt=":(">'
			],
		}, // выпады
	}
} // получить массив всех упражнений

function getExercisesPlanForWeek() {
	return [
		[ // расписание на понедельник
			dayOfWeek[0],
			allExercises.exercise_deadlift,
			allExercises.exercise_pullUpsChinUps,
		],
		[ // расписание на вторник
			dayOfWeek[1],
			allExercises.exercise_barbellSquats,
			allExercises.exercise_dumbbellLunges,
		],
	]
} // получить массив расписания недельной тренировки

function getDayOfWeek() {
	return [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	]
} // получить массив дней недели

function getNumberOfApproach() {
	return [
		'1. First approach',
		'2. Second approach',
		'3. Third approach',
		'4. Fourth approach',
		'5. Fifth approach',
		'6. Sixth approach',
		'7. Seventh approach',
		'8. Eighth approach',
	]
} // получить массив с номерами подходов

// ----------- functions RENDER -----------
function renderHeader(userName) {
	const h1Element = document.createElement('h1');
	h1Element.innerText = `Hi, ${userName}!`;
	containerElement.appendChild(h1Element);
	const h2Element = document.createElement('h2');
	h2Element.innerText = `Do you want to get in shape? 
	Keep your plan for this week!`;
	containerElement.appendChild(h2Element);
} // вывод приветствия

function renderExercisesOfWeek(exercisesOfWeek) {
	for (let i = 0; i < exercisesOfWeek.length; i++) {
		// вывод дня недели
		createDayOfWeek(exercisesOfWeek[i][0]);

		// перебор дневных тренировок
		for (let j = 0; j < exercisesOfWeek[i].length - 1; j++) {
			// создаем div для упражнений
			const divElement = document.createElement('div');
			// создаем класс для оформления подложки
			divElement.classList.add('exercise_wrapper')
			containerElement.appendChild(divElement);

			// exercise = упражнение в дневной тренировке
			let exercise = exercisesOfWeek[i][j + 1];

			// вывод названия упражнения
			const exerciseDayElement = createExerciseOfDay(exercise);
			divElement.appendChild(exerciseDayElement);

			// перебор подходов
			for (let k = 0; k < exercise.repetitions.length; k++) {
				// вывод подходов (номер, вес, повторения)
				const repetitionsElement = createRepetitions(
					 numberOfApproach[k],
					 exercise.weight[k],
					 exercise.repetitions[k]
				);
				divElement.appendChild(repetitionsElement);
			}

			// перебор картинок
			for (let l = 0; l < exercise.image.length; l++) {
				// вывод картинок
				const imgElement = createImage(exercise.image[l]);
				divElement.appendChild(imgElement);
			}
		}
	}
} // вывод недельной тренировки

function createDayOfWeek(dayOfWeek) {
	const h2Element = document.createElement('h2');
	h2Element.innerText = dayOfWeek;
	containerElement.appendChild(h2Element);
} // вывод дня недели

function createExerciseOfDay(exerciseDay) {
	const exerciseDayElement = document.createElement('h2');
	exerciseDayElement.classList.add('exercise_name');
	exerciseDayElement.innerText = `${exerciseDay.name}`;
	return exerciseDayElement;
} // вывод названия упражнения

function createRepetitions(approach, weight, repetitions) {
	// вывод номера подхода
	const repetitionsElement = document.createElement('p');
	repetitionsElement.innerText = `${approach}`

	// вывод веса и повторений в подходе
	if (weight > 0) {
		const spanElement = document.createElement('span');
		spanElement.innerText = ` with ${weight} kg x ${repetitions} repetitions`;
		repetitionsElement.appendChild(spanElement);
	} else {
		const spanElement = document.createElement('span');
		spanElement.innerText = ` ${repetitions} repetitions`;
		repetitionsElement.appendChild(spanElement);
	}
	return repetitionsElement;
} // вывод подходов

function createImage(image) {
	const imgElement = document.createElement('span');
	imgElement.innerHTML = `${image}`;
	return imgElement;
} // вывод картинок