const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


require("./routes/indexRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
