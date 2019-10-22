/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-08 02:30:10 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-02-08 02:30:10 
 */

import axios from 'axios';
import * as config from '../../config/modsettings.json';

export default axios.create({
    baseURL: config.BaseApi
});
