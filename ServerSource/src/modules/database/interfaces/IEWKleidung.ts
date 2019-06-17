/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-17 10:39:34 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-02-17 10:39:34 
 */

import * as mongoose from 'mongoose';

export interface IEWKleidung extends mongoose.Document {
    itemName: String,
    itemCategory: String,
    itemData: Object
}

