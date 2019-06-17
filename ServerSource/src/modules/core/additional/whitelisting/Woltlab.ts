/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-13 11:43:30 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 17:43:32
 */

import * as settings from '../../../../config/modsettings.json';
import Log from '../../CoreLog.js';
const FormData = require('form-data');
const fetch = require('node-fetch');

class WoltlabInterface {

    ProcessResponse(response) {
        /*
            Error = 0,
            KeyWrong = 1,
            DataMissing = 2,
            Success = 10,
            WrongPasswordUsername = 11
        */

        var resultObject = {
            verify: null,
            userdata: null
        };
        switch (response.StatusCode) {
            case 0:
                Log.PrintConsole('Login result [0] = Error');
                resultObject.verify = false;
                return resultObject;
                break;
            case 1:
                Log.PrintConsole('Login result [1] = Settings Verification Key wrong');
                resultObject.verify = false;
                return resultObject;
                break;
            case 2:
                Log.PrintConsole('Login result [2] = Some Data is missing');
                resultObject.verify = false;
                return resultObject;
                break;
            case 10:
                Log.PrintConsole('Login result [10] = Login successful');
                resultObject.verify = true;
                resultObject.userdata = response.UserData;
                return resultObject;
                break;
            case 11:
                Log.PrintConsole('Login result [11] = Wrong Password or Username');
                resultObject.verify = false;
                return resultObject;
                break;
            default:
                break;
        }
    }
    
    async VerifyLogin(username, password) {
        try {
            var request = await fetch(settings.Whitelisting.WoltlabUrl, {
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                body:    'Username='+username+'&Password='+password+'&Key='+settings.Whitelisting.WoltlabVerificationKey
                });
        
                var response = await request.json();
                return this.ProcessResponse(response);

        } catch (error) {
            Log.PrintConsole('ERROR: '+JSON.stringify(error)); 
        }
    }
}

const Whitelisting = new WoltlabInterface();
export default Whitelisting;