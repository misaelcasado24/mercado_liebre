const express = require("express")
const app = express()
const port = 3030
const path = require("path")

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});




app.listen(port, () => console.log(`http://localhost${port}`))