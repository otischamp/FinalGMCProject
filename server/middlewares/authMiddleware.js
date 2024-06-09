import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    let token = req.cookies?.token;

    if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const resp = await User.findById(decodedToken.userId).select("isAdmin email");

        req.user = {
            email: resp.email,
            isAdmin: resp.isAdmin,
            userId: decodedToken.userID,
        };
        next();
    } else {
      return res.status(401).json({status: false, message: "Not authorized. Try loging in again"})
    }
  } catch (error) {
    console.log(error);
    return res
            .status(401)
            .json({status: false, message : "Not Authorized. Try logging in again."})
  }
};

const isAdminRoute = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        return res
                .status(401)
                .json({status: false, message: "You do not have admin authorisation, try logging in as an admin",})
        
    }
};

export {isAdminRoute, protectRoute }
