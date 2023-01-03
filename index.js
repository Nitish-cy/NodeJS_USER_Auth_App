const app=require("./app")
const {PORT}=process.env
//env is used for hide somethoing like port etc.
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})