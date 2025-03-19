import jwt from "jsonwebtoken";


export const authToken = (request) => {
    try {
        const token = request.cookies.get("token");
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        return decodedToken.id;
    } catch (error) {
        throw new Error( error.message ) 
    }
}