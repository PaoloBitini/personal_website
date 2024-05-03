export class GeneralUtils {
  static mergeObjects<T>(obj1: T, obj2: T): T {
    const res = { ...obj2 };
    for (let [k, v] of Object.entries(obj1)) {
      if (v) res[k] = v;
    }
    return res;
  }

  static adjustInterval(num: number, min: number = 0, max: number = 100) {
    return num * (max - (min + 1)) + min;
  }

  static randomInterval(min: number = 0, max: number = 100) {
    return this.adjustInterval(Math.random(), min, max);
  }

  static randomIntInterval(min: number = 0, max: number = 100) {
    return Math.round(this.randomInterval(min, max));
  }
}
