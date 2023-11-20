// ---------------- DATA ----------------
// --- ДАННЫЕ ЮЗЕРА
let currentUser = {
	name: 'Andrey',
	gender: 'male',
};

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

// --- РАСПИСАНИЕ НА НЕДЕЛЮ - 01
const exercisesWeeklyTraining_01 = {
	exerciseInMonday: [
		// exercise_deadlift,
		exercise_pullUpsChinUps,
	],
	exerciseInTuesday: [
		exercise_barbellSquats,
		exercise_dumbbellLunges,
	],
	// exerciseInWednesday: [],
	// exerciseInThursday: [],
	// exerciseInFriday: [],
	// exerciseInSaturday: [],
	// exerciseInSunday: [],
}

// --- ДЛИНА ТРЕНИРОВОЧНОЙ НЕДЕЛИ
const weekLength = Object.keys(exercisesWeeklyTraining_01).length

let exercise;


// ---------------- PROGRAM ----------------

// --- ФУНКЦИЯ ОПИСЫВАЮЩАЯ КАРТОЧКУ УПРАЖНЕНИЯ
const writeApproach = () => {
	document.write(`<div class="exercise_wrapper">`);
	document.write(`<h2> ${exercise.name}</h2> <br>`);
	for (let k = 0; k < exercise.repetitions.length; k++) {
		document.write(`<span> ${k + 1}. ${numberOfApproach[k]} </span>`)
		if (exercise.weight[k] > 0) {
			document.write(`<span> with ${exercise.weight[k]} kg x ${exercise.repetitions[k]} repetitions </span> <br>`);
		} else {
			document.write(`<span> ${exercise.repetitions[k]} repetitions </span> <br>`);
		}
	}
	document.write(`<span> ${exercise.image[0]} ${exercise.image[1]} ${exercise.image[2]} </span> <br>`);
	document.write(`</div>`);
}

// --- ВЫПОЛНЕНИЕ ПРОГРАММЫ
document.write(`<h1> Hi, ${currentUser.name}!</h1>`);
document.write(`<h2> Do you want to get in shape? <br> Keep your plan for this week! </h2>`);

for (let i = 0; i < weekLength; i++) {
	switch (dayOfWeek[i]) {
		case 'Monday':
			document.write(`<h2> ${dayOfWeek[0]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInMonday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInMonday[j];
				writeApproach();
			}
			break;
		case 'Tuesday':
			document.write(`<h2> ${dayOfWeek[1]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInTuesday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInTuesday[j];
				writeApproach();
			}
			break;
		case 'Wednesday':
			document.write(`<h2> ${dayOfWeek[1]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInWednesday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInWednesday[j];
				writeApproach();
			}
			break;
		case 'Thursday':
			document.write(`<h2> ${dayOfWeek[1]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInThursday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInThursday[j];
				writeApproach();
			}
			break;
		case 'Friday':
			document.write(`<h2> ${dayOfWeek[1]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInFriday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInFriday[j];
				writeApproach();
			}
			break;
		case 'Saturday':
			document.write(`<h2> ${dayOfWeek[1]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInSaturday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInSaturday[j];
				writeApproach();
			}
			break;
		case 'Sunday':
			document.write(`<h2> ${dayOfWeek[1]} </h2>`);
			for (let j = 0; j < exercisesWeeklyTraining_01.exerciseInSunday.length; j++) {
				exercise = exercisesWeeklyTraining_01.exerciseInSunday[j];
				writeApproach();
			}
			break;
	}
}