//
//       Partial - make all properties optional
//

// interface Person {
//   name: string;
//   age: number;
//   email: string;
//   dateOfBirth?: Date;
// }

// interface PartialPerson {
//   name?: string;
//   age?: number;
//   email?: string;
// }

// type PartialPerson = Partial<Person>;

// const objPerson: Person = {
//   name: 'John',
//   age: 30,
//   email: 'test@wp.pl',
// };

// const objPersonPartial: PartialPerson = {
//   name: 'John',
//   age: 30,
// };

// console.log(objPerson, 'objPerson');
// console.log(objPersonPartial, 'objPersonPartial');

// ----------------------------------------------------

//
//       Required - make all properties required (opposite to Partial)
//

// interface Person {
//   name: string | undefined;
//   age?: number | undefined;
//   email?: string | undefined;
//   dateOfBirth?: Date | undefined;
// }

// interface RequiredPerson {
//   name: string | undefined;
//   age: number | undefined;
//   email: string | undefined;
//   dateOfBirth: Date | undefined;
// }

// const objPerson: Person = {
//   name: 'John',
//   email: 'test@wp.pl',
// };

// const objPersonRequired: RequiredPerson = {
//   name: 'John',
//   email: 'test@wp.pl',
//   age: 30,
//   dateOfBirth: new Date(),
// };

// console.log(objPerson, 'objPerson');
// console.log(objPersonRequired, 'objPersonRequired');

// ----------------------------------------------------

//
//       Omit - remove properties from type
//

// interface User {
//   id: string | number;
//   name?: string;
//   age: number;
//   email: string;
// }

// type UserWithoutEmail = Omit<User, 'email' | 'name'>;

// const user: User = {
//   id: 1,
//   name: 'John',
//   age: 30,
//   email: '',
// };

// const userWithoutEmail: UserWithoutEmail = {
//   id: 1,
//   //   name: 'John',
//   age: 30,
// };

// console.log(user, 'user');
// console.log(userWithoutEmail, 'userWithoutEmail');

// ----------------------------------------------------

//
//       Pick - add properties to type based on inherited type (opposite to Omit)
//

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

type UserPicked = Pick<User, 'id' | 'email'>;

const user: User = {
  id: '1',
  name: 'John',
  age: 30,
  email: '',
};

const pickedUser: UserPicked = {
  id: '1',
  email: '',
};

console.log(user, 'user');
console.log(pickedUser, 'pickedUser');

// ----------------------------------------------------
// Primite types
// type Address = string;

// Union types
// type Transport = 'Bus' | 'Car' | 'Bike';

// Function types
// type AddFn = (a: number, b: number) => number;

// const add: AddFn = (a, b) => a + b;
// console.log(add(1, 2), 'add(1, 2)');