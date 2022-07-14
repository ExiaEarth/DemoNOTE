// // noël
// let dateDef = new Date();
// let dateNoelDef = dateDef.getFullYear();

// if (dateDef.getMonth() == 11 && dateDef.getDate() > 25) {
//   dateNoelDef = dateNoelDef + 1;
// }

// let noel = new Date(dateNoelDef, 11, 25);
// let jourEnSec = 1000 * 60 * 60 * 24;

// let joursRest = Math.ceil(
//   (noel.getTime() - dateDef.getTime()) /
//    (jourEnSec)
// );

// console.log(`Il reste ${joursRest} jours restant avant Noël.`);


// annif

let dateDef2 = new Date();
let dateAnne = dateDef2.getFullYear();
let dateAnniv = new Date("17 February"+dateAnne);
let dateRestant0 = dateAnniv.getTime() - dateDef2.getTime();
let dateRestant1 = Math.floor(dateRestant0 / (1000 * 60 * 60 * 24));
let dateRestant2 = Math.floor(dateRestant0 / (1000 * 60 * 60 * 24)*-1);

dateRestant1>0 ? console.log(`Mon anniversaire est le 17 fervier ${dateAnne} et il reste plus que ${dateRestant1} jours avant mon anniversaire `): 
console.log(`Mon anniversaire étais le 17 fervier ${dateAnne} c'étais il y a  ${dateRestant2} jours `);

// Congée 21-22/07/22
let dateDef3 = new Date();
console.log(dateDef3);

let dateAnne1 = dateDef3.getFullYear();

let dateCong1= new Date("21 July" + dateAnne1);
let dateCong2= new Date("22 July" + dateAnne1);
// console.log(dateCong1);
// console.log(dateCong2);
let dateRestant3 = dateCong1.getTime() - dateDef3.getTime();
let dateRestant4 = Math.floor(dateRestant3 / (1000 * 60 * 60 * 24));
let dateRestant5 = Math.floor(dateRestant3 / (1000 * 60 * 60 * 24)+1);
console.log(` Les prochaine vacances/Congée sont le 21 juillet et 22 juillet ${dateAnne}, il reste encore ${dateRestant4} jours pour ${dateCong1} et ${dateRestant5} jours pour ${dateCong2}. `);











