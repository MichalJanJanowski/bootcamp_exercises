var name = "Michał"
var dayOfBirth = "8"
var name = "Michal"
var favColor = prompt("What is your favourite color?")

console.log(favColor + " is a nice color")
var string = "this is a quite '' so is this \"\" "
var thing

var favouriteFoods = []

console.log(favouriteFoods.pop())
var instructor = "Elie";
var anotherInstructor = instructor;

var arr = ["JavaScript", "Python", "Ruby", "Java"]
arr.concat(["Haskell", "Clojure"])
console.log(arr)
console.log(arr.join(", "))

for(var i = 0; i<5; i++){
    if(Math.random() > 0.5){
        console.log("Breaking out of the loop when i is " + i);
        break;
    }
    else {
        console.log(i);
    }
}

for(var i = 0; i<5; i++){
    if(Math.random() > 0.5){
        console.log("Skipping the console.log when i is " + i);
        continue;
    }
    console.log(i);
}

var people = ["Matt", "Greg", "Mary", "Devon", "James"];
var del = "James"

// for(var i = 0; i < people.length; i++){
//     if(people[i] === del){
//         people.splice(i,1)
//     }
// }

for(var i = 0; i < people.length; i++){
    console.log(people[i])
    if(people[i] === "Mary"){
        break
    }
}

var people2 = people.slice()
people2.splice(people.indexOf("Mary"),1)
people2.splice(people.indexOf("Matt"),1)
console.log(people.indexOf("Mary"))
console.log(people.indexOf("Foo"))

people.splice(people.indexOf("Devon"),1, "Elizabeth", "Artie")
var withBob = people.concat("Bob")
console.log(withBob)

var obj = {
    firstName: "Michal",
    lastName: "Janowski",
    occupation: "Developer"
}

console.log(obj.firstName)
console.log(obj["lastName"])

obj.hobby = "Crossfit"
delete obj.occupation

console.log(obj)

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for(key in namesAndHobbies){
    console.log(`${namesAndHobbies[key]} => ${key}`)
}

namesAndHobbies.michal = "crossfit"

if("michal" in namesAndHobbies){
    for(key in namesAndHobbies){
        if(key === "michal"){
            console.log(`${namesAndHobbies[key]} => ${key}`)
        }
    }
}

var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// programming.languages.push("Go")
// programming.difficulty = 7
// delete programming.jokes
// programming.isFun = true
// for(let i = 0; i < programming.languages.length; i++){
//     console.log(programming.languages[i])
// }
// for(key in programming){
//     console.log(key)
// }
for(key in programming){
    console.log(programming[key])
}
// console.log(programming)

function myName(){
    var fullName = "Michal Janowski"
    console.log(fullName)
}

arr = ["pizza", "ice cream"]

function randomFood(){
    if(Math.random() > .5){
        return arr[0]
    }
    return arr[1]
}

var numbers = [1,2,3,4,5,6,7,8,9,10]

function displayOddNumbers(){
    numbers.forEach(element => {
        if(element % 2 !== 0){
            console.log(element)
        }
    })
}

function displayEvenNumbers(){
    numbers.forEach(element => {
        if(element % 2 === 0){
            console.log(element)
        }
    })
}

function returnFirstOddNumber(){
    numbers.forEach(element => {
        if(element % 2 === 0){
            return element
        }
    })
}

function returnFirstEvenNumber(){
    numbers.forEach(element => {
        if(element % 2 === 0){
            return element
        }
    })
}

function returnFirstEvenNumber(){
    numbers.forEach(element => {
        if(element % 2 === 0){
            return element
        }
    })
}

function returnFirstHalf(){
    for(let i = 0; i < numbers.length/2; i++){
        console.log(numbers[i])
    }
}

function returnSecondHalf(){
    for(let i = numbers.length/2; i < numbers.length; i++){
        console.log(numbers[i])
    }
}

function add(a,b){
    return a+b
}

function subtract(a,b){
    a-b
}

function multiply(a,b){
    a*b
}

function divid(a,b){
    a/b
}

function sayHello(name){
    if (name === "Michal"){
        return "Hi Boss"
    }
    return `Hi ${name}`
}

function average(arr){
    var sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum/arr.length
}

function createStudent(a,b){
    return {
        firstName: a,
        lastName: b
    }
}

var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie]

function findStudentByFirstName(firstName){
    for(let i = 0; i < students.length; i++){
        if(firstName.toLowerCase() === students[i].firstName.toLowerCase()){
            return true
        }
    }
    return false
}

function extractEveryThird(arr){
    var arr2= []
    for(let i = 2; i < arr.length; i+=3){
        arr2.push(arr[i])
    }
    return arr2
}

