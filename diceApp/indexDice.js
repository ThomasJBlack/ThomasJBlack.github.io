var INPUT = [2, 12, 3, 3, 11, 11, 4, 4, 4, 10, 10, 10, 5, 5, 5, 5, 9, 9, 9, 9, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7];
var roll_pool = [];

function poolRole() {

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