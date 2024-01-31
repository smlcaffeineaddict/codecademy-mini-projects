const team = {
  _players: [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Doe", age: 22 },
    { firstName: "Mike", lastName: "Smith", age: 28 },
  ],
  _games: [
    { opponent: "Golden State Warriors", teamPoints: 105, opponentPoints: 98 },
    { opponent: "Los Angeles Lakers", teamPoints: 92, opponentPoints: 110 },
    { opponent: "Phoenix Suns", teamPoints: 112, opponentPoints: 107 },
  ],

  get players() {
    return this._players; // returns the entire _players array
  },
  get games() {
    return this._games; // return complete _games array
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer); // add new player to the array
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(newGame); // add new game to the array
  },
};

team.addPlayer("Emily", "Jones", 24);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players); // prints the updated player list

team.addGame("Miami Heat", 95, 102);
team.addGame("Titans", 100, 98);

console.log(team.games);
