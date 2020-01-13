import {addLeadingZero} from "./utils.js";
import Random from "./random.js";

export default class DateTimeUtils {
  constructor() {
    throw new Error(`Don't create instance of DateTimeUtils, use static methods`);
  }

  static getTimeFormat(dateUnix) {
    const date = new Date(dateUnix);

    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());

    return `${hours}:${minutes}`;
  }

  static getDateFormat(dateUnix) {
    const date = new Date(dateUnix);

    const year = date.getFullYear();
    const month = addLeadingZero(date.getMonth() + 1);
    const day = addLeadingZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  static getRandomDate() {
    return Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * Random.getRandomInteger(0, 60) * 60 * 1000;
  }
}
