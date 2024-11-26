const request = require("../models/requestModels.js");

exports.update=(req,res)=>{
    const { mobile, service, type, remarks } = req.body;

    request.findOneAndUpdate({ mobile, type }, { service, remarks }, { new: true })
        .then((updatedRequest) => {
            if (!updatedRequest) {
                return res.status(404).json({ message: "Request not found" });
            }
            res.status(200).json(updatedRequest);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}

exports.delete=(req,res)=>{
    const { mobile } = req.body;

    request.findOneAndDelete({ mobile })
        .then((deletedRequest) => {
            if (!deletedRequest) {
                return res.status(404).json({ message: "Request not found" });
            }
            res.status(200).json({ message: "Request deleted successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}