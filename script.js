let keys = Object.keys(spots);
let currentSpot = keys[keys.length * Math.random() << 0];
let supplies = [];
let tricks = [];
let turns = 0;
let fixedSpots = [];

let index = keys.indexOf(currentSpot)
keys.splice(index, 1)
let copSpot = keys[keys.length * Math.random() << 0];
console.log(copSpot)

const currentSpotNode = document.querySelector(`.currentSpot`);
const copSpotNode = document.querySelector(`.copSpot`);
const trickCountNode = document.querySelector(`.trickCount`);
const turnsCountNode = document.querySelector(`.turnCount`);

function increaseTurn() {
  turnsCountNode.innerHTML = ++turns;
}

function changeSpot(dir) {
  if (spots[currentSpot].directions[dir] !== undefined) {
    currentSpot = spots[currentSpot].directions[dir];
    currentSpotNode.innerHTML = currentSpot;
    increaseTurn();
    printToDom(spots[currentSpot].description);
  } else {
    printToDom(`You can't go that way. ⛔`);   
  }
}

function showSupplies() {
  if (supplies.length === 0) {
    printToDom(`You don't have any supplies. 😔`);
    return;
  } 
  printToDom(`Here's your stuff:<br>${supplies.join(', ')}`);
}

function examine() {
  if (spots[currentSpot].examine) {
    printToDom(`${spots[currentSpot].examine[Object.keys(spots[currentSpot].examine)[0]]}`);
  } else {
    printToDom(`Nothing to see here.`);
  }
}

function lookAround() {
  printToDom(spots[currentSpot].lookAround);
}

function pickup(item) {
  if (spots[currentSpot].examine[item] === undefined) {
    printToDom(`There is no ${item} to skate.`);
  } else {
    increaseTurn();
    printToDom(`You picked up ${item}. ${spots[currentSpot].examine.icon}`);
    supplies.push(item);
  }
}

function useItem(item) {
  if (supplies.indexOf(item) === -1) {
    printToDom(`You don't have ${item}.`)
  } else if (!spots[currentSpot].fix) {
    printToDom(`Using ${item} won't do you any good at the ${currentSpot}.`)
  } else if (spots[currentSpot].fix.item === item) {
    increaseTurn();
    printToDom(`${spots[currentSpot].fix.message}. ${spots[currentSpot].fix.icon}`);
    fixedSpots.push(currentSpot);
  } else {
    printToDom(`You can't use ${item} at this spot`);
  }
}

function skateSpot(spot) {
  if (spots[spot] === undefined) {
    printToDom(`There is no ${spot}. 😕`)
  } else if (spot !== currentSpot) {
    printToDom(`You're not at the ${spot}.`);
  } else if (fixedSpots.indexOf(spot) === -1 && spots[currentSpot].trick.notFixed) {
    printToDom(spots[currentSpot].trick.notFixed);
  } else if(tricks.indexOf(spot) !== -1) {
    printToDom(`You already got a clip on the ${spot}. 👍`)
  } else {
    if (Math.round(Math.random())) {
      printToDom(spots[currentSpot].trick.fixed.land);
      tricks.push(spot);
      trickCountNode.innerHTML = tricks.length;
      if (tricks.length > 2) {
        printToDom(`📹🎉🛹You got all the footy you needed! Your part is going to be tight!🛹🎉📹`)
      }
    } else {
      printToDom(spots[currentSpot].trick.fixed.fall);
    }
    increaseTurn();
  }
}


function playerInput(input) { 
  const command = input.split(` `)[0];
  const param = input.split(` `)[1];
  switch(command) {
    case `go`:
      changeSpot(param);
      break;
    case `examine`:
      examine();
      break;
    case `look`:
      param === `around` && lookAround();
      break;
    case `inventory`:
      showSupplies()
      break;
    case `pickup`:
      pickup(param);
      break;
    case `use`:
      useItem(param);
      break;
    case `skate`:
      skateSpot(param);
      break;
    default:
      alert(`invalid move`);
  };
};

document.addEventListener(`keydown`, e => {
  let input = document.querySelector(`.userInput`),
      key = e.key,
      keyCode = e.keyCode;
  if ((key && 'Enter' === key || keyCode && 13 === keyCode) && document.activeElement === input) {
    playerInput(input.value.toLowerCase());
    input.value = '';
  };
});

function printToDom(str) {
  const textArea = document.querySelector(`.gameText`);
  textArea.innerHTML = `<p>${str}</p><hr>` + textArea.innerHTML;
};

printToDom(spots[currentSpot].description);
currentSpotNode.innerHTML = currentSpot;
copSpotNode.innerHTML = copSpot;