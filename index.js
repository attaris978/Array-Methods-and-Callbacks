const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
fifaData.filter(val => val.Year === 2014).filter(val => val.Stage === 'Final')[0]['Home Team Name'];
//(b) Away Team name for 2014 world cup final
fifaData.filter(val => val.Year === 2014).filter(val => val.Stage === 'Final')[0]['Away Team Name'];

//(c) Home Team goals for 2014 world cup final
fifaData.filter(val => val.Year === 2014).filter(val => val.Stage === 'Final')[0]['Home Team Goals'];

//(d) Away Team goals for 2014 world cup final
fifaData.filter(val => val.Year === 2014).filter(val => val.Stage === 'Final')[0]['Away Team Goals'];

//(e) Winner of 2014 world cup final */
fifaData.filter(val => val.Year === 2014).filter(val => val.Stage === 'Final')[0]['Win conditions'];


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   return data.filter(val => val.Stage === "Final");
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/
//function processArray (arr) {
  //  return arr.map(val => val.Year);
//}

function getYears(arrayIn,callback) {
    let years = arrayIn.map(val => val.Year);
    return years;
}
//getYears(fifaData,processArray);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

/*const fifaData = [
    {
      "Year": 2014,
      "Datetime": "13 Jul 2014 - 16:00",
      "Stage": "Final",
      "Stadium": "Estadio do Maracana",
      "City": "Rio De Janeiro",
      "Home Team Name": "Germany",
      "Home Team Goals": 1,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina",
      "Win conditions": "Germany win after extra time",
      "Attendance": 74738,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "Nicola RIZZOLI (ITA)",
      "Assistant 1": "Renato FAVERANI (ITA)",
      "Assistant 2": "Andrea STEFANI (ITA)",
      "RoundID": 255959,
      "MatchID": 300186501,
      "Home Team Initials": "GER",
      "Away Team Initials": "ARG"
    },
    {
      "Year": 2014,
      "Datetime": "09 Jul 2014 - 17:00",
      "Stage": "Semi-finals",
      "Stadium": "Arena de Sao Paulo",
      "City": "Sao Paulo",
      "Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina",
      "Win conditions": "Argentina win on penalties (2 - 4)",
      "Attendance": 63267,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "C�neyt �AKIR (TUR)",
      "Assistant 1": "DURAN Bahattin (TUR)",
      "Assistant 2": "ONGUN Tarik (TUR)",
      "RoundID": 255955,
      "MatchID": 300186490,
      "Home Team Initials": "NED",
      "Away Team Initials": "ARG"
    },
    {
        "Year": 1930,
        "Datetime": "30 Jul 1930 - 14:15",
        "Stage": "Final",
        "Stadium": "Estadio Centenario",
        "City": "Montevideo",
        "Home Team Name": "Uruguay",
        "Home Team Goals": 4,
        "Away Team Goals": 2,
        "Away Team Name": "Argentina",
        "Win conditions": "",
        "Attendance": 68346,
        "Half-time Home Goals": 1,
        "Half-time Away Goals": 2,
        "Referee": "LANGENUS Jean (BEL)",
        "Assistant 1": "SAUCEDO Ulises (BOL)",
        "Assistant 2": "CRISTOPHE Henry (BEL)",
        "RoundID": 405,
        "MatchID": 1087,
        "Home Team Initials": "URU",
        "Away Team Initials": "ARG"
      },
    {
      "Year": 2014,
      "Datetime": "05 Jul 2014 - 17:00",
      "Stage": "Quarter-finals",
      "Stadium": "Arena Fonte Nova",
      "City": "Salvador",
      "Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Costa Rica",
      "Win conditions": "Netherlands win on penalties (4 - 3)",
      "Attendance": 51179,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "Ravshan IRMATOV (UZB)",
      "Assistant 1": "RASULOV Abduxamidullo (UZB)",
      "Assistant 2": "KOCHKAROV Bakhadyr (KGZ)",
      "RoundID": 255953,
      "MatchID": 300186488,
      "Home Team Initials": "NED",
      "Away Team Initials": "CRC"
    },
    {
      "Year": 2014,
      "Datetime": "05 Jul 2014 - 13:00",
      "Stage": "Quarter-finals",
      "Stadium": "Estadio Nacional",
      "City": "Brasilia",
      "Home Team Name": "Argentina",
      "Home Team Goals": 1,
      "Away Team Goals": 0,
      "Away Team Name": "Belgium",
      "Win conditions": "",
      "Attendance": 68551,
      "Half-time Home Goals": 1,
      "Half-time Away Goals": 0,
      "Referee": "Nicola RIZZOLI (ITA)",
      "Assistant 1": "Renato FAVERANI (ITA)",
      "Assistant 2": "Andrea STEFANI (ITA)",
      "RoundID": 255953,
      "MatchID": 300186504,
      "Home Team Initials": "ARG",
      "Away Team Initials": "BEL"
    }
  ];
  function getFinals(data) {
    return data.filter(val => val.Stage === "Final");
 }
*/
function getWinners(arr,callback) {
    return callback(arr).map(val =>  val['Away Team Goals'] > val['Home Team Goals'] ? val['Away Team Name'] : val['Home Team Name']);
    
}
//getWinners(fifaData,getFinals);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
/*
const fifaData = [
    {
      "Year": 2014,
      "Datetime": "13 Jul 2014 - 16:00",
      "Stage": "Final",
      "Stadium": "Estadio do Maracana",
      "City": "Rio De Janeiro",
      "Home Team Name": "Germany",
      "Home Team Goals": 1,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina",
      "Win conditions": "Germany win after extra time",
      "Attendance": 74738,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "Nicola RIZZOLI (ITA)",
      "Assistant 1": "Renato FAVERANI (ITA)",
      "Assistant 2": "Andrea STEFANI (ITA)",
      "RoundID": 255959,
      "MatchID": 300186501,
      "Home Team Initials": "GER",
      "Away Team Initials": "ARG"
    },
    {
      "Year": 2014,
      "Datetime": "09 Jul 2014 - 17:00",
      "Stage": "Semi-finals",
      "Stadium": "Arena de Sao Paulo",
      "City": "Sao Paulo",
      "Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina",
      "Win conditions": "Argentina win on penalties (2 - 4)",
      "Attendance": 63267,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "C�neyt �AKIR (TUR)",
      "Assistant 1": "DURAN Bahattin (TUR)",
      "Assistant 2": "ONGUN Tarik (TUR)",
      "RoundID": 255955,
      "MatchID": 300186490,
      "Home Team Initials": "NED",
      "Away Team Initials": "ARG"
    },
    {
      "Year": 2014,
      "Datetime": "05 Jul 2014 - 17:00",
      "Stage": "Quarter-finals",
      "Stadium": "Arena Fonte Nova",
      "City": "Salvador",
      "Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Costa Rica",
      "Win conditions": "Netherlands win on penalties (4 - 3)",
      "Attendance": 51179,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "Ravshan IRMATOV (UZB)",
      "Assistant 1": "RASULOV Abduxamidullo (UZB)",
      "Assistant 2": "KOCHKAROV Bakhadyr (KGZ)",
      "RoundID": 255953,
      "MatchID": 300186488,
      "Home Team Initials": "NED",
      "Away Team Initials": "CRC"
    },
    {
      "Year": 2014,
      "Datetime": "05 Jul 2014 - 13:00",
      "Stage": "Quarter-finals",
      "Stadium": "Estadio Nacional",
      "City": "Brasilia",
      "Home Team Name": "Argentina",
      "Home Team Goals": 1,
      "Away Team Goals": 0,
      "Away Team Name": "Belgium",
      "Win conditions": "",
      "Attendance": 68551,
      "Half-time Home Goals": 1,
      "Half-time Away Goals": 0,
      "Referee": "Nicola RIZZOLI (ITA)",
      "Assistant 1": "Renato FAVERANI (ITA)",
      "Assistant 2": "Andrea STEFANI (ITA)",
      "RoundID": 255953,
      "MatchID": 300186504,
      "Home Team Initials": "ARG",
      "Away Team Initials": "BEL"
    }
  ];
  function getFinals(data) {
    return data.filter(val => val.Stage === "Final");
 }
 function processArray (arr) {
    return arr.map(val => val.Year);
}

function getYears(arrayIn,callback) {
    let years = callback(arrayIn);
    return years;
}
//getYears(fifaData,processArray);



 
function getWinners(arr,callback) {
    let finalists = callback(arr);
    return finalists.map(val => val['Win conditions'].slice(0,val['Win conditions'].indexOf(" ")));
};
*/
function getWinnersByYear(arrIn,callbackFinals,callbackYears,callbackWinners) {
    //for (let i = 0; i < callbackFinals(arrIn).length; i++) {
     return   callbackFinals(arrIn).map((val,i) =>  `In ${callbackYears(arrIn,callbackFinals)[i]}, ${callbackWinners(arrIn,callbackFinals)[i]} won the world cup!`)
   } 
