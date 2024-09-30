import { MONGODB_PASS } from "./contants"
import mongoose from "mongoose"

export async function connectDatabase(){
    try {
        const stringConnect = `mongodb+srv://hopdz7225:${MONGODB_PASS}@cluster0.75crg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(stringConnect);
        console.log('database connect successfull !');
    } catch (e) {
        console.log('\x1b[31mdatabase connect successfull !');
        process.exit(1);
    }
}