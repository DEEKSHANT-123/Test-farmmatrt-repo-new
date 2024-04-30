const jwt = require("jsonwebtoken");
const user = require("./models/admin");

const adminauthmiddleware = async(req, res, next)=>{

    const adtoken = req.header("Authorization");

    if(!adtoken){

        return res
        .status(401)
        .json({message :" Unauthorized HTTP , Token not provided"});
    }
    const jwtToken = adtoken.replace("Bearer","").trim();
    console.log("token from auth middleware", jwtToken);

    try {

        const isVerified = jwt.verify( jwtToken, process.env.JWT_SECRET_KEY);
        const adminData =  await user.findOne({ email : isVerified.email}).
        select({
            password : 0,
        });
        console.log(adminData);
        req.user = adminData;
        req.token=adtoken;
        req.userId= adminData._id;

       

        next();
    } catch (error) {
        return res.status(401).json({ message:"Unauthorized  , Token Invalid"});
        
    }

  
};


module.exports= adminauthmiddleware;