// config inicial

const express = require("express");
const app = express();

// forma de ler Json q middlewares

app.use(
    express.urlencoded({
        extended:true,
    }),
)


app.use(express.json())

// rota inicial / endpoint
app.get('/', (req,res)=>{
    // mostrar req

    res.json({message:"Oi express!"})

})




// entregar uma porta
app.listen(3000)