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


const sum_value = sum(1,2);
console.log(sum_value)

console.log(is_adult(19))
console.log(is_adult(17))


greet("Suar")