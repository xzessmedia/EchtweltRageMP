/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-06 20:32:53 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-06 20:35:36
 */


 export default class RageColor {
     public r: number;
     public g: number;
     public b: number;
     public a: number;
     constructor(R:number, G: number, B: number, Alpha: number) {
         this.r = R;
         this.g = G;
         this.b = B;
         this.a = Alpha;
     }
 }