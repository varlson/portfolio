const router = require("express").Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {
  genToken,
  verifyToken,
  renewToken,
  isAuth,
} = require("../middleware/Auth");

require("../Model/User");
const User = mongoose.model("Users");
router.get("/", isAuth, (req, res) => {
  return res.status(200).json({
    data: "Hello World",
    other: req.id,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, async (error, user) => {
    if (user) {
      const isAuth = await bcrypt.compare(password, user.password);
      if (isAuth) {
        const token = await genToken(user._id, process.env.TOKEN, "20s");
        const refreshToken = await genToken(
          user._id,
          process.env.REF_TOKEN,
          "30m"
        );

        res.cookie("token", token, {
          maxAge: 300000,
          httpOnly: true,
          secure: false,
          // sameSite: "None",
        });

        res.cookie("refreshToken", refreshToken, {
          maxAge: 3600000,
          httpOnly: true,
          secure: false,
        });
        return res.status(200).json({
          isAuth: isAuth,
          msg: "Logado com sucesso",
        });
      }

      return res.status(500).json({
        isAuth: isAuth,
        msg: "Senha incorreta",
      });
    }

    return res.status(500).json({
      msg: "Usuario nao encontrado",
    });
  });
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email: email }).exec();
  if (user) {
    return res.status(500).json({
      msg: "Esse usuario já tem cadastro",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = await new User({
    name,
    email,
    password: hashedPass,
  });

  await newUser
    .save()
    .then((saved) => {
      return res.status(200).json({
        msg: "User save succesfully",
        user: saved,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error: error,
        msg: "An error tryng save user",
      });
    });
});

router.get("/verify-token", verifyToken, (req, res) => {
  return res.status(200).json({
    id: req.id,
  });
});

router.get("/me", isAuth, async (req, res) => {
  const id = req.id ? req.id : null;
  if (!id) {
    return res.status(500).json({
      msg: "id nao encontrado",
      id: id ? id : null,
    });
  }
  try {
    User.findById(id, { password: 0, _id: 0 }, (error, user) => {
      if (user) {
        return res.status(200).json({
          msg: "Usuario encontrado com sucesso",
          user: user,
        });
      }
      return res.status(500).json({
        msg: "Houve um erro interno",
        error: error,
      });
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Houve um erro interno",
      error: error,
    });
  }
});

router.get("/dados", (req, res) => {
  res.send({
    token: req.cookies,
    msg: "all done here!",
  });
});

router.get("/token", renewToken, (req, res) => {});
router.get("/loged", isAuth, (req, res) => {
  if (req.id) {
    return res.status(200).json({
      isAuth: true,
    });
  }

  return res.status(401).json({
    isAuth: false,
  });
});
module.exports = router;
