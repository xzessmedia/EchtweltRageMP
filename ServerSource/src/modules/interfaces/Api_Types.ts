/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-22 23:20:53 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:05:34
 */

 export interface ApiPlayer {
    Id: number,
    FirstSeenAt: string,
    LastSeenAt: string,
    SocialClubName: string,
    EMail: string,
    Password: string,
    IsBanned: boolean
 }

 export interface ApiCharacter {
    Id: number,
    CreatedAt: Date,
    IsAlive: boolean,
    DiedAt: string,
    DeathBy: string,
    Firstname: string,
    Lastname: string,
    Birthdate: Date,
    IsMale: boolean,
    LastLocation: object,
    Customization: object,
    Hunger: number,
    Thirst: number,
    Health: number,
    Armor: number,
    playerId: number
 }