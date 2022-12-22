const homeController = require('../routes/auth');

const User = require('../models/details');


 module.exports.Register = async function(req,res){
        try {
            const new_user =  new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                Faculty:req.body.Faculty
            })
            const user = await new_user.save();
            console.log(user);
            return res.status(200).json({
                message:"Registered Succesfully",
                user
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
  

module.exports.login = async function(req,res){
    try {
        const user = await User.findOne({
            name:req.body.name
        })
        if(!user){
            return res.status(500).json('user is not found')
        }
        if(user.password != req.body.password){
            return res.status(500).json('wrong password')
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

module.exports.update = async function(req,res){
    try {
        const user = await User.findOne({
            name:req.body.name
        })
        if(!user){
            return res.status(500).json('user is not found')
        }
        if(user.password != req.body.password){
            return res.status(500).json('wrong password')
        }
        const newpassword = req.body.new
        password;
       const newuser = await User.findByIdAndUpdate(user._id,{
          password:newpassword
       })
       return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

module.exports.delete = async function(req,res){
    try {
        const user = await User.findOne({
            name:req.body.name
        })
        if(!user){
            return res.status(500).json('user is not found')
        }
        if(user.password != req.body.password){
            return res.status(500).json('wrong password')
        }
       const del = await User.findByIdAndDelete(user._id,{
          id:user._id
       })
       return res.status(200).json("Delete Successfully")
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
