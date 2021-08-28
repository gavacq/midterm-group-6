// -------------- DEPENDENCIES & SETUP ------------------ //
const { adminId } = require("./constants");

// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);

app.use(express.static("public"));

// ---------------- SET UP COOKIES ----------------------- //

// All cookies (id, email, password) are stored in 'session'
app.use(
  cookieSession({
    name: "session",
    keys: ["ksdjygfti7436r5ov8q47tv", "ksufby3iyfvbpq398y"],
  })
);

// ------------------------- SET UP ROUTING & HELPERS ---------------------------------- //

// import object containing all queries relating to /products
// const productsQueriesFunction = require("...")
// const productsQueries = productsQueriesFunction(db)
const productsQueries = require("./db/queries/productsQueries")(db);

// products is a function imported from products.js
const products = require("./routes/products");

// productsRouter is a router object for /products
const productsRouter = products(productsQueries);

const chatsQueries = require("./db/queries/chatsQueries")(db);
// chats is a function imported from chats.js
const chats = require("./routes/chats");
const chatsRouter = chats(chatsQueries);

// use chats.js file to handle endpoints starting with /chats
// use products.js file to handle endpoints starting with /products
app.use("/products", productsRouter);
app.use("/chats", chatsRouter);

//login page
app.get("/login", (req, res) => {
  // if (userID) {
  //   return res.redirect("/");
  // }
  // const templateVars = {
  //   user: userDatabase[req.session.user_id],
  // };

  res.render("login");
});

// GET LOGIN PATH
app.get("/login/:userId", (req, res) => {
  // create session cookies
  req.session.userId = req.params.userId;

  // redirect to /
  res.redirect("/");
});

// GET HOME PAGE (root path)

app.get("/", (req, res) => {
  // render EJS template for home page
  res.render("index");
});

// GET error 404 page
// Shown when the user requests a URL that does not exist

app.get("/404", (req, res) => {
  res.send("ERROR 404: The page you are looking for cannot be found.");
  // STRETCH: render a 404 page
});

// //registeration page
// app.get("/register", (req, res) => {
//   const userID = req.session.user_id;
//   if (userID) {
//     return res.redirect("/");
//   }
//   const templateVars = {
//     user: userDatabase[req.session.user_id],
//   };

//   res.render("urls_register", templateVars);
// });

//login handler
app.post("/login", (req, res) => {
  // const user = getUserByEmail(req.body.email, userDatabase);
  req.session.userId = req.body.id;
  // if (Number(req.body.id) === adminId) {
    res.redirect('/')
  // }
  // return res.send("Email does not exist.");
  // if (!bcrypt.compareSync(req.body.password, user.password)) {
  //   return res
  //     .status(400)
  //     .send("Wrong password.Please <a href='/login'>try again</a>");
  // }

  // req.session.user_id = user.id;
  // return res.redirect("/urls");
});

//logout handler
app.post("/logout", (req, res) => {
  req.session = undefined;
  res.redirect("/urls");
});

// -------------------- Listen on specified port --------------------- //

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
