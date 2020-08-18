// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
// ⭐️ Example Challenge END ⭐️



///// M V P ///////

 /*Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.*/
 
//1. What is the difference between counter1 and counter2?
 //Counter1 uses a closure. Counter2 defines variable outside of the function- global scope 
 
//2. Which of the two uses a closure? How can you tell?

      //The first counter uses a closure as it has a child level function within the function counterMaker.

//3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 //counter1 variable can't be accessed outside the function; counter2 would preferable if you had more functions trying to access the variable  as it is outside of the function 

// counter1 code- keeping track of mulitple counts
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}
const counter1 = counterMaker();
const counter3 = counterMaker();

console.log(counter1())
console.log (counter1(2))
console.log (counter3 ())
console.log (counter1())

//counter2 code-only keeping track of 1 count
let count = 0;

function counter2() {
  return count++;
}

console.log (counter2())
console.log (counter2(2))

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
let points =  Math.floor(Math.random() * 3);
return points;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/  //setting two variables home and away -- in for loop as long as i<number of innings then we are going to add 1 one too it and set home equal 

     function finalScore(inning, num){
      let home = 0
      let away = 0
      for (let i=0; i< num; i++){
        home = home + inning ();
        away = away + inning ();
      }
      return {home,away};
    }
    console.log (finalScore(inning,5));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

//function scoreboard is the higher order function? need to pass through getInningScore? where is this defined and 

function getInningScore (inning){
  return {"home":inning(),"away":inning()}
}
//console.log(getInningScore(inning))

//scoreBoard- higher order function
function scoreBoard(getInningScore, inning, num) {
  let home = 0;
  let away = 0;
  let inningScore =[]
  for (let i=0; i<num; i++){
    const newInning= getInningScore(inning) //invoking getInningScore and setting it to newInnings 
    home = home + newInning.home; //.home dot notion to return home from inside in the object in the getInningScore function
    away = away + newInning.away;
    //array created at top
    inningScore.push(`inning:${i+1} Home:${newInning.home} Away: ${newInning.away}`)
   
  }
  return inningScore;
}

console.log (scoreBoard(getInningScore,inning,9));



