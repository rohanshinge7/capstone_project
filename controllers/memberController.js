const member = require("../models/memberModels.js");

exports.insertMember=(req,res)=>{
    const messages = new member({
        mobile:req.body.mobile,
        email:req.body.email,
        occupation:req.body.occupation,
        createpassword:req.body.createpassword
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

exports.updatepassword=(req,res)=>{
    const { mobile, password } = req.body;

    member.findOneAndUpdate({ mobile }, { createpassword: password }, { new: true })
        .then((updatedMember) => {
            if (!updatedMember) {
                return res.status(404).json({ message: "Member not found" });
            }
            res.status(200).json({ message: "Password updated successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

exports.cancelmember=(req,res)=>{
    const { mobile } = req.body;

    member.findOneAndDelete({ mobile })
        .then((deletedMember) => {
            if (!deletedMember) {
                return res.status(404).json({ message: "Member not found" });
            }
            res.status(200).json({ message: "Membership canceled successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}