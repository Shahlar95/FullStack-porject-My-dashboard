import mongoose  from "mongoose";

const ProductStatSchema = new mongoose.Schema(
{
    productId:String,
    yearlySalesTotal:Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
    {   month:String,
        totalSale:Number,
        totalUnits:Number,
    },
    ],
    dailyData: [
        {
        data:String,
        totalSale: Number,
        totalUnits:Number,
    }
],
},
{timestamps: true}
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;