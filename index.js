import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
//IMG
import FileUpload from "express-fileupload";
import FeedRoute from "./routes/FeedRoute.js";
import PaymentRoute from "./routes/PaymentRoute.js";

//IMG

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
//IMG
app.use(FileUpload());
app.use(express.static("public"));
app.use(FeedRoute);
//IMG
app.use(PaymentRoute);
app.use(express.static("public"));


app.listen(5000, ()=> console.log('Server up and running...'));
