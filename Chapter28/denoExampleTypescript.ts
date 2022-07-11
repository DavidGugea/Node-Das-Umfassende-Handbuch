class Person {
    constructor(private firstname: string, private lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(): string {
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}

const lisa: Person = new Person('Lisa', 'Müller');
console.log(lisa.greet());