const router = require("express").Router();
let Vehicle = require("../models/Vehicle");




//save vehicle

router.post("/add",(req,res)=>{

    let newpost = new Vehicle(req.body);

    newpost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Post saved succesfully"
        });

    });

});

//get postMessage

router.get('/Vehicles',(req,res) =>{
    Vehicle.find().exec((err,Vehicle) =>{
        if(err){
            return res.status(500).json({
                error:err
            });

        }

        return res.status(200).json ({
            success:true,
            existingVehicles:Vehicle


        });

    });
});

//update router

router.put('/post/update/:id',(req,res) =>{
    Vehicle.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(500).json({error:err});

            }

            return res.status(200).json({
                success:"Updated Succesfull"
            });
        }
    );

});


//delect post

router.delete('/post/delect/:id',(req,res) =>{
    Vehicle.findByIdAndRemove(req.params.id).exec((err,deletepost) =>{

        if(err)return res.status(500).json({
            message:"Delected massage unsuccesfull", err
        });

        return res.json({
            message:"delect succesfull", deletepost
        });
    });
});

//get specific post

//get specific post

router.get("/post/:id",(req,res) =>{
    let postID = req.params.id;
    
    Vehicle.findById(postID,(err,post) =>{
        if(err){
            return res.status(500).json({success:false,err});

        }

        return res.status(200).json({
                success:true,
                post
            });

        
    });
});

module.exports = router;