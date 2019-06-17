/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:21:10 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:22:33
 */
import { Document, Schema, Model, model} from "mongoose";
import { IEWAccount } from "../interfaces/IEWAccount";

export var EWAccountSchema: Schema = new Schema({
  createdAt: Date,
  lastLogin: Date,
  socialclubname: String,
  ragempname: String,
  hardwareId: String,
  loginData: String,
  level: Number,
  status: Number
});
EWAccountSchema.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

export const EWAccount = model<IEWAccount>("EWAccount", EWAccountSchema);