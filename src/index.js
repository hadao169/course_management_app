import express from "express";
import morgan from "morgan";
import methodOverride from "method-override";
import { engine } from "express-handlebars"; // Thay đổi import
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";

// Connect to DB
import db from "./config/db/index.js";
db.connect();

const app = express();
const port = 3000;

// Resolve __dirname equivalent in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// HTTP logger
// app.use(morgan('combined'));

// Template engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
console.log(route);
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
