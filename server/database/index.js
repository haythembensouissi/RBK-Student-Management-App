const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/cohorts")

let cohortSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
numberofstudents:{
    type:Number,
    required:true
},
leader:{
    type:String,
    required:true
}
})
let Cohort =mongoose.model('Cohort',cohortSchema)
module.exports=Cohort