const people = ["Guadalupe", "Ollie", "Aki"]
const type = ["surprise"]

function writeCards() {
    let empty = []
    for (let i = 0; i < people.length; i++) {
        empty.push(`Thank you, ${people[i]}, for the wonderful ${type} gift!`);
    }

    return empty;
}

function countDown() {
    let n = 10
    while (n >= 0) {
        console.log(n)
        n--
    }
    return n;
}