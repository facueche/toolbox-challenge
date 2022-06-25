const express = require("express");
const cors = require('cors');
const http = require("http");
const filesRoutes = require("./routes/files");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use("/", filesRoutes);

var server = http.createServer(app);

module.exports = server.listen(port, () => console.log(`Server running on port ${port}`));