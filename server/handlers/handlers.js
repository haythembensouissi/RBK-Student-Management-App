const Cohort=require("../database/index.js")
exports.add=(req,res) =>{
let cohort= new Cohort(req.body)
cohort.save().then(result=> res.send(result)).catch(err=>console.log(err))
}
exports.getAll=(req,res)=>{
    Cohort.find({}).then(result=>res.send(result)).catch(err=>console.log(err))
}
exports.deleteone=(req,res)=>{
    Cohort.findOneAndRemove({_id:req.params.id},(err,results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(results)
        }
    })
}
exports.update=(req,res)=>{
   
    Cohort.updateOne({_id:req.params.id},req.body,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
}