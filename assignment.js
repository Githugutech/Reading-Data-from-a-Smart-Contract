'use  strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      ' Pavard',
      ' Martinez',
      ' Davies',
      'Alaba',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Barandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayer] = players1;
console.log(gk, fieldPlayer);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const player1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
console.log(player1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(
    `The total number of goals scored by both teams is ${players.length} goals`
  );
  console.log(players);
};
printGoals('Lewandowski', 'Muller', 'Davis', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Bayern Munich is more likely to win!!!🏆🏆🏆');
team1 > team2 &&
  console.log('Borrussia Dortmund is more likely to win!!!🏆🏆🏆');
// const fieldPlayer = [];
// const payer1Final = [Substitutes];
// const player1New = [...(player1 + ['Thiago', 'Countinho', 'Perisic'])];
// const printGoals = function (goals) {
//   for (i = o; i < goals; i++) {
//     console.log(`The total number of goals scored by both teams is ${goals} `);
//     return goals;
//   }
// };
// for (const [goals, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${goals}: ${player}`);
//   // console.log(`Total goals scored were ${goals}`);
// }

// for (const x of Object.values(game)) {
//   console.log(`${x}`);
// }

// Loop through the game.scored and print each player's name along with the goals
for (const [index, players] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${players}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) console.log((average += odd));
average /= odds.length;
console.log(average);

// Print the odds and the team names
for (const [teams, odd] of Object.entries(game.odds)) {
  console.log(`Odd of team${teams}, ${odd}`);
}
