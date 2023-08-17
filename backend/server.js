import express from "express";
const port = 2000

const app = express()

app.get("/", (req, res) => {
    console.log("Hii world!!")

})

app.listen(port, () => {
    console.log(`server started at ${port}`)
})
