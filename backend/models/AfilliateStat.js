import mongoose  from "mongoose";

const AffilliateStatSchema = new mongoose.Schema(
{
  userId:{type:mongoose.Types.ObjectId,ref:"User"},
  affilliateSales:{
    type:[mongoose.Types.ObjectId],
    ref:"Transaction"
  }
},
{timestamps: true}
);

const AffilliateStat = mongoose.model("AffilliateStat", AffilliateStatSchema);

export default AffilliateStat;