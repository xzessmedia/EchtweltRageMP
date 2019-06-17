/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 07:33:47 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 19:48:07
 */

import { Document, Schema, Model, model} from "mongoose";
import { EWItem } from "./EWItem";
import { IEWInventory } from "../interfaces/IEWInventory";

export var EWInventorySchema: Schema = new Schema({
  createdAt: Date,
  maxWeight: Number,
  maxDimension: Number,
  items: Array<any>()
});

EWInventorySchema.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

export const EWInventory = model<IEWInventory>("EWInventory", EWInventorySchema);