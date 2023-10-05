const http =require('http');
const express = require('express');

const bodyParser  = require('body-parser');
const app  = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>NOt Found</h1>');
})
const server = http.createServer(app);

server.listen(3000);

