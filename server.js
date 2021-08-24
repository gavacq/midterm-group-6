// -------------- DEPENDENCIES & SETUP ------------------ //

// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const app        = express();
//const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const morgan     = require('morgan');
const cookieSession = require('cookie-session');


//

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
//app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static("public"));

// ---------------- SET UP COOKIES ----------------------- //

// All cookies (id, email, password) are stored in 'session'
app.use(cookieSession({
  name: 'session',
  keys: ['ksdjygfti7436r5ov8q47tv','ksufby3iyfvbpq398y']
}));


// ------------------------- SET UP ROUTING & HELPERS ---------------------------------- //

// import object containing all queries relating to /products
const productsQueries = require('./db/queries/productsQueries')(db);

// products is a function imported from products.js
const products  = require('./routes/products');
// productsRouter is a router object for /products
const productsRouter = products(productsQueries);

const chats  = require('./routes/chats');


// use chats.js file to handle endpoints starting with /chats
// use products.js file to handle endpoints starting with /products
app.use('/products', productsRouter);
app.use('/chats', chats);


// GET HOME PAGE (root path)

app.get('/', (req, res) => {
  // redirect to /products
  res.redirect('/products');

  // render EJS template for home page
  res.render('index');
});


// GET error 404 page
// Shown when the user requests a URL that does not exist

app.get('/404', (req, res) => {
  res.send('ERROR 404: The page you are looking for cannot be found.');
  // STRETCH: render a 404 page
});

// -------------------- Listen on specified port --------------------- //

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
