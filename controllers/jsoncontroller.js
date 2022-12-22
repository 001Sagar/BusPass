const jwt = require('jsonwebtoken');
const User = require('../models/details');

const Homecontroller = require('../routes/auth');

module.exports.createsession = async function(req,res){
    try {
      const user = await User.findOne({
        name:req.body.name,
        password:req.body.password
      })  
      if(!user){
        return res.status(422).json('User is not found')
      }
      if(user.password != req.body.password){
        return res.status(422).json('Wrong Password');
      }
    return res.status(200).json({
        message:"Sign in successfuly",
        token:jwt.sign(user.toJSON,'BusPass',{expiresIn:10000})
    })
    } catch (error) {
        console.log(error);
       return res.status(500).json(error)  
    }
}