"use strict";

import mongoose from "mongoose";


mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const url = "mongodb://localhost/sample";
const connection = mongoose.createConnection(url);

export default connection;

