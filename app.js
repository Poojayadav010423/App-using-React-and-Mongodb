const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoUrl = "mongodb+srv://poojayadav2851679:admin@cluster0.buzq5ye.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl).then(() => {
    console.log("Database Connected");
})
.catch((e) => {
        console.log(e);
});

require('./UserDetails')
const User=mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "Started" })
});

app.post("/register",async (req,res) => {
    const {name, email, password} = req.body;
    const oldUser = await User.findOne({email:email})

    if (oldUser){
        return res.send({data:"User already exists!"});
    }

    try {
        await User.create({
            name: name,
            email: email,
            password,
        }),
        res.send({status: "ok", data: "User Created"});
    }catch(error){
        res.send({status:"error",data:error});
    }
});


app.listen(5001, () => {
    console.log("Node JS server started.");
});
