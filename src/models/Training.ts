import { model, Schema } from 'mongoose'

export const Training = model('Training', new Schema({
    name:{
        type: String,
        required: true,       
    },
    exercises:[
        {
            name:{
                type: String,
            },
            weight:{
                type: String
            },
            repetitions:{
                type: String
            },
            series:{
                type: String,
            }
        }
    ]
}))