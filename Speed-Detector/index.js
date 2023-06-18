const prompt = require('prompt-sync')();

let  userSpeed = prompt("Enter Your Speed");


checkSpeed(Number(userSpeed));


function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {console.log("License suspended");}
    else {console.log("Points", points);
}

  }


  }

  