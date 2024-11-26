const service = require("../models/serviceModels.js");
const member = require("../models/memberModels.js");
const request = require("../models/requestModels.js");

exports.findAll=(req,res)=>{
    service.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.error(err.stack);
        res.status(500).send({
            message:
            err.message||"some error occured",
        });
    });
};

exports.findOne=(req,res)=>{
    service.findOne(req.params.type)
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                    message:"Message not found with id"+req.params.type,
                });
            }
            res.json(data);
    })
    .catch((error)=>{
        res.status(500).send({
            message:
            err.message||"some error occured",
        });
    })
};

exports.insertRequest=(req,res)=>{
    const messages = new request({
        mobile:req.body.mobile,
        email:req.body.email,
        amt:req.body.amt,
        type:req.body.type,
        msg:req.body.msg,
        code:req.body.code,
    });
    messages
    .save(messages)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message||"some error occurred while creating",
        });
    });
};

exports.calculate=(req,res)=>{
    const { amt, tenure } = req.body;
    const rate = 0.08; 
    const interest = (amt * rate * tenure) / 12;
    res.status(200).json({ emi: interest });
};