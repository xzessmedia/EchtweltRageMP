import { ApiPlayer, ApiCharacter } from "../interfaces/Api_Types";
import CoreApi from "./CoreApi";
import Log from "./CoreLog";

/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-22 23:51:12 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:45:06
 */

 class CoreCharacter {

    async CreateCharacter(playerdata: ApiPlayer, firstname: string, lastname: string, birthdate: Date, isMale: boolean) {
        
        try {
            var t_character = {
                CreatedAt: new Date().toISOString(),
                IsAlive: true,
                DiedAt: '',
                DeathBy: '',
                Firstname: firstname,
                Lastname: lastname,
                Birthdate: birthdate,
                IsMale: true,
                LastLocation: {},
                Customization: {},
                Hunger: 0,
                Thirst: 0,
                Health: 100,
                Armor: 0,
                playerId: playerdata.Id
            };

            let result = await CoreApi.post(`/players/${playerdata.Id}/characters`, t_character);
        } catch (error) {
            Log.AddErrorLog(error, 'CreateCharacter()');
        }
    }

    async CountCharacters(playerdata: ApiPlayer, firstname: string, lastname: string, birthdate: Date, isMale: boolean): Promise<number> {
        
        try {
            let result = await CoreApi.get(`/players/${playerdata.Id}/characters`);
            if (result.data !== null) {
                let data_array:any[] = result.data;

                return data_array.length; 
            }
        } catch (error) {
            Log.AddErrorLog(error, 'CreateCharacter()');
        }
    }

    async GetCharacters(playerdata: ApiPlayer): Promise<ApiCharacter[]> {
        
        try {
            let result = await CoreApi.get(`/players/${playerdata.Id}/characters?filter={"where":{"IsAlive": true"}}`);
            if (result.data !== null) {
                let data_array:ApiCharacter[] = JSON.parse(result.data);
                
                return data_array; 
            }
        } catch (error) {
            Log.AddErrorLog(error, 'CreateCharacter()');
        }
    }
 }

 const Character = new CoreCharacter();

 export default Character;