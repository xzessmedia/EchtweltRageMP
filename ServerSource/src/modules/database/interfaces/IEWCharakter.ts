/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:35:33 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 18:20:26
 */
import * as mongoose from 'mongoose';
import { EWAccount } from "../schemas/EWAccount";
import { IEWAccount } from './IEWAccount';
import { IEWInventory } from './IEWInventory';
import { IEWKonto } from './IEWKonto';

export interface IEWCharakter extends mongoose.Document {
    createdAt: Date,
    account: IEWAccount,
    firstname: string,
    lastname: string,
    isCitizen: boolean,
    isAlive: boolean,
    isBanned: boolean,
    handmoney: number,
    lastposition: string,
    job: string,
    inventory: IEWInventory,
    bankaccounts: [IEWKonto],
    playerdata: any
}

