const jwt = require("jsonwebtoken");

exports.jwtVerifyToken = (req, res, next) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, "seckey");
    next();
};
