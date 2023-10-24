/* ==============================
*    EXAMPLE 1                   *
=================================*/
// let age : number = 10;

// function increaseAge(age: number, incBy: number){
//     return age + incBy;
// }

// console.log(increaseAge(age,6))

/*===============================
*  EXAMPLE 2                     =
=================================*/
// function generateTotal(ages: Array<number>){
//     return ages.reduce((acc,item)=>{
//         return acc+item;
//     },0)
// }
// console.log(generateTotal([10,20,30]))

/* ===========================================
*  EXAMPLE 3: OBJECT PROPERTIES SUGGESTION   *
=============================================*/
// const employee = {
//     id: '768-jraf-785',
//     name: 'J.K Rowlings',
//     age: 25,
//     sex: 'F'
// }

// console.log(employee.name)

/*==============================
 *  EXAMPLE 4: TYPE ALIASING   *
===============================*/
// type Employee = {
//     id: number,
//     name: string,
//     age: number,
//     sex: string,
//     email?: string
// }

// const firstEmployee:Employee = {
//     id: 10475,
//     name: 'Suhani Sha',
//     age: 32,
//     sex: 'F',
//     email: 'suhani@gmail.com'
// }
// console.log(firstEmployee)

// type EMPID = number;
// const empId: EMPID = 123;

// type Street = number | string | Array<string>
// const address: Street = ["bk124", "fz323","simantower"];

/*=================================================
 *  EXAMPLE 5: SPECIFYING RETURN TYPE OF FUNCTION *
==================================================*/
// type Employee ={
//     name: string,
//     age: number
// }

// type PaySlip = {
//     name: string,
//     age: number,
//     salary: number
// }
// // WITH RETURN TYPE AS PAYSLIP
// function generatePaySlip(emp:Employee):PaySlip{
//     return{
//         name: emp.name,
//         age: emp.age,
//         salary: 1000000
//     }
// }
// console.log("Employee Salary: ", generatePaySlip({name: "Rahul Gupta", age: 25}))

// // WITH VOID RETURN TYPE
// function displayEmployee(emp:Employee):void{
//     console.log("Employee Name: ", emp.name);
//     console.log("Employee Age: ", emp.age)
// }
// displayEmployee({name: 'Rahul Gutpa', age: 25})

/*=================================================
 *  EXAMPLE 6: INTERFACE                          *
==================================================*/
// interface Transaction {
//     payerAccNo: number,
//     payeeAccNo: number
// }
// interface BankAccount{
//     accountNo: number,
//     accountHolderName: string,
//     isActive: boolean,
//     balance: number,
//     // transactions?: Transaction[]
//     transactions?: Array<Transaction>
// }

// // CONSUME
// const bankAccount1:BankAccount = {
//     accountNo: 10475,
//     accountHolderName: "Rahul Gupta",
//     isActive: true,
//     balance: 180000000,
//     transactions: [
//         {
//             payerAccNo: 59483,
//             payeeAccNo: 10475
//         },
//         {
//             payerAccNo: 78787,
//             payeeAccNo: 10475
//         }
//     ]
// }

// bankAccount1.balance = 230000000
// console.log(bankAccount1)

/*=================================================
 *  EXAMPLE 6: EXTENDING INTERFACE                *
==================================================*/
// interface Book{
//     name: string;
//     price: number;
// }

// interface Ebook extends Book{
//     format: string;
//     fileSize: number;
// }

// interface AudioBook extends Ebook{
//     duration: number;
// }

// const audioBook1: AudioBook = {
//     name: 'Attack of Titans',
//     price: 499,
//     format: "audio",
//     fileSize: 435,
//     duration: 2
// }
// console.log("Audio Book: ", audioBook1)

/*=================================================
 *  EXAMPLE 6: MERGING INTERFACE                *
==================================================*/
// interface Book{
//     name: string,
//     price: number
// }
// interface Book{
//     pages: number,
// }
// const newBook:Book = {
//     name: "Schindler's List",
//     price: 788,
//     pages: 350
// }
// console.log("Book Info", newBook)

//============================
//  EXAMPLE 6: UNIONS
//============================
// type ID = number | string;
// function printId(id:ID){
//     console.log(id)
// }

