// challenge requirements

// In this challenge, I want you to create a Dashboard for all our films. Each film should be
// displayed in our browser, in a box of its own with an image of the film of your choice, similar 
// to how it would
// look on Netflix.
// Please solve this using the film array, as this is an array exercise. Do not hardcode the names,
// even though it might be tempting!

// your code goes here

const films = ['Jaws', 'Aliens', 'Bad Santa', 'Casablanca', 'Ghost', 'Twister', 'Legally Blonde',
    'Elf', 'Zoolander']
const filmPics = ['images/die-hard.jpg']

const squares = Array.from(document.querySelectorAll('.container div'))

for (let i = 0; i < squares.length; i++) {
    squares[0].innerHTML = '<img src = `${filmPics[0]}` width="150px" height="150px">'
    squares[i].innerHTML = films[i]
}






// hint: use a for loop to create the boxes and add information to them.

//level up:
//1. Are you able to add your own personal rating to each film card too?

