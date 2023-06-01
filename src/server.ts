// import mongoose from "mongoose"
// import app from "./app";
// import config from "./config/index";

// async function bootstrap() {
//     try {
//         await mongoose.connect(config.database_url as string);
//         console.log("Connected successfully!!!");
//         app.listen(config.port, () => {
//   console.log(`Application listening on port ${config.port}`)
// })
//     } catch (error) {
//         console.log("failed to connect BD",error);

//     }
// }
// bootstrap();
import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect database', err)
  }
}

boostrap()