// // NARROWING
// function printId2(id:ID){
//     if(typeof id === "string"){
//         console.log(id.toUpperCase())
//     }
//     else{
//         console.log(id)
//     }
// }

// printId(4)
// printId("FKOL43")
// printId2(878)
// printId2("wridim7878")

//============================
//  EXAMPLE 7: UNIONS
//============================
// function getFirstThree(x:string | number[]){
//     return x.slice(0,3)
// }
// console.log(getFirstThree("yuganda"))
// console.log(getFirstThree([32,13,90,99,87]))

//===========================
// EXAMPLE 8: GENERICS
//===========================
// function logString(arg: string): string {
//   console.log(arg);
//   return arg;
// }

// function logNumber(arg: number): number {
//     console.log(arg);
//     return arg;
// }
// function logArray(arg: number[]): number[]{
//     console.log(arg)
//     return arg;
// }

// IN ORDER TO REMOVE THE REDUNDANCY

// SOLUTION 1: USE TYPE AS ANY (But we'll loose type inferr(suggestion))
// function logAnything(arg:any):any{
//     console.log(arg);
//     return arg;
// }
// logAnything("Hey! What's up")
// logAnything(10475)
// logAnything([10,20,30])

// SOLUTION 2; USE GENERICS
// function loggerGeneric<T>(arg:T): T{
//     console.log(arg);
//     return arg;
// }
// loggerGeneric("Rahul Gupta");
// loggerGeneric(330);
// loggerGeneric([45,65,67])

//=====================================
// EXAMPLE 9: ASSERTION (Important)
//=====================================
// interface HasAge{
//     age: number
// }
// function getOldestAge(people:HasAge[]): HasAge{
//     return people.sort((a,b)=> b.age - a.age)[0]
// }
// const oldest = getOldestAge([{age: 22}, {age: 55}, {age:21}, {age:43}])
// console.log("Oldest Age: ", oldest)

// interface Player{
//     name: string,
//     age: number
// }
// const players = [
//     {name: 'Shikhar', age: 35},
//     {name: 'Virat', age: 34},
//     {name: 'Dhoni', age: 43}
// ]
// const oldestPlayer = getOldestAge(players)
// console.log("Oldest Player: ", oldestPlayer)
// // ISSUE: Here we are getting suggestion for age only i.e oldestPlayer.age   , oldestPlayer.name is showing
// // To solve this we can use Assertion
// const oldestPlayer2 = getOldestAge(players) as Player
// console.log("Oldest Player Information:-");
// console.log("Name: ", oldestPlayer2.name)   // NOW TYPESCRIPT IS INFERRING (showing suggestions)
// console.log("Age: ", oldestPlayer2.age)

// * IMP: BUT ASSERTION IS NOT RECOMMENDED INSTEAD IN ORDER TO DEAL WITH SUCH SITUATIONS WE NEED TO USE GENERICS

//=======================================================
// EXAMPLE 10: SOLUTION OF ASSERTION USING GENERICS
//=======================================================
// interface HasAge{
//     age: number
// }
// // MAKING THE GETOLDESTAGE FUNCTION GENERIC
// // function getOldestAge<T>(ageList:T[]): T{
// //     return ageList.sort((a,b)=>b.age - a.age)[0]
// // }// gives warning as age is not mentioned

// // CORRECT TYPE DECLARATION
// function getOldestAge<T extends HasAge>(ageList: T[]): T{
//     return ageList.sort((a,b)=>b.age-a.age)[0]
// }// MEANING type must have a age property

// const people: HasAge[] = [{age: 12}, {age: 43}, {age: 2}]
// const oldestPerson:HasAge = getOldestAge(people)
// console.log("Oldest Person: ", oldestPerson)

// interface Player{
//     name: string,
//     age: number
// }
// const players: Player[] = [
//     {name: 'Rabada', age:43},
//     {name: "Suresh Raina", age: 39},
//     {name: "Kumar sanghakara", age: 53}
// ]
// const oldestPlayer = getOldestAge(players)
// console.log("Oldest Player Information:- ")
// console.log("Player Name: ", oldestPlayer.name)
// console.log("Player Age: ", oldestPlayer.age)

