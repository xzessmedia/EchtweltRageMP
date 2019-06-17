/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 07:37:02 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:37:23
 */

import * as mongoose from 'mongoose';

export interface IEWItem extends mongoose.Document {
    itemName: String,
    itemCategory: String,
    itemData: Object,
    itemAmount: Number,
    isStackable: Boolean
}

