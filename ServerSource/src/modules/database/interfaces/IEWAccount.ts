/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:35:33 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-05 23:30:31
 */
import * as mongoose from 'mongoose';

export interface IEWAccount extends mongoose.Document {
  createdAt: Date,
  lastLogin: Date,
  socialclubname: string,
  ragempname: string,
  hardwareId: string,
  loginData: string,
  status: number
}