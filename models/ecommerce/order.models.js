import mongoose from 'mongoose'

const orderItemSchema=new mongooose.schema({
  productId:{
    type:mongoose.Schema.types.ObjectId,
    ref:'Product',
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema=new mongoose.Schema({

orderPrice:{
  type:Number,
  required:true,
},
customer:{
  type:mongoose.Schema.types.ObjectId,
  ref='User',
},
orderItems:{
  type:[orderItemSchema]
},
address:{
  type:String,
  required:true,
},
status:{
  type:String,
  enum:["Pending", "Cancelled","Delivered"],
  default:"Pending",
}

},{timestamps:true})

export const Order=mongooose.model('Order',orderSchema)