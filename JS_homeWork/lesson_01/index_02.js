// -----------------------------
//
// запрос у пользователя его веса, роста и возраста
// на основании полученных данных выводить индивидуальные тренировки
// -----------------------------

// ---------------- DATA ----------------
let currentUser = {
	name: 'Andrey',
	gender: 'male',
};

const dayOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const numberOfApproach = [
	'First approach',
	'Second approach',
	'Third approach',
	'Fourth approach',
];

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

const exerciseInMonday = [
	exercise_deadlift,
	exercise_pullUpsChinUps
];

const exerciseInTuesday = [
	exercise_barbellSquats,
	exercise_dumbbellLunges
]

const exercisesWeeklyTraining_01 = [
	exerciseInMonday,
	exerciseInTuesday,
]


// ---------------- PROGRAM ----------------
document.write(`<h1> Hi, ${currentUser.name}!</h1>`);
document.write(`<h2> Do you want to get in shape? <br> Keep your plan for this week! </h2> <br>`);

for (let i = 0; i < exercisesWeeklyTraining_01.length; i++) {
	document.write(`<h2> ${dayOfWeek[i]} </h2>`);

	switch (dayOfWeek[i]) {

		case 'Monday':
			for (let j = 0; j < exerciseInMonday.length; j++) {
				let exercise = exerciseInMonday[j];
				document.write(`<div class="exercise_wrapper">`);
				document.write(`<h2> ${exercise.name}</h2> <br>`);
				for (let k = 0; k < numberOfApproach.length; k++) {
					document.write(`<span> ${k + 1}. ${numberOfApproach[k]} </span>`)
					if (exercise.weight[k] === 0) {
						document.write(`<span> ${exercise.repetitions[k]} repetitions </span> <br>`);
					} else {
						document.write(`<span> with ${exercise.weight[k]} kg x ${exercise.repetitions[k]} repetitions </span> <br>`);
					}
				}
				document.write(`<span> ${exercise.image[0]} ${exercise.image[1]} ${exercise.image[2]} </span> <br>`);
				document.write(`</div>`);
			}
			break;

		case 'Tuesday':
			for (let j = 0; j < exerciseInTuesday.length; j++) {
				let exercise = exerciseInTuesday[j];
				document.write(`<div class="exercise_wrapper">`);
				document.write(`<h2> ${exercise.name}</h2> <br>`);
				for (let k = 0; k < numberOfApproach.length; k++) {
					document.write(`<span> ${k + 1}. ${numberOfApproach[k]} </span>`)
					if (exercise.weight[k] === 0) {
						document.write(`<span> ${exercise.repetitions[k]} repetitions </span> <br>`);
					} else {
						document.write(`<span> with ${exercise.weight[k]} kg x ${exercise.repetitions[k]} repetitions </span> <br>`);
					}
				}
				document.write(`<span> ${exercise.image[0]} ${exercise.image[1]} ${exercise.image[2]} </span> <br>`);
				document.write(`</div>`);
			}
			break;
	}
}
