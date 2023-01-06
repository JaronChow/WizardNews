const express = require("express");
const morgan = require ("morgan")
const app = express();

app.get("/", (req, res) => res.send("hi"));
app.use(morgan('dev'));



const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT} running on http://localhost:1337`);
});
