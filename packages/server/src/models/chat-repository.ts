//Connection to mongoDB and the its functions

import { connect } from "mongoose";

const setUpMongoDb =async (url:string) => {
    await connect(url)
    .then(() => console.log('Conneced to MongoDB'))
}

export {setUpMongoDb}