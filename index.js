// challenge requirements

// In this challenge, I want you to create a Dashboard for all our films. Each film should be
// displayed in our browser, in a box of its own with an image of the film of your choice, similar 
// to how it would
// look on Netflix.
// Please solve this using the film array, as this is an array exercise. Do not hardcode the names,
// even though it might be tempting!

// your code goes here

const films = ['Jaws', 'Aliens', 'Die Hard', 'Casablanca', 'Breaking Away', 'Twister', 'Dazed and Confused',
    'Elf', 'Zoolander']
const filmPics = ['images/jaws.jpg', 'images/aliens.jpg', 'images/die-hard.jpg', 'images/casablanca.jpg', 
'images/breaking-away.jpg', 'images/twister.jpg', 'images/dazed.jpg', 'images/elf.jpg', 'images/zoo.jpg']

const squares = Array.from(document.querySelectorAll('.container div'))

for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = `<img src = ${filmPics[i]} width="150px" height="150px"> <p>${films[i]}</p>`
}






// hint: use a for loop to create the boxes and add information to them.

//level up:
//1. Are you able to add your own personal rating to each film card too?

