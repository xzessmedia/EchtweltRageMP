/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-11 09:39:19 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 21:19:02
 */
import { Document, Schema, Model, model} from "mongoose";
import { EWAccount } from "./EWAccount";
import { IEWCharakter } from "../interfaces/IEWCharakter";
import { EWKonto } from "./EWKonto";
import { EWInventory } from "./EWInventory";

export var EWCharakterSchema: Schema = new Schema({
  createdAt: Date,
  account: EWAccount.schema,
  firstname: String,
  lastname: String,
  isCitizen: Boolean,
  isAlive: Boolean,
  isBanned: Boolean,
  handmoney: Number,
  lastposition: String,
  job: String,
  inventory: EWInventory.schema,
  bankaccounts: [EWKonto.schema],
  playerdata: Object
});
EWCharakterSchema.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

export const EWCharakter = model<IEWCharakter>("EWCharakter", EWCharakterSchema);