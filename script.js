/****************
 * Variable and data types
 */

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);


// job = 'Teacher';
// console.log(job);

/****************
 * Variable and mutation and type coercion 
 */

 //type coercion
//  let firstName = 'sam';

//  let age= 29;

//  console.log(firstName + ' ' + age);

//  var job, isMarried;

//  job = 'Teacher';

//  isMarried = false;

//  alert(firstName + ' is a ' + age + ' year old ' + job + '. is he married? ' + isMarried );

//  //variable mutation

//  age = 'twenty eight';
//  console.log(age);

//  job = 'Driver';

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

// console.log(lastName);

/****************
 * Basic operators
 */


// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//  console.log(yearJohn, yearMark);

//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  // Logic operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // Type of operator 
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'What am I??');
// var x;
// console.log(typeof x);


// Operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //Multiple assignments

// var x, y;

// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// //More operators

// x *= 2;
// console.log(x)

// x += 10;
// console.log(x)

// x++;
// console.log(x);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var johnMass = 75; // kg
// var johnHeight = 1.7; // meters

// var markMass = 68; //kg
// var markHeight = 1.8; //meters

// var BMIJohn = johnMass / (johnHeight * johnHeight);
// console.log(BMIJohn);
// var BMIMark = markMass / (markHeight * markHeight);
// console.log(BMIMark);

// var markHigherBMI = BMIMark > BMIJohn;

// console.log("Is Mark\'s BMI higher than john\'s? " + markHigherBMI);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//if/else statements

// var firstName = 'John';
// var civilStatus = 'Single';

// if (civilStatus === 'Married') {
//     console.log(firstName + ' is married!!')
// } else {
//     console.log(firstName + ' will hopefully marry soon!')
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!!')
// } else {
//     console.log(firstName + ' will hopefully marry soon!')
// }

// var johnMass = 75; // kg
// var johnHeight = 1.7; // meters

// var markMass = 98; //kg
// var markHeight = 1.8; //meters

// var BMIJohn = johnMass / (johnHeight * johnHeight);
// console.log(BMIJohn);
// var BMIMark = markMass / (markHeight * markHeight);
// console.log(BMIMark);

// if (BMIMark > BMIJohn){
//     console.log('Mark\'s  BMI is higher than John\'s')
// } else {
//     console.log('John\'s  BMI is higher than Mark\'s')
// }

// //var markHigherBMI = BMIMark > BMIJohn;

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var firstName = "John";
// var age = 22;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if ( age >= 13 && age < 20 ) { // between 13 - 20
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a Man.');
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var firstName = "John";
// var age = 45;

// //Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink)

// if(age >= 18) {
//     var drink = 'beer'
// } else if (age < 18) {
//     var drink = 'juice'
// };

// console.log(drink)

//Switch statement 

// var job = 'Instructor';
// switch(job) {
//     case 'teacher':
//     case 'Instructor':
//         console.log(firstName + ' teaches kids how to code');
//     break;
//     case 'driver': 
//         console.log(firstName + 'drives for uber in france'); 
//     break;  
//     case 'designer':
//         console.log(firstName + 'designs the best clothes');
//     break;
//     default:
//         console.log(firstName + ' does something else');

    
// }

// age = 34;
// switch(true) {
//     case age < 13:
//         console.log(firstName + ' a boy');
//     break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager')
//     break;
//     case age >= 20 && age < 30 :
//         console.log(firstName + ' is a young man')
//     break;
//     default:
//         console.log(firstName + ' is a Man')
    
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Truthy and falsy values nd equality operators

//falsy values: undefined, null, ' ', NaN
//Truthy values: Not falsy values

// var height;

// height = 23;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// }

// //Equality Operators

// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

//>>>>>>>>>Challenge>>>>>>>>>>>>>>>>>

//Johns team scored 89, 120, 103 over the last 3 games 
//Mikes team scored 116, 94, 123 over the last 3 games 

//Work out average score add all 3 numbers up and / 3 
//check the scores against each other - highest wins  
//check if its a draw 
//changes the scores to make sure it works
//Add a third player 

// var johnGames = (10 + 14 + 24) / 3;
// var mikeGames = (10 + 14 + 22) / 3;
// var maryGames = (10 + 14 + 21) / 3;


// if ( johnGames > mikeGames && johnGames > maryGames ) {
//     console.log('John wins with  ' + johnGames + ' points');
// } else if ( mikeGames > johnGames && mikeGames > maryGames ) {
//     console.log('Mike wins with ' + mikeGames + ' points' );
// } else if ( maryGames > johnGames && maryGames > mikeGames ) {
//     console.log('Mary wins with ' + maryGames + ' points');
// } else  {
//      console.log('Its a draw ');
// }

//>>>>>>>>>>>>>Functions>>>>>>>>>>>>>>>>>>>>

function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990); 
var ageMike = calculateAge(1948); 
var ageJane = calculateAge(1969); 

console.log(ageJohn, ageJane, ageMike);

function yearsUntilRetirement(year, firstName) {

    var age = calculateAge(year);
    var retirement = 65 - age;

    if ( retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + 'years.')
    } else {
    console.log(firstName + ' is already retired');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

//>>>>>>>>>>>>> Function statements and expressions >>>>>>>>>>>>>>>>>>>>

//Function declaration 
// function whatDoYouDo(job, firstName) {

// }


//function expression 
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'Teacher':
            return firstName + ' teaches kids how to code.'
        case 'Driver':
            return firstName + ' drives the school bus.'
        case 'designer':
            return firstName + ' designs beautiful websites '
        default:
            return  firstName + ' Does something else'
    }
}

console.log(whatDoYouDo('Teacher', 'john'));

//>>>>>>>>>>>>>>>>>>> Arrays >>>>>>>>>>>

//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names.length)

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'Teacher', false];

john.push('Blue');//Adds to the end of your array
john.unshift('Mr')//Adds to the front of your array
console.log(john)
john.pop()//removes the last item in an array
console.log(john)
john.shift();//Removes the first item in your array
console.log(john)

john.indexOf(1990);
console.log(john.indexOf(45));

var isDesigner = john.indexOf('designer') === -1 ? ' John is NOT a designer' : 'John is a designer';

console.log(isDesigner);

//>>>>>>>>>>> challenge >>>>>>>>>>>>>>

//Bill for each restaurant 1.$124 2.$48 3.$268

// < $50 tip 20%
// $50 - $200 tip 15%
// >$200 ip 10%

//Create a function that calculates the amount tipped 
//An array that holds all 3 tip amounts 
//An array that holds all 3 paid bills including tips

function tipCalculator(tip){

}

var bill = new Array(124, 48, 268);

console.log(bill);

console.table(bill);

var billAmount = function(tip, bill) {

   if( bill < 50) {
        return tip
   } else if ( bill ){

   }

}
billAmount()






