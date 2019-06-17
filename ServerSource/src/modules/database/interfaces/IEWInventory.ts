/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 07:37:36 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 18:27:21
 */

import * as mongoose from 'mongoose';
import { IEWItem } from './IEWItem';

export interface IEWInventory extends mongoose.Document {
    createdAt: Date,
    maxWeight: Number,
    maxDimension: Number,
    items: Array<IEWItem>
}

