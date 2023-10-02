// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("Returns a string with a coded message. Some letters/characters turn into numbers", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
//GOOD FAILURE! ReferenceError: CodedMessage is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Pseudo code:
//Function Name: codedMessage
//Input: String
//Output: String
//Process: Create your fucntion, your function will take in a parameter of a string. Turn your string into an array use .split("") with quotes to seperate each letter. Iterate through the array using the for loop. Use conditional statement to determine if string includes a,e,i,o to turn them into numbers. Add a Logical OR to also check if the letter is uppercase to change it.

const codedMessage = (string) => {
    const arr = string.split("") //Makes the string into an array.
    for (let i = 0; i < arr.length; i++) { //Loops through the array
        if(arr[i].includes("a") || arr[i].includes("A")){ //If the arr includes lowercase or capital string 'A' then it will change the value of the index where the letter is found at to number four. 
            arr[i] = 4
        }else if(arr[i].includes("e") || arr[i].includes("E")){ //If the arr includes lowercase or capital string 'E' then it will change the value of the index where the letter is found at to number three. 
            arr[i] = 3
        }else if(arr[i].includes("i") || arr[i].includes("I")){ //If the arr includes lowercase or capital string 'I' then it will change the value of the index where the letter is found at to number one. 
            arr[i] = 1
        }else if(arr[i].includes("o") || arr[i].includes("O")){ //If the arr includes lowercase or capital string 'O' then it will change the value of the index where the letter is found at to zero. 
            arr[i] = 0
        }
    }
    return arr.join("") //Returns the array, but .join("") converts it back into a string. 
}
// console.log(codedMessage(secretCodeWord1))
// console.log(codedMessage(secretCodeWord2))
// console.log(codedMessage(secretCodeWord3))


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letterAE", () => {
    it("Returns an arry with all the words containting a particular letter. 'a' or 'e'", () => {
        expect(letterAE(fruitArray,filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(letterAE(fruitArray,filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
//GOOD FAILURE ReferenceError: letterAE is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Pseudo code:
//Function Name: letterAE
//Input: Array and String
//Output: New array
//Process: Create your function. The function takes in a parameter of an array and a string. Use .filter() to iterate through the array to check if the values include the given string. The filter should return a new aray of only the values that include the given strings.

const letterAE = (arr, string) => { //Funtion takes in a parameter of an array and a string
    return arr.filter((value) => value.includes(string) || value.includes(string.toUpperCase())) //Filters through the array and returns the value which includes the string in the word. The filter returns an array. The .toUpperCase will check to see if the string you're taking in is a capital in the word.
}
// console.log(letterAE(fruitArray,filterLetterA))
// console.log(letterAE(fruitArray, filterLetterE))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("Returns a boolean(true or false) after determening if the array is a full house.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})
//GOOD FAILURE ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Pseudo code:
//Function Name: fullHouse
//Input: Array
//Output: Boolean
//Process: Create your function. The function takes in an array. Use .sort() to sort the numbers in the array from smallest to largest. Create a for loop to iterate through the array. Create a conditional that will check if the array indexes equal to each other, to check if they are the same number. Return true if the array is considered a full house if not return a false. 

const fullHouse = (arr) => {
    arr.sort() //Sorts the values in the array from smallest to largest. 
    // console.log(arr) 
    for (let i= 0; i < arr.length; i++) { //Loops through the array which is now sorted. 
        if(arr[0] === arr[1] && arr[2] === arr[3,4]){ //If the value at index zero is equal to the value at index one AND the value from the second index is equal to the value of index three and four it will return true
            return true
        }else if(arr[0] === arr[1,2] && arr[3] === arr[4]){ //Returns true if the value at index 0 is equal to the value in index one and two AND if the value in index three is equal to the value in index four.
            return true
        }else{ //If it is none of the conditions from above then it will return false. 
            return false
        }
    }
}
// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))
// console.log(fullHouse(hand4))