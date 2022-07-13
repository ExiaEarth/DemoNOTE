// let dateDef=new Date();
// let dateDeNoel=dateDef.getFullYear();
    
// if (dateDef.getMonth()== 11 && dateDef.getdate()>25) {
//     noelYear=noelYear+1;
// }
// let noelDate=new Date(noelYear,12,25);
// let jourEnMili = 1000*60*60*25;
// let date1=Math.ceil((noelDate.getTime()-dateDef.getTime())/(jourEnMili));

// console.log(date1);

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