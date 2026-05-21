import Person from "./person.js";

export default class Student extends Person {
    constructor(name, age, nim, major) {
        super(name, age);
        this.nim = nim;
        this.major = major ;
    }

    Study() {
        console.log(`${this.name} (nim: ${this.nim}) belakar di jurusan ${this.major}`);
    }
}
