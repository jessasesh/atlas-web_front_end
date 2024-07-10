function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        setName: function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreBy(1);
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function() {
            return name + ": " + privateScore;
        }
    };
}

let harry = studentHogwarts();
harry.setName("Harry");

for (let x = 0; x < 4; x++) {
    harry.rewardStudent();
}

let draco = studentHogwarts();
draco.setName("Draco");

draco.rewardStudent();

for (let x = 0; x < 3; x++) {
    draco.penalizeStudent();
}

console.log(harry.getScore()); // Output: Harry: 4
console.log(draco.getScore()); // Output: Draco: -2
