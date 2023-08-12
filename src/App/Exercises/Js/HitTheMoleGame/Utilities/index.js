export function formatTime(time) {
    const timeInSeconds = Math.floor(time / 1000);
    const timeInMinutes = Math.floor(timeInSeconds / 60)
        .toString()
        .padStart(2, '0');
    const seconds = Math.round(timeInSeconds % 60)
        .toString()
        .padStart(2, '0');
    //console.log(time, timeInSeconds, timeInMinutes, seconds);
    return `${timeInMinutes}:${seconds}`;
}

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// ---------------Js closure----------------
function getRandomGenerator(limit) {
    const recent = Array(limit).fill(-1);
    //[-1,-1,-1,-1]
    return (max) => {
        while (true) {
            const random = Math.floor(Math.random() * max);
            if (recent.every((rec) => rec !== random)) {
                recent.push(random);
                //[-1,-1,-1,-1, losowa na przyklad wartosc 8]
                recent.shift();
                // [-1,-1,-1,8]
                return random;
                // [-1,-1,8,7]
                // [-1,8,7,0]
                // [8,7,0,3]
                // [8,7,0,4]
            }
        }
    };
}

const getRandomInt = getRandomGenerator(4);

export function getNewMolePosition(currentPosition, tilesNo) {
    while (true) {
        const newPosition = getRandomInt(tilesNo - 1);
        if (currentPosition !== newPosition) {
            return newPosition;
        }
    }
}
