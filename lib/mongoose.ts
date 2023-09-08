import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {

    // To prevent unknown field queries.
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) return console.log('MongoDB not connected');
    if (isConnected) return console.log('MongoDB is connected');

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}