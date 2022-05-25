const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(cookieParser());


mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('mongoDB connected'))
  .catch((err) => console.log(err))

if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }
  



  

  const port = process.env.PORT || 5100
  
  app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
  });