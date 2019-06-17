/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 07:25:08 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:25:35
 */
import * as mongoose from 'mongoose';

export interface IEWKonto extends mongoose.Document {
    createdAt: Date,
    accountnumber: Number,
    moneyamount: Number,
    pincode: Number
}


