let age: number = 25
let score: number = 0
let scoreAny = "0"
let userName: string = ""
let isAdmin: boolean = false

function service(n: number, s: number | null, sAny: any, u: string, b: boolean) {

    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
    if (n > 18) {
        console.log("You are eligible for voting.");
    } else {
        console.log("You are not eligible for voting yet.");
    }
    if (s !== null && s !== 0) {
        console.log("Score is available.");
    } else {
        console.log("Score is not available or is 0.");
    }
    if (sAny) {
        console.log("ScoreAny is evaluated as truthy.");
    } else {
        console.log("ScoreAny is evaluated as falsy.");
    }
    if (u) {
        console.log('Username is available.');
    } else {
        console.log('Username is not available.');
    }
    if (!u) {
        console.log('Username is evaluated as falsy.');
    } else {
        console.log('Username is not evaluated as falsy.');
    }
    if (b) {
        console.log('isAdmin is evaluated as truthy.');
    } else {
        console.log('isAdmin is not evaluated as truthy.');
    }
    if (b === false) {
        console.log('isAdmin is false.');
    }
}

service(age, score, scoreAny, userName, isAdmin)


function christmasTree(n: number) {

    for (let i = 1; i <= n; i++) {
        let spaceTree = " ".repeat(n - i);
        let asterisk = "*".repeat(2 * i - 1);
        console.log(spaceTree + asterisk)
    }
    const spaces = " ".repeat(n - 1);
    console.log(spaces + "*");
    console.log(spaces + "*");
    console.log(spaces + "*");
    console.log(spaces + "*");
    console.log(spaces + "*");
}

christmasTree(5);
