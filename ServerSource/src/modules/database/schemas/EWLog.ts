/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:31:51 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-05 20:38:06
 */

import { Document, Schema, Model, model} from "mongoose";
import { IEWLog } from './../interfaces/IEWLog';
export var EWLogSchema: Schema = new Schema({
    createdAt: Date,
    message: String,
    category: String,
    type: String
  });
  EWLogSchema.pre("save", (next) =>  {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });
  
  export const EWLog = model<any>("EWLog", EWLogSchema);