const { json } = require('body-parser');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { ExpenditureForm } = require('../models/expenditureForm');


//=>localhost:3000/ExpenditureForm

router.get('/',(req,res)=>{

    ExpenditureForm.find((err,doc)=>{
        if(!err){res.send(doc); }
        else { console.log('error in retriving ExpenditureForm api' + JSON.stringfy(err, undefined, 2));}

    });

//id
router.get('/:id',(req,res)=>{

if(!ObjectId.isValid(req.params.id))
return res.status(400).send('No reccord found of this id : ${req.param.id} ');

ExpenditureForm.findById(req.params.id,(err, doc)=>{

    if(!err){res.send(doc); }
    else { console.log('error in retriving ExpenditureForm ' + JSON.stringfy(err, undefined, 2));}


});

});

});
router.post('/',(req,res)=>{

 var addExpenditureForm = new ExpenditureForm({

    recordNumber:req.body.recordNumber,
    gcNumber: req.body.gcNumber,
    name :req.body.name,
    battlion: req.body.battalion,
    company: req.body.company,
    date: req.body.date,
    billNoDetails: req.body.billNoDetails,
   
    amount: req.body.amount,
   


 });
 addExpenditureForm.save((err,docs)=>{
    if(!err){res.send(docs); }
    else { console.log('error in saving ExpenditureForm ' + JSON.stringify(err, undefined, 2));}

 });

   
});

//update


router.put('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No reccord found of this id : ${req.param.id} ');


    var addExpenditureForm = ({
        recordNumber:req.body.recordNumber,
        gcNumber: req.body.gcNumber,
        name :req.body.name,
        battlion: req.body.battalion,
        company: req.body.company,
        date: req.body.date,
        billNoDetails: req.body.billNoDetails,
       
        amount: req.body.amount,
       
    
    
    
    
     });
     
     addExpenditureForm.findByIdAndUpdate(req.params.id,{$set: addExpenditureForm},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else { console.log('error in updating ExpenditureForm ' + JSON.stringify(err, undefined, 2));}
    
     });
   
    });
    router.delete('/:id',(req, res)=>{


        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No reccord found of this id : ${req.param.id} ');

        addExpenditureForm.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(!err){res.send(doc);}
            else { console.log('error in updating ExpenditureForm ' + JSON.stringify(err, undefined, 2));}

    });
});
   
  

module.exports = router;

