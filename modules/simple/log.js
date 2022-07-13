// function calDate() {
//     return new Date();
// }

let infoDate={

    noel : function(noelDate){
        console.log(`Il vous restes ${noelDate} avant noël.`)
    },
    happy :function (happyDate ) {
        console.log(`Mon annivérsaire est dans ${happyDate} ,n'oublie pas mes cadeaux`)
    },
    vacances : function(vacadate){
        console.log(`Les prochaines vacances/congées sont dans ${vacadate},n'oublie pas la créme solaire ou tu deviendra une écrevis =). `)
    }
}

module.exports=infoDate;