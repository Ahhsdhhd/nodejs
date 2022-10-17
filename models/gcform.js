//ADD COURSE SCHEMA

const mongoose = require('mongoose');



const Schema = mongoose.Schema;


var GcForm = mongoose.model('GcForm',{
  gcNumber:{
   type:String
  },
    gcType:{
        type:String
    },
    name:{
       type:String
    },
      battalion:{
        type:String
     },
       company:{
        type:String
     },
       dateOfJoining:{
        type:String
     },
       course:{
        type:String
     },
       bankAccount:{
        type:String
     },
       country:{
        type:String
     },
       status:{
        type:String
     },
       remark:{
        type:String
     }
})


module.exports = {GcForm};
