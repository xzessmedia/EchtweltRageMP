/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-17 10:35:15 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 10:40:07
 */

import { Document, Schema, Model, model} from "mongoose";
import { IEWKleidung } from "../interfaces/IEWKleidung";

export var EWKleidungSchema: Schema = new Schema({
  wearedOutfit: Object,
  createdOutfits: [],
  ownedCloth: []
});

export const EWKleidung = model<IEWKleidung>("EWKleidung", EWKleidungSchema);
