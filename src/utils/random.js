export default class Random {
  static getRandomInteger(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  static shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);

      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;

      // так можно ?
      // [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  static getRandomChoice(array, length) {
    return (length) ? Random.shuffle(array).slice(0, length) : array[Random.getRandomInteger(0, array.length - 1)];
  }
}


