const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const router = express.Router();
const app = express();

app.listen(port, () =>{
    console.log(`Server listening at : ${port}`);
})

router.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use("/", router);