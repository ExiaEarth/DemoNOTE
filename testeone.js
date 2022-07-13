
let dateDef = new Date();
let dateNoelDef = dateDef.getFullYear();

if (dateDef.getMonth() == 11 && dateDef.getDate() > 25) {
  dateNoelDef = dateNoelDef + 1;
}

let noel = new Date(dateNoelDef, 11, 25);
let jourEnSec = 1000 * 60 * 60 * 24;

let joursRest = Math.ceil(
  (noel.getTime() - dateDef.getTime()) /
   (jourEnSec)
);

console.log(`Il reste ${joursRest} jours restant avant Noël.`);




let dateDef2 = new Date();
let dateAnne = dateDef2.getFullYear();
let dateAnniv = new Date("17 February"+dateAnne);
let dateRestant0 = dateAnniv.getTime() - dateDef2.getTime();
let dateRestant1 = Math.floor(dateRestant0 / (1000 * 60 * 60 * 24));
let dateRestant2 = Math.floor(dateRestant0 / (1000 * 60 * 60 * 24)*-1);

dateRestant1>0 ? console.log(`Mon anniversaire est le 17 fervier ${dateAnne} et il reste plus que ${dateRestant1} jours avant mon anniversaire `): 
console.log(`Mon anniversaire étais le 17 fervier ${dateAnne} c'étais il y a  ${dateRestant2} jours `);



