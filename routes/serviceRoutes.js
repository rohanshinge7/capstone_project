module.exports=(app)=>{
    const App = require("../controllers/serviceController.js");
    app.get("/allservices",App.findAll)
    app.get("/service/:type",App.findOne)
    app.post("/service/:type/form",App.insertRequest)
    app.post("/service/:type/calculate",App.calculate)
}