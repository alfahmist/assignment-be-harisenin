const express = require('express')
const port = 3000

const authRouter = require("./routes/auth.router");
const kelasRouter = require("./routes/kelas.router");
const mataPelajaranRouter = require("./routes/mataPelajaran.router");


const app = express()


app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/kelas", kelasRouter);
app.use("/api/mata-pelajaran", mataPelajaranRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
  })