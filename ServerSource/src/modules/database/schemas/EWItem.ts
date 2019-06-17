/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 07:35:19 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:42:10
 */

import { Document, Schema, Model, model} from "mongoose";
import { IEWItem } from "../interfaces/IEWItem";

export var EWItemSchema: Schema = new Schema({
  itemName: String,
  itemCategory: String,
  itemData: Object,
  itemAmount: Number,
  isStackable: Boolean
});
EWItemSchema.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

export const EWItem = model<IEWItem>("EWItem", EWItemSchema);