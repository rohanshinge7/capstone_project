module.exports=(app)=>{
    const App = require("../controllers/memberController.js");
    app.post("/member",App.insertMember)
    app.put("/updatepassword",App.updatepassword)
    app.delete("/cancelmember",App.cancelmember)
}