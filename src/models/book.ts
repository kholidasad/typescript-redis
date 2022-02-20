import { Schema, model } from "mongoose";

interface Book {
    title: String,
    author: String
}

const bookSchema = new Schema<Book>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

export default model<Book>('Books', bookSchema)