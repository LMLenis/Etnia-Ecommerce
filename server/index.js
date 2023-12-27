const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const User = require("./src/models/User");
const prendas = require("./src/controllers/savedInDB");
const cloudinary = require("cloudinary").v2;
const reviewsRouter = require("./src/routes/reviewsRouter.js");
const app = express();

const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
  maxFileSize: 1073741824
}));
app.post('/upload', (req, res) => {
  // ...
});

app.use(
  jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri:
        "https://dev-8ttgsrczpuh61vza.us.auth0.com/.well-known/jwks.json",
    }),
    audience: "https://dev-8ttgsrczpuh61vza.us.auth0.com/api/v2/",
    issuer: "https://dev-8ttgsrczpuh61vza.us.auth0.com/",
    algorithms: ["RS256"],
  }).unless({ path: ["/api/public"] })
); //alguna ruta publica a la que no se le aplique el middleware
// app.post("/users", async (req, res) => {
//   try {
//     console.log("hola desde el index");
//     const auth0UserId = req.user.sub;
//     let user = await User.findOne({ where: { auth0UserId } });
//     if (!user) {
//       user = await User.create({ auth0UserId, email: req.user.email });
//     }
//     console.log(user); // Imprime el usuario después de definirlo
//     res.send(user);
//     console.log("hola desde el indexdOS");
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .send({ error: "Hubo un problema al intentar autenticar al usuario." });
//   }
// });


cloudinary.config({
  cloud_name: "dauvht6ky",
  api_key: "864773466771315",
  api_secret: "tDiz5YwUPgG1cWN15m96Qh-_0tg",
});

app.use(express.json());
const PORT = process.env.PORT || 3001;

conn
  .sync({ force: true })
  .then(() => {
    prendas();

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
