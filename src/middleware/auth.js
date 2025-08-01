const adminAuth = (req, res, next) => {
    const token = "xyz1";
    const isAdmin = token === "xyz"; // Simulating authentication check
    if(!isAdmin) {
        res.send("Unauthorized access");
    } else {
        next();
    }
}


const userAuth = (req,res,next)=>{
    const token = "abcd";
    const isUser = token === "abc"; // Simulating authentication check
    if(!isUser) {
        res.status(401).send("Unauthorized access");
    } else {
        next();
    }
}


module.exports = {adminAuth, userAuth};