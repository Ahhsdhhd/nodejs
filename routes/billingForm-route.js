const { json } = require('body-parser');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { BillingForm } = require('../models/billingForm');


//=>localhost:3000/BillingForm

router.get('/',(req,res)=>{

    BillingForm.find((err,doc)=>{
        if(!err){res.send(doc); }
        else { console.log('error in retriving BillingForm api' + JSON.stringfy(err, undefined, 2));}

    });

//id
router.get('/:id',(req,res)=>{

if(!ObjectId.isValid(req.params.id))
return res.status(400).send('No reccord found of this id : ${req.param.id} ');

BillingForm.findById(req.params.id,(err, doc)=>{

    if(!err){res.send(doc); }
    else { console.log('error in retriving BillingForm ' + JSON.stringfy(err, undefined, 2));}


});

});

});
router.post('/',(req,res)=>{

 var addBillingForm = new BillingForm({

    recordNumber:req.body.recordNumber,
    gcNumber: req.body.gcNumber,
    name :req.body.name,
    battlion: req.body.battalion,
    company: req.body.company,
    date: req.body.date,
    billNoDetails: req.body.billNoDetails,
    type: req.body.type,
    amount: req.body.amount,
   
   


 });
 addBillingForm.save((err,docs)=>{
    if(!err){res.send(docs); }
    else { console.log('error in saving BillingForm ' + JSON.stringify(err, undefined, 2));}

 });

   
});

//update


router.put('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No reccord found of this id : ${req.param.id} ');


    var addBillingForm = ({
        recordNumber:req.body.recordNumber,
        gcNumber: req.body.gcNumber,
        name :req.body.name,
        battlion: req.body.battalion,
        company: req.body.company,
        date: req.body.date,
        billNoDetails: req.body.billNoDetails,
        type: req.body.type,
       
        amount: req.body.amount,
       
    
    
    
    
     });
     
     addBillingForm.findByIdAndUpdate(req.params.id,{$set: addBillingForm},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else { console.log('error in updating BillingForm ' + JSON.stringify(err, undefined, 2));}
    
     });
   
    });
    router.delete('/:id',(req, res)=>{


        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No reccord found of this id : ${req.param.id} ');

        addBillingForm.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(!err){res.send(doc);}
            else { console.log('error in updating BillingForm ' + JSON.stringify(err, undefined, 2));}

    });
});
   
  

module.exports = router;

