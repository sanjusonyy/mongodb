const express = require('express');
const dbConnect = require('./mongo1');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    resp.send(data)
});
app.post('/', async (req, resp) => {
    // console.log(req.body)
    let data = await dbConnect();
    let result = await data.insert(req.body);
    resp.send(result);
})
app.put('/', async (req, resp)=>{
// console.log(req.body);
let data= await dbConnect();
let result = await data.updateOne(
    {name:req.body.name},
    {$set:req.body}
)
    resp.send({result:"updated"})

})


app.listen(5000);