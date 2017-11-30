const todolist = require("./../Components/todo/api")

class ApiV1
{
    initialize(app){
        app.use("/api/todolist", todolist);
        app.get("/", (req, res)=>{
            return res.send('It works');
    })
    }
}
module.exports = new ApiV1();