function countEvensAndOdds(arr){
    var oddCount = 0
    var evenCount = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenCount++
        }else{
            oddCount++
        }
    }

    return {
        oddCount: oddCount,
        evenCount: evenCount
    }
}

function onlyCapitalLetters(string){

    var arr = []

    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            arr.push(string[i])
        }
    }
    return arr.join("")
}

personObject = {
    person: "Elie",
    getName: function(){
        return personObject.person
    },
    setName: function(newName){
        personObject.person = newName
    }
}

var personObject = (function invokeRightAway(){
    var person = "Elie";
    return {
        getName: function(){
            return person;
        },
        setName: function(newName){
            person = newName;
        }
    };
})();

(function displayFullName(a,b){
    return a + " " + b
})("Michal", "Janowski")

function createCalculator(){
    return{
        add: function(a,b){
            return a+b
        },
        
        subtract: function(a,b){
            return a-b
        },

        multiply: function(a,b){
            return a*b
        },

        divide: function(a,b){
            return a/b
        }
    }
}

console.log(mat)

var mat = "mat"

function difference(a,b){
    return a-b
}

function product(a,b){
    return a+b
}

function printDay(a){
    switch(a){
        case 1: return "Monday"
        case 2: return "Thuesday"
        case 3: return "Wensday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Sturday"
        case 7: return "Sunday"
        default: undefined
    }
}

function lastElement(arr){
    return arr[arr.length - 1]
}

function numberCompare(a,b){
    switch(a>b){
        case true: return "First is bigger"
        case false: return "Second is bigger"
        default: return "Numbers are equal"
    }
}

function singleLetterCount(a,b){
    var count = 0
    for(let i = 0; i < a.length; i++){
        if(a[i].toLowerCase() === b.toLowerCase()){
            count++
        }
    }
    return count
}

function multipleLetterCount(a){
    var obj = {}
    for(let i = 0; i < a.length; i++){
        let count = 0
        for(let j = 0; j < a.length; j++){
            if(a[i] === a[j]){
                count++
            }
        }
        obj[a[i]] = count
    }
    return obj
}

function multipleLetterCount2(a){
    var obj = {}
    for(let i = 0; i < a.length; i++){
        if(a[i] in obj){
            obj[a[i]]++
        }else{
            obj[a[i]] = 1
        }
    }
    return obj
}

function arrayManipulation(array, command, location, value){
    if(command === "remove"){
        if(location === "end"){
            return array.pop()
        }else if(location === "beginning"){
            return array.shift()
        }
    }else if(command === "add"){
        if(location === "beginning"){
            arr.splice(array.length,0,value)
            return array
        }else if(location === "end"){
            arr.splice(0,0,value)
            return array
        }
    }else{
        return "Sorry Wrong Parameters"
    }
}

function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function displayCities(){
    instructorData.additionalData.moreDetails.citiesLivedIn.forEach(function(city){
        console.log(city)
    })
}

function displayHometownData(){
    for(key in instructorData.additionalData.moreDetails.hometown){
        console.log(instructorData.additionalData.moreDetails.hometown[key])
    }
}

function addDetail(key,value){
    instructorData.additionalData.moreDetails[key] = value
    return instructorData.additionalData.moreDetails
}

function removeDetail(key){
    delete instructorData.additionalData.moreDetails[key]
    return instructorData.additionalData.moreDetails
}

var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

for(let i = 0; i < nestedData.innerData.numberData.primeNumbers.length; i++){
    console.log(nestedData.innerData.numberData.primeNumbers[i])
}

for(let i = 0; i < nestedData.innerData.numberData.fibonnaci.length; i++){
    console.log(nestedData.innerData.numberData.fibonnaci[i])
}

console.log(nestedData.innerData.order[1])

nestedData.innerData.addSnack("chocolate")

var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

function addSpeaker(value){
    nestedObject.speakers.push({
        name: value
    })
}

function addLanguage(country,value){
    nestedObject.data.languages[country] = {hello: value.charAt(0).toUpperCase() + value.slice(1)}
}

function addCountry(country, capital, population){
    nestedObject.data.continents.europe.countries[country] = {capital: capital, population: population}
}

var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]]

const printEvens = () => {
    for(let i = 0; i < nestedArr.length; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
            console.log(nestedArr[i][j])
        }
    }
}

var nestedArr = [[1, 2], [3, 4], [5, 6]];

const sumTotal = () => {
    var sum = 0
    for(let i = 0; i < nestedArr.length; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
            sum += nestedArr[i][j]
        }
    }
    return sum
}

const rotate = (arr, number) => {
    for(let i = 0; i < number; i++){
        arr.unshift(arr.pop())
    }
    return arr
}

