//ADD expenditure form

const mongoose = require('mongoose');



const Schema = mongoose.Schema;


var BillingForm = mongoose.model('BillingForm',{



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
     type:{
      type:String
   },
       amount:{
        type:String
     }
})


module.exports = {BillingForm};
