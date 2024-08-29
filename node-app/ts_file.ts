//to compile ts files: tsc -b

function greet (name: string) {
    console.log("Hello "+name)
}

function sum(num1: number, num2: number): number {
    return num1+num2; // type inference as well for return types
}

// type inference
function is_adult(age: number) {
    if (age>=18) {
        return true
    }else {
        return false
    }
}

// functions as args


function runafter1s(fn: () => void) {
    setTimeout(fn, 1000);
}

runafter1s(() => {
    console.log("hey suar!")
})

interface User {
    name: string,
    age: number,
};

 
// types and interfaces/
// types lets us do few more things -> union and intersections

// lets say id can be string or a number

type id = string | number;

function printId(user_id: id) {
    return user_id;
}

console.log(printId(123))

// next thing is intersection

type employee = {
    name: string | boolean,
    eid: string
}

type manager = {
    mid: string
}

type team_lead = employee & manager;

const team_lead_kirat: team_lead = {
    name: "kirat",
    eid: "123",
    mid: "suar"
}

interface stud {
    name: string[],
}



interface stud {
    ids: number, 
}


type max_val_arr= number[];


function max_val(arr: max_val_arr){
    return 5;
}

const sum_value = sum(1,2);
console.log(sum_value)

console.log(is_adult(19))
console.log(is_adult(17))


greet("Suar")


