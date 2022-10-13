//ADD expenditure form

const mongoose = require('mongoose');



const Schema = mongoose.Schema;


var ExpenditureForm = mongoose.model('ExpenditureForm',{



    recordNumber:{
        type:String
    },
    gcNumber:{
       type:String
    },
   
    name:{
       type:String
    },
      battlion:{
        type:String
     },
       company:{
        type:String
     },
       date:{
        type:String
     },
      
       billNoDetails:{
        type:String
     },
       amount:{
        type:String
     }
})


module.exports = {ExpenditureForm};
