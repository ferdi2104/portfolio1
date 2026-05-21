export default class BankAccount {
    #balance = 0;

    constructor(owner) {
        this.owner = owner;
    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`${this.owner} menabung ${amount}`);
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("saldo tidak cukup");
            return;
        }
        this.#balance -= amount;
        console.log(`${this.owner} menarik Rp${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}