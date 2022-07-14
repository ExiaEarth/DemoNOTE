// function calDate() {
//     return new Date();
// }

let infoDate={

    noel : function(){
    let dateDef = new Date();
    let dateNoelDef = dateDef.getFullYear();

    if (dateDef.getMonth() == 11 && dateDef.getDate() > 25) {
        dateNoelDef = dateNoelDef + 1;
    }

    let noel = new Date(dateNoelDef, 11, 25);
    let jourEnSec = 1000 * 60 * 60 * 24;

    let joursRest = Math.ceil((noel.getTime() - dateDef.getTime()) /(jourEnSec));
    console.log(`Il reste ${joursRest} jours restant avant Noël.`);
    },
    happy : function() {
        let dateDef2 = new Date();
        let dateAnne = dateDef2.getFullYear();
        
        let dateAnniv = new Date("17 February"+dateAnne);
        
        let dateRestant0 = dateAnniv.getTime() - dateDef2.getTime();
        let dateRestant1 = Math.floor(dateRestant0 / (1000 * 60 * 60 * 24));
        let dateRestant2 = Math.floor(dateRestant0 / (1000 * 60 * 60 * 24)*-1);
        
        dateRestant1>0 ? console.log(`Mon anniversaire est le 17 fervier ${dateAnne}
        il reste ${dateRestant1} jours avant mon anniversaire `): 
        console.log(`Mon anniversaire étais le 17 fervier ${dateAnne} c'étais il y a  ${dateRestant2} jours `);
        
    },
    vacances : function(){
        let dateDef3 = new Date();
        let dateAnne1 = dateDef3.getFullYear();

        let dateCong1= new Date("21 July" + dateAnne1);
        let dateCong2= new Date("22 July" + dateAnne1);

        let dateRestant3 = dateCong1.getTime() - dateDef3.getTime();
        let dateRestant4 = Math.floor(dateRestant3 / (1000 * 60 * 60 * 24));
        let dateRestant5 = Math.floor(dateRestant3 / (1000 * 60 * 60 * 24)+1);

        console.log(` Les prochaine vacances/Congée sont le 21 juillet et 22 juillet ${dateAnne1}
         il reste : 
         ${dateRestant4} jours pour ${dateCong1} 
         ${dateRestant5} jours pour ${dateCong2}. `);
    },
    soltice : function(){
        let dateDef4=new Date();
        let anne_user= dateDef4.getFullYear();

        let dateSoltice1= new Date("21 march"+anne_user);
        let dateSoltice2= new Date("21 december"+anne_user);

        let dateRestant6 = dateSoltice1.getTime() - dateDef4.getTime();
        let dateRestant7 = dateSoltice2.getTime() - dateDef4.getTime();

        let dateRestant8 = Math.floor(dateRestant6 / (1000 * 60 * 60 * 24)*-1);
        let dateRestant9 = Math.floor(dateRestant7 / (1000 * 60 * 60 * 24));


        console.log(`Le soltice du 21 mars ${anne_user} étais il y a ${dateRestant8} jours.
        Le soltice du 21 décembre ${anne_user} seras dans ${dateRestant9} jours.`);
    }
}

module.exports=infoDate;