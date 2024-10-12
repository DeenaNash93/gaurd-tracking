const port = 4735;

const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

let sites=[];

app.post("/sites",(req,res)=>{
    let site={};
    site.id    =        req.body.id;
    site.name  =        req.body.name;
    sites.push(site);
    
    res.status(200).json("ok");
});
app.get('/sites', (req, res) => {
    res.status(200).json(sites);
});
app.put("/sites",(req,res)=>{
    let site={};
    let idx    =        req.body.id;
    site.name  =        req.body.name;
    sites[idx]=site;

    res.status(200).json("ok");
});
app.delete('/sites', (req, res) => {
    let idx=req.body.id;
    sites.splice(idx, 1);

    res.status(200).json("ok");
})

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"/public/front1.html"));
});
app.get('/checktime', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"/public/front2.html"));
});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
