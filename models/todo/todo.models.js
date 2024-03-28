import mongooose from 'mongoose'
import { SubTodo } from './sub_todo.models'

const todoSchema=new mongoose.Schema(
  {
    content:{
      type:String,
      required:true,
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'User',
    },
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubTodo',
      }
    ]// Arrays of Sub-Todos 

  },{timestamps:true})

  export const Todo=mongooose.model("Todo",todoSchema)