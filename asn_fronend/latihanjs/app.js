import Student from "./models/Student.js";
import BankAccount from "./models/BankAccount.js";

const mhs1 = new Student("Ferdi", 20, "123456789", "Informatika");
mhs1.great();
mhs1.Study();

const rekeningMhs = new BankAccount(mhs1.name);
rekeningMhs.deposit(2000000);
rekeningMhs.withdraw(500000);

document.getElementById("app").innerHTML = `
    <h2>Data Mahasiswa</h2>
    <p><strong>Name:</strong> ${mhs1.name}</p>
    <p><strong>Age:</strong> ${mhs1.age}</p>
    <p><strong>NIM:</strong> ${mhs1.nim}</p>
    <p><strong>Major:</strong> ${mhs1.major}</p>
    <p><strong>saldo akhir:</strong>
    Rp. ${rekeningMhs.getBalance().toLocaleString('id-ID')}</p>
`;