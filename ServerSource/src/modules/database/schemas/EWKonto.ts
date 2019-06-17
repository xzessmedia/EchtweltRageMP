/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 07:19:45 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:42:26
 */

import { Document, Schema, Model, model} from "mongoose";
import { IEWKonto } from "../interfaces/IEWKonto";

export var EWKontoSchema: Schema = new Schema({
    createdAt: Date,
    accountnumber: Number,
    moneyamount: Number,
    pincode: Number
  });
  EWKontoSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });
  
  export const EWKonto = model<IEWKonto>("EWKonto", EWKontoSchema);