//getWinnersByYear(fifaData,getFinals,getYears,getWinners);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

/*const fifaData = [
    {
      "Year": 2014,
      "Datetime": "13 Jul 2014 - 16:00",
      "Stage": "Final",
      "Stadium": "Estadio do Maracana",
      "City": "Rio De Janeiro",
      "Home Team Name": "Germany",
      "Home Team Goals": 1,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina",
      "Win conditions": "Germany win after extra time",
      "Attendance": 74738,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "Nicola RIZZOLI (ITA)",
      "Assistant 1": "Renato FAVERANI (ITA)",
      "Assistant 2": "Andrea STEFANI (ITA)",
      "RoundID": 255959,
      "MatchID": 300186501,
      "Home Team Initials": "GER",
      "Away Team Initials": "ARG"
    },
    {
      "Year": 2014,
      "Datetime": "09 Jul 2014 - 17:00",
      "Stage": "Semi-finals",
      "Stadium": "Arena de Sao Paulo",
      "City": "Sao Paulo",
      "Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina",
      "Win conditions": "Argentina win on penalties (2 - 4)",
      "Attendance": 63267,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "C�neyt �AKIR (TUR)",
      "Assistant 1": "DURAN Bahattin (TUR)",
      "Assistant 2": "ONGUN Tarik (TUR)",
      "RoundID": 255955,
      "MatchID": 300186490,
      "Home Team Initials": "NED",
      "Away Team Initials": "ARG"
    },
    {
        "Year": 1930,
        "Datetime": "30 Jul 1930 - 14:15",
        "Stage": "Final",
        "Stadium": "Estadio Centenario",
        "City": "Montevideo",
        "Home Team Name": "Uruguay",
        "Home Team Goals": 4,
        "Away Team Goals": 2,
        "Away Team Name": "Argentina",
        "Win conditions": "",
        "Attendance": 68346,
        "Half-time Home Goals": 1,
        "Half-time Away Goals": 2,
        "Referee": "LANGENUS Jean (BEL)",
        "Assistant 1": "SAUCEDO Ulises (BOL)",
        "Assistant 2": "CRISTOPHE Henry (BEL)",
        "RoundID": 405,
        "MatchID": 1087,
        "Home Team Initials": "URU",
        "Away Team Initials": "ARG"
      },
    {
      "Year": 2014,
      "Datetime": "05 Jul 2014 - 17:00",
      "Stage": "Quarter-finals",
      "Stadium": "Arena Fonte Nova",
      "City": "Salvador",
      "Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Costa Rica",
      "Win conditions": "Netherlands win on penalties (4 - 3)",
      "Attendance": 51179,
      "Half-time Home Goals": 0,
      "Half-time Away Goals": 0,
      "Referee": "Ravshan IRMATOV (UZB)",
      "Assistant 1": "RASULOV Abduxamidullo (UZB)",
      "Assistant 2": "KOCHKAROV Bakhadyr (KGZ)",
      "RoundID": 255953,
      "MatchID": 300186488,
      "Home Team Initials": "NED",
      "Away Team Initials": "CRC"
    },
    {
      "Year": 2014,
      "Datetime": "05 Jul 2014 - 13:00",
      "Stage": "Quarter-finals",
      "Stadium": "Estadio Nacional",
      "City": "Brasilia",
      "Home Team Name": "Argentina",
      "Home Team Goals": 1,
      "Away Team Goals": 0,
      "Away Team Name": "Belgium",
      "Win conditions": "",
      "Attendance": 68551,
      "Half-time Home Goals": 1,
      "Half-time Away Goals": 0,
      "Referee": "Nicola RIZZOLI (ITA)",
      "Assistant 1": "Renato FAVERANI (ITA)",
      "Assistant 2": "Andrea STEFANI (ITA)",
      "RoundID": 255953,
      "MatchID": 300186504,
      "Home Team Initials": "ARG",
      "Away Team Initials": "BEL"
    }
  ];
  function getFinals(data) {
    return data.filter(val => val.Stage === "Final");
 }
*/
function getAverageGoals(callback) {
   return (Math.round(callback.map(val => val['Home Team Goals'] + val['Away Team Goals']).reduce((a,b) => a + b,0)/callback.length * 100)/100).toString();

}
//getAverageGoals(getFinals);




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
