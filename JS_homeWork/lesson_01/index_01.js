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

let dayOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

const approach = [
	'1. First approach',
	'2. Second approach',
	'3. Third approach',
	'4. Fourth approach',
]

// ----- Становая тяга
let nameOfExercise_deadlift = 'Deadlift';
// упражнения
const exercise_deadlift = [
	{
		weight: 50,
		repetitions: 10,
	},
	{
		weight: 40,
		repetitions: 15,
	},
	{
		weight: 35,
		repetitions: 12,
	},
	{
		weight: 35,
		repetitions: 12,
	},
]
// картинки
const image_deadlift = [
	'<img src="./img/exercisesOnMonday/deadlift-01_small.png">',
	'<img src="./img/exercisesOnMonday/deadlift-02_small.png">',
	'<img src="./img/exercisesOnMonday/deadlift-03_small.png">'
]

// ----- Подтягивания
let nameOfExercise_pullUpsChinUps = 'Pull-ups & Chin-ups';
// упражнения
const exercise_pullUpsChinUps = [
	{
		weight: 0,
		repetitions: 10,
	},
	{
		weight: 0,
		repetitions: 15,
	},
	{
		weight: 0,
		repetitions: 12,
	},
	{
		weight: 0,
		repetitions: 12,
	},
]
// картинки
const image_pullUpsChinUps = [
	'<img src="./img/exercisesOnMonday/pull_ups_chin-ups-01_small.png">',
	'<img src="./img/exercisesOnMonday/pull_ups_chin-ups-02_small.png">',
	'<img src="./img/exercisesOnMonday/pull_ups_chin-ups-03_small.png">'
]

// ----- Приседания со штангой
let nameOfExercise_barbellSquats = 'Barbell squats';
// упражнения
const exercise_barbellSquats = [
	{
		weight: 50,
		repetitions: 10,
	},
	{
		weight: 40,
		repetitions: 15,
	},
	{
		weight: 35,
		repetitions: 12,
	},
	{
		weight: 35,
		repetitions: 12,
	},
]
// картинки
const image_barbellSquats = [
	'<img src="./img/exercisesOnTuesday/barbell_squats-01_small.png">',
	'<img src="./img/exercisesOnTuesday/barbell_squats-02_small.png">',
	'<img src="./img/exercisesOnTuesday/barbell_squats-03_small.png">'
]

// ----- Выпады с гантелями
let nameOfExercise_dumbbellLunges = 'Dumbbell lunges';
// упражнения
const exercise_dumbbellLunges = [
	{
		weight: 8,
		repetitions: 10,
	},
	{
		weight: 8,
		repetitions: 15,
	},
	{
		weight: 7,
		repetitions: 12,
	},
	{
		weight: 7,
		repetitions: 12,
	},
]
// картинки
const image_dumbbellLunges = [
	'<img src="./img/exercisesOnTuesday/dumbbell_lunges-01_small.png">',
	'<img src="./img/exercisesOnTuesday/dumbbell_lunges-02_small.png">',
	'<img src="./img/exercisesOnTuesday/dumbbell_lunges-03_small.png">'
]

// набор упражнений в "Понедельник"
const exercisesOnMonday = [exercise_deadlift, exercise_pullUpsChinUps];

// набор упражнений во "Вторник"
const exercisesOnTuesday = [exercise_barbellSquats, exercise_dumbbellLunges];

// набор упражнений на "Первую неделю"
const exercisesWeeklyTraining_01 = [exercisesOnMonday, exercisesOnTuesday];

// ---------------- PROGRAM ----------------
document.write(`<h1> Hi, ${currentUser.name} !</h1>`);
document.write(`<h2> Do you want to get in shape? <br> Keep your plan for this week!</h2> <br>`);

document.write(`<h2> ${dayOfWeek[1]} </h2>`);

document.write(`<div class="exercise_wrapper">`);
document.write(`<h2> ${nameOfExercise_pullUpsChinUps} </h2>`);

// if open
document.write(`<span> ${approach[0]} with ${exercise_pullUpsChinUps[0].weight} x ${exercise_pullUpsChinUps[0].repetitions} repetitions</span> <br>`);
document.write(`<span> ${approach[1]} with ${exercise_pullUpsChinUps[1].weight} x ${exercise_pullUpsChinUps[1].repetitions} repetitions</span> <br>`);
document.write(`<span> ${approach[2]} with ${exercise_pullUpsChinUps[2].weight} x ${exercise_pullUpsChinUps[2].repetitions} repetitions</span> <br>`);
document.write(`<span> ${approach[3]} with ${exercise_pullUpsChinUps[3].weight} x ${exercise_pullUpsChinUps[3].repetitions} repetitions</span> <br> <br>`);
document.write(`<span> ${image_pullUpsChinUps[2]} ${image_pullUpsChinUps[1]} ${image_pullUpsChinUps[0]} </span> <br>`);

// if close
document.write('</div>');

