// The reason why its nPeople in room + 1 is because we count number of people in room before the person joins and we want to ignore 0 because we are using 0 for our default color.
module.exports = (numberInRoom) => numberInRoom + 1;
