// let user = {};
// Object.defineProperty(user, 'name', {
//     value: 'Nikola',
//     writable: false,
// });
// Object.defineProperty(user, 'age', {
//     value: 25,
//     writable: false,
// });

// Object.defineProperty(user, 'id', {
//     value: 'Nik25',
//     writable: false,
//     configurable: false,
// });
// console.log(user, 'name');
// user.name = 'Mike';
// console.log(user.name);
// console.log(user, 'age');
// delete user.id;
// console.log(user.id);




// let dataBase = {
//     dbName: 'user',
//     dbType: 'MySQL',
// }
// Object.freeze(dataBase);
// dataBase.dbName = 'admin';
// console.log(dataBase.dbName);
// console.log(dataBase);

// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// }

// Object.isFrozen(configurateDB);
// configurateDB.token = '345';
// console.log(configurateDB);
// delete configurateDB.password;
// console.log(configurateDB.password);
// configurateDB.login = 'Admin1';
// console.log(configurateDB.login);


// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000,

//   set addSalaries(worker) {
//         for (let i = 0; i < worker.length; i++) {
//             let arr = worker[i].split(':');
//             salaries[arr[0]] = +arr[1];
//         }
//         return salaries;
//     }
// }
// Object.defineProperty(salaries, 'sum', {
//     get() {
//         let sum = 0;
//         for (salary in this) {
//             sum += this[salary];
//         }
//         console.log(sum);
//     },
 
//     enumerable: false,
// })
// salaries.addSalaries = ['frontend: 3000', 'backend: 2500', 'design: 2000', 'manager: 800'];
// console.log(salaries);


let user = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
    get userInfo() {
        console.log(`name: ${this.name}, surname: ${this.surname}, age: ${this.age}`);
    },
      set userInfo (value) {
        for (let i = 0; i < user.length; i++) {
            let arr = user[i].split(':');
            user[arr[0]] = +arr[1];
        }
        return user;
    }
}
console.log(user.userInfo);
user.login = 'MK_10';
console.log(user.userInfo);







   

    

       
        
    


