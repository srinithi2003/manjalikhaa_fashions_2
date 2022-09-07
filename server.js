const express=require('express')
const cors=require('cors')

const app=express()

const {connectDB}=require('./connection')
const {users}=require('./usermodel')

app.use(express.json())
app.use(cors())

app.post('/insert',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await users.create(body);
    res.json(data);
})

app.get('/get',async(req,res)=>{
    const data=await users.find();
    console.log(data);   
    res.json(data);
})
app.get('/get/:Name',async(req,res)=>{
  
    const name= req.params.Name;
    const data=await users.find({id:name});
    console.log(data);
   // console.log(data);
    res.json(data)
    })

app.put('/update',async(req,res)=>{
    const name=req.body.id;
    const n_q=req.body.quantity;   
   
      
    const data=await users.updateMany({id:name},{$set:{quantity:n_q}})
    // console.log(d);
    // console.log(data.quantity);
    res.json(data);
})

app.delete('/delete',async(req,res)=>{
    const name=req.body.Name;
    const data=await users.deleteMany({Name:name})
    console.log(data);
    res.json(data);
})

app.listen(4000,()=>{
    console.log("server is started at port number 4000");
connectDB()
.then((e)=>{
console.log("mongodb connected")
})
.catch((e)=>{
    console.log("mongodb error occured!!!");
})

})
