import { Person } from "./person"; // note no .js is required...

export function promote() {}

export default class Teacher extends Person {
  // default means the main thing  being exported
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("do some teaching");
  }
}
