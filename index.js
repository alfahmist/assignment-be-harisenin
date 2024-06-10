const express = require('express')
const port = 3000

const db = require('./db')


const authRouter = require("./routes/auth.router");


const app = express()


app.use(express.json());


app.use("/api/auth", authRouter);

app.get('/', async (req,res)=> {
    const to = await db("Users").select("*").then(x=>x);
    res.json({status:200, message : to})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
  })