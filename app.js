const express = require("express");
const app = express();
const menuRouter = require("./routes/MenuRoutes");
 
app.use(express.json());
app.use("/menu/", menuRouter);

const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

(async () => {
    const mongod = new MongoMemoryServer();
    await mongod.start();
    const mongoUri = mongod.getUri();
    
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((() => console.log('Connected Successfully'))).catch((err) => { console.error(err); })
})();
 
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

module.exports = app;