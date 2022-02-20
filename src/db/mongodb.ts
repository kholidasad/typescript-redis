import { connect } from "mongoose";

async function connectMongo(){
    try {
        const conn_client = await connect('mongodb://localhost:27017/typescript')

        console.log('Connected to Mongo')

        return conn_client
    } catch (error) {
        throw error
    }
}

export default connectMongo