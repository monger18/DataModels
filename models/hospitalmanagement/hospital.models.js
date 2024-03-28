import mongoose from 'mongoose'
const hospitalSchema=new mongoose.Schema({},{timestamps:true})

export const Hospitals=mongoose.model('Hospitals',hospitalSchema)