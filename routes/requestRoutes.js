module.exports=(app)=>{
    const App = require("../controllers/requestController.js");
    app.put("/updaterequest",App.update)
    app.delete("/deleterequest",App.delete)
}