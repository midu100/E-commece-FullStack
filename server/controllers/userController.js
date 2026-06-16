const userSchema = require("../models/userSchema")
const responseHandler = require("../utils/responseHandler")

const getUsers = async(req,res)=>{
    try {
 
        const user = await userSchema.find()
        const activeUser = await userSchema.countDocuments({
            isVerified : true
        })


        responseHandler.success(res,user,activeUser,200)
    } 
    catch (error) {
       console.log(error)    
    }
}


module.exports = {getUsers}