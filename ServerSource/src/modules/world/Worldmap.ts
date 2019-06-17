/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-08 02:29:30 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-19 20:30:26
 */
import BaseLocation from "../base/BaseLocation";
import LocationFIB from "./locations/LocationFIB";
import LocationPolice from "./locations/LocationPolice";
import Log from "../core/CoreLog";
import LocationTownhall from "./locations/LocationTownhall";
import LocationMedicalCenter from "./locations/LocationLSMC";
import LocationLSMC from "./locations/LocationLSMC";
import LocationGericht from "./locations/LocationGericht";
import LocationDopeDealer from "./locations/LocationDopeDealer";
import LocationDopeprocessor from "./locations/LocationDopeProcessor";
import LocationTaxi from "./locations/LocationTaxi";
import LocationWeedFarm from "./locations/LocationWeedFarm";
import LocationBergbaumineA from "./locations/LocationBergbaumineA";
import LocationBergbaumineB from "./locations/LocationBergbaumineB";
import LocationBergbaumineC from "./locations/LocationBergbaumineC";
import LocationBus from "./locations/LocationBus";
import LocationMolkerei from "./locations/LocationMolkerei";
import LocationSchrottplatz from "./locations/LocationSchrottplatz";
import LocationBikeRantal from "./locations/LocationBikeRental";
import LocationSchweineFarm from "./locations/LocationSchweinefarm";
import LocationKleinerAutohandel from "./locations/LocationKleinerAutohandel";
import LocationWaschanlage from "./locations/LocationWaschanlage";
import LocationWerkstatt from "./locations/LocationWerkstatt";

 class WorldMap {
     _maplocations: Array<BaseLocation>;

     constructor() {
        this._maplocations = new Array<BaseLocation>();    
     }

     AddLocationToWorldmap(location: BaseLocation) {
         this._maplocations.push(location);
     }

     InitWorldmap() {
        let fib     = new LocationFIB();
        let polizei = new LocationPolice();
        let rathaus = new LocationTownhall();
        let lsmc    = new LocationLSMC();
        let gericht = new LocationGericht();
        let drogendealer = new LocationDopeDealer();
        let haschischverarbeitung = new LocationDopeprocessor();
        let taxi = new LocationTaxi();
        let cannabisplantage = new LocationWeedFarm();
        let bergbaumineA = new LocationBergbaumineA();
        let bergbaumineB = new LocationBergbaumineB();
        let bergbaumineC = new LocationBergbaumineC();
        let bus = new LocationBus();
        let molkerei = new LocationMolkerei();
        let schrottplatz = new LocationSchrottplatz();
        let fahrradverlei = new LocationBikeRantal();
        let schweinefarm = new LocationSchweineFarm();
        let autohandel = new LocationKleinerAutohandel();

        /** Waschanlagen  */
        let waschanlagen = [{
            x: -699.8168,
            y: -931.8791,
            z: 18.35748
        }, {
            x: 20.61422, 
            y: -1392.011, 
            z: 28.61772
        }];
        
        for (let index = 0; index < waschanlagen.length; index++) {
            var pos = waschanlagen[index];
            let waschanlage = new LocationWaschanlage(new mp.Vector3(pos.x,pos.y,pos.z));
        }
        
        /** Werkstätte  */
        let bennys = new LocationWerkstatt('Bennys', new mp.Vector3(-212.06,-1324.065,30.8904));
        let customsouth = new LocationWerkstatt('Customs-South', new mp.Vector3(731.7545,-1088.646,22.16901));
        let nordwerkstatt = new LocationWerkstatt('Nordwerkstatt', new mp.Vector3(1175.243,2639.316,37.75382));
        let autohaus = new LocationWerkstatt('Autohaus', new mp.Vector3(-35.85453, -1088.597, 26.42235));
     }

 }

 const World = new WorldMap();

 export default World;