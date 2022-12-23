const jwt = require("jsonwebtoken");
const genTokenFunc = async (payload, secretPass, duration) => {
  const token = await jwt.sign({ payload }, secretPass, {
    expiresIn: duration,
  });

  return token;
};
module.exports = {
  genToken: genTokenFunc,
  verifyToken: async (req, res, next) => {
    const token = req.headers["x-auth-token"];
    try {
      const { payload } = await jwt.verify(token, process.env.TOKEN);
      req.id = payload;
      next();
    } catch (error) {
      return res.status(400).json({
        error: error,
      });
    }
  },

  renewToken: async (req, res, next) => {
    const refreshToken = req.headers.refreshToken || null;

    if (!refreshToken) {
      return res.status(400).json({
        error: "Refresh token not found!",
      });
    }

    try {
      jwt.verify(
        refreshToken,
        process.env.REF_TOKEN,
        async (error, decoded) => {
          if (decoded) {
            const token = await genTokenFunc(
              decoded.payload,
              process.env.TOKEN,
              "20s"
            );
            res.cookie("token", token, { maxAge: 1800000, httpOnly: true });
            return res.status(200).json({
              msg: "token was create successfully",
            });
          }

          if (error) {
            return res.status(400).json({
              error: error,
            });
          }
        }
      );
    } catch (error) {
      return res.status(400).json({
        error: error,
      });
    }
  },
  isAuth: async (req, res, next) => {
    // console.log("chegou");
    console.log(req.cookies.token);
    // console.log(req.cookies.refreshToken);
    // next();
    const token = req.cookies.token || null;
    if (!token) {
      return res.status(401).json({
        msg: "Token not found",
        isAuth: false,
      });
    }
    try {
      const id = await jwt.verify(token, process.env.TOKEN);
      if (id) {
        req.id = id.payload;
        return next();
      }
      return res.status(401).json({
        msg: "An error ocoured",
        id: id,
        isAuth: false,
      });
    } catch (error) {
      return res.status(401).json({
        msg: "acces un-authorized",
        error: error,
        isAuth: false,
      });
    }
  },
};
