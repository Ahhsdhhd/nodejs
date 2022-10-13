const router = require ('express').Router();

const User = require('../models/user');

const bcrypt = require('bcrypt');

const user = require('../models/user');

const jwt = require('jsonwebtoken');

const checkAuth = require('../middleware/check-auth');



router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10 , (err, hash) => {
      if (err) {
          return res.json({ success: false, message: "Password hash Issue" })
      }
      const user = new User({
          username: req.body.username,
         
          password: hash
      });
      user.save()
          .then((result) => {
              return res.json({ success: true, message: "Account created Successfully" })
          })
          .catch((err) => {
              if (err.code === 11000) {
                  return res.json({ success: false, message: "username already exists" })
              }
              res.json({ success: false, message: "server error" })
          })
  })

})


//login

router.post('/login',(req, res)=>{

  user.find({username: req.body.username})
  .exec()
  .then((result)=>{

    if(result.length < 1){

      return res.json({success: false, message: "user not found"})
    }
    const user = result [0];
    bcrypt.compare(req.body.password, user.password, (err,ret)=>{
   if(ret){
 
    const payload = {
      userId: user._id,
      
  }
  const token = jwt.sign(payload, "webBatch")

   return res.json({success:true ,token:token , message:"login succ"})
    }    else{
     return res.json({success:false ,message:"pass do not match"})
    }

    })
   

  }).catch(err =>{
    res.json({success: false, message:"Auth failed"})
  })

})
router.get('/profile',checkAuth , (req, res) => {
  const userId = req.userData.userId;
  User.findById(userId)
       .exec()
       .then((result) => {
           if(result) {
               res.json({success : true, data: result})
           }
       }).catch(err => {
          res.json({success : false, message: 'Mongo Error'}) 
       })
})


    module.exports = router;