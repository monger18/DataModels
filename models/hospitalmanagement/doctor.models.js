import mongoose from 'mongoose'
const doctorSchema=new mongoose.Schema({},{timestamps:true})

export const Doctors=mongoose.model('Doctors',doctorSchema)