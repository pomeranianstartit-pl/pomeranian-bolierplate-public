export function getAlphabet(limit) {
  const startASCII = 65;
  //Litera pierwsza alfabetu A

  let Array = [];
  while (Array.length < limit) {
    let random_num = Math.floor(Math.random() * (90 - 65)) + startASCII;
    if (!Array.includes(random_num)) {
      Array.push(random_num);
    }

    console.log(limit, 'limit');
    console.log(Array.length, 'array');
  }

  // return Array(maxSize)
  //   .fill(0)
  //   .map((_, index) => index + startASCII)
  //   .map((characterCode) => String.fromCharCode(characterCode));
  return Array.map((characterCode) => String.fromCharCode(characterCode));
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
