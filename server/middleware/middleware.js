import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';
import { getUserIdFromRequest } from '../helper/helper.js';
import 'dotenv/config'

const authenticateToken = (req, res, next) => {
   const bearerToken = req.headers['authorization'] || req.headers['Authorization'];
   console.log("Authorization Header:", bearerToken);

   if (!bearerToken) return res.status(401).json({ message: "Unauthorized user" });

   // Trim leading/trailing whitespace and remove the "Bearer " prefix (case-insensitive)
   const token = bearerToken.trim().replace(/^Bearer\s+/i, '');

   console.log("Token in middleware:", token);
   if(!token) return res.status(401).json({ message: "Unauthorized user" });

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        return true;
    } catch (error) {
        console.error('JWT verification error:', error);
        res.status(401).json({ message: "Invalid Token" });
    }
}



const authorizeRole = async(allowedRoles, req) =>{
    try{

        const userId = getUserIdFromRequest(req);
        const user = await User.findById(userId);
        const userRole = user.role;
        console.log("User Role:", userRole);
        if(!allowedRoles.includes(userRole)){
            return res.status(403).json({ message: "Forbidden: You don't have enough permission to access this resource" });
        }
        return true;
    } catch(error){
        console.error("Error in authorizeRole middleware:", error);
        return false;
    }
}
export {
    authenticateToken,
    authorizeRole
}