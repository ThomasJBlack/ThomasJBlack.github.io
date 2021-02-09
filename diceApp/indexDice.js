// updated probability array input
function buildInput() {
    dice_sides = parseInt(prompt())

    array = []
    num = num2 = dice_sides
    while (num > 0) {
        for (let i = 0; i < num; i++) {
            array.push(num + 1)
        }
        for (let n = 0; n < num; n++) {
            if (num != num2) {
                array.push(num2 + 1)
            }
        }
        num2 += 1
        num -= 1
    }
    return array;
}

// var INPUT = [2, 12, 3, 3, 11, 11, 4, 4, 4, 10, 10, 10, 5, 5, 5, 5, 9, 9, 9, 9, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7];
// end of update

var INPUT = buildInput();

function poolRole() {
    var roll_pool = INPUT;
    if (roll_pool.length == 0) {
        roll_pool = INPUT.slice();
    }
    var nVal = Math.floor(Math.random() * roll_pool.length);
    random_value = roll_pool.splice(nVal, 1);
    document.getElementById("poolVal").innerHTML = random_value;

}

function normalRole() {
    random_value = INPUT[Math.floor(Math.random() * INPUT.length)];
    document.getElementById("randomVal").innerHTML = random_value;
}
