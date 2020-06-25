function bmi() {
    validateNumberInputs(process.argv);


const weightInKg = parseInt(process.argv[2])
// console.log(weightInKg)
const age = parseInt(process.argv[3])
const gender = (process.argv[4])
const heightInKg = parseInt(process.argv[5])
const dailyexercise = process.argv[6]


// console.log('Your weight is ' + weightInKg)
// console.log('Your heigth is ' + heightInKg) 

//BMI calculator 
const bmi = 48 / (1.52 * 1.52)
const roundedbmi = Math.round(bmi)

//Gender//
//Check whether a person is f or m 
const gendermodifier = gender === 'm'? 5 : -160;
const bmr = gender === 'f' ? 10 * 47 + 6.25 * (1.52 -5) * age +gendermodifier : 5
console.log('A person of this age and gender has a BMR of ' + Math.round(bmr))
//Validating user input
if(process.argv.length !== 7) {
    console.log(`You gave ${process.argv - 2} arguments to the program
    Please provide 5 arguments for
    
    weight (kg), 
    height (m), 
    age (years), 
    wether you exercise daily (yes or no)
    and your gender (m or f)
    
    Example:

    $ node index.js 82 1.79 32 yes m`)

    process.exit()
}

}