const makeXOGrid = (row, column) => {
    var arrGrid = []
    var startX = true
    for(let i = 0; i < row; i++){
        arrGrid.push([])
        for(let j = 0; j < column; j++){
            if(startX === true){
                arrGrid[i].push("X")
            }else{
                arrGrid[i].push("O")
            }
            startX = !startX
        }
    }
    return arrGrid
}

const each = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

const map = (arr, callback) => {
    var arr2 = []
    for(let i = 0; i < arr.length; i++){
        arr2.push(callback(arr[i]))
    }
    return arr2
}

const reject = (arr, callback) => {
    var arr2 = []
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i])){
            arr2.push(arr[i])
        }
    }
    return arr2
}

Closure with IIFE - not mine
--------------------------------------------------------------------

var instructorModule = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
})();

var instructorModuleRefactored = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return {
        showInstructors: displayAllInstructors,
        addInstructor: addNewInstructor
    }
})();
----------------------------------------------------------------------

const createCounter = () => {
    let count = 0
    return function(){
        return count++
    }
}

var firstCounter = createCounter()
var secondCounter = createCounter()

const countdown = (number) => {
    let timeId = setInterval(()=>{
        if(number !== 0){
            console.log(number--)
        }else{
            clearInterval(timeId)
            console.log("DONE")
        }
    },1000)
}

const randomGame = () => {
    let counter = 0
    let timeId = setInterval(() =>{
        if(Math.random() > 0.75){
            clearInterval(timeId)
            console.log(counter)
        }else{
            counter++
        }
    },1000)
}

const isEven = (number) => {
    return number % 2 === 0
}

const isOdd = (number) => {
    return number % 2 !== 0
}

const isPrime = (number) => {
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false
        }
    }
    return number > 1
}

const numberFact = (number, callback) => {
    return callback(number)
}

const find = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return arr[i]
        }
    }
}

const findIndex = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return i
        }
    }
}

function specialMultiply(a,b){
    if(arguments.length === 1){
        return function(b){
            return a*b
        }
    }
    return a*b
}

document.getElementById("container")
document.querySelector("#container")
document.querySelectorAll(".second")
document.querySelector("ol .third")
// document.querySelector("#container").innerText = "Hello!"
document.querySelector(".footer").classList.add("main")
document.querySelector(".footer").classList.remove("main")
var newLi = document.createElement("li")
newLi.innerText = "four"
document.querySelector("ul").appendChild(newLi)
var allOlLi = document.querySelectorAll("ol li")
for(let i = 0; i < allOlLi.length; i++){
    allOlLi[i].style["background-color"] = "green"
}
document.querySelector("body").removeChild(document.querySelector(".footer"))

const printFirstAndLast = (arr) => {
    let arr2 = []
    arr.forEach(function(val,i){
        arr2.push(arr[i][0] + arr[i][arr[i].length-1])
    })
    return arr2
}

const addKeyAndValue = (arr,key,value) => {
    arr.forEach(function(val,i){
        arr[i][key] = value
    })
    return arr
}

const valTimesIndex = (arr) => {
    return arr.map(function(val,i){
        return val*i
    })
}

const extractKey = (arr,key) => {
    return arr.map(function(val,i){
        return arr[i][key]
    })
}

const filterLetters = (arr,letter) => {
    var arr2 = arr.filter(function(val){
        return val.toLowerCase() === letter.toLowerCase()
    })
    return arr2.length
}

const filterKey = (arr,key) => {
    return arr.filter(function(val,i){
        return !!arr[i][key] === true
    })
}

var users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

const printEmails = (arr) => {
    arr.forEach(function(val,i){
        console.log(arr[i].email)
    })
}

const printHobbies = (arr) => {
    arr.forEach(function(val,i){
        console.log(arr[i].hobbies)
    })
}

const findHometownByState = (arr,state) => {
    return arr.find(function(user){
        return user.hometown.state === state
    })
}

$(function(){
    $("footer")
    $("#container")
    $("ul .nav-item")
    $(".list-container li:nth-of-type(3)")
    $("ul li:last-child")
})

$(document).ready(function(){
    var $newParagraph = $("<p>");
    $newParagraph.text("Another article");
    $newParagraph.css("color","red");

    var $anotherParagraph = $("<p>", {
        text:"Another approach",
        css: {
            color: "purple",
            // we have to use quotes because of the '-'
            "font-size": "2em"
        }
    });
    $("article").append($newParagraph);
    $("article").prepend($anotherParagraph);
});

$(document).ready(function(){
    $("article").on("click", function(e){
        console.log($(e.target).val()); // This works great.
        console.log(e.target.val()); // TypeError! e.target isn't a jQuery object, so doesn't have a .val method.
    });
});