//=======================================================
// EXAMPLE 11: APPLYING GENERICS ON ARROW FUNCTION
//=======================================================
// const getLastInformation =  <T>(arr: T[]) : T=>{
//     return arr[arr.length-1];
// }
// interface IPerson{
//     name: string,
//     dob: string,
//     bloodGroup: string,
//     age: number
// }
// interface IStudent extends IPerson{
//     class: number
// }
// interface ITeacher extends IPerson{
//     salary: number,
//     experience: number
// }

// const teachers : ITeacher[] = [
//     {name:"Arvind", age: 34, dob: "3 jan 2001", bloodGroup: "A +ve", salary: 38000, experience: 3},
//     {name:"Sobha", age: 44, dob: "7 Dec 2001", bloodGroup: "AB +ve", salary: 18000, experience: 1}
// ]
// console.log(getLastInformation(teachers))

// const students: IStudent[] = [
//     {name: 'Rohan', age:17, dob:'3 jan 2005', bloodGroup: 'O +ve',class: 11 },
//     {name: 'Uday', age:17, dob:'3 jan 2005', bloodGroup: 'O +ve',class: 11 },
//     {name: 'Tejas', age:17, dob:'3 jan 2005', bloodGroup: 'O +ve',class: 11 }
// ]
// console.log(getLastInformation(students))

//=======================================================
// EXAMPLE 12: GENERICS ON PROMISES
//=======================================================
// interface IArticle {
//   title: string;
//   content: string;
//   views: number;
// }
// const fetchArticleData = async (path: string): Promise<IArticle[]> => {
//   const response = await fetch(`https://placeholder.com${path}`);
//   return response.json();
// };

// interface IUser{
//     name: string,
//     id: string,
//     articlesPublished: string;
// }
// const fetchUserData = async (path: string) : Promise<IUser[]> => {
//   const response = await fetch(`https//placeholder.com${path}`);
//   return response.json()
// };

// (async () => {
//   const articles = await fetchArticleData("/articles");
//   // console.log(articles[0].title)
//   const users = await fetchUserData('/users');
// //   console.log(users[0].articlesPublished)
// })();


// NOW, HOW TO MAKE THIS GENERIC
// const fetchData = async <T>(path: string): Promise<T[]> => {
//   const response = await fetch(`https://placeholder.com${path}`);
//   return response.json();
// };
// interface IUser {
//   name: string;
//   id: string;
//   articlesPublished: string;
// }
// interface IArticle {
//   title: string;
//   content: string;
//   views: number;
// }

// (async () => {
//   const users = await fetchData<IUser>("/users");
//   //console.log(users[0].articlesPublished)
//   const articles = await fetchData<IArticle>('/articles')
// //   console.log(articles[0].title)
// })();


//==========================================
//  EXAMPE 13: DUCK TYPING OR STRUCTURAL 
//==========================================
// interface ICredentials{
//     username: string,
//     url: string,
//     followers: number,
//     following: number,
//     password: string
// }
// function sanitizeUserCredential(userDetails: ICredentials){
//     // const sanitized = {...userDetails}
//     // delete sanitized.password;
//     // // return{
//     // //     ...userDetails,
//     // // }
//     return userDetails
// }

// // const user = {                   // THIS IS KNOWN AS DUCK TYPING WITHOUT MENTIONING THE TYPE STILL IT'S WORKING
// //     username: 'Ronit Biswakarma',
// //     url: "https://ronit.dev",
// //     followers: 677,
// //     following: 234,
// //     password: "XYZ787878"
// // }
// const user:ICredentials = {       // MENTIONING THE TYPE
//     username: 'Ronit Biswakarma',
//     url: "https://ronit.dev",
//     followers: 677,
//     following: 234,
//     password: "XYZ787878"
// }
// console.log(sanitizeUserCredential(user))



//===============================================
//  EXAMPE 14: MENTIONING TYPE IN OBJECT METHODS
//===============================================

// interface Hero {
//     name: string;
//     age: number;
//     flying(speed:number, isWearingShoot: boolean):string;
// }

// const superHero1:Hero = {
//     name:'Batman',
//     age:42,
//     flying: (speed,isWearingShoot)=>{
//         console.log("Batman is Flying")
//         return "YES"
//     }
// }

// superHero1.flying(7877,true)

