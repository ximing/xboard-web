/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 17/2/10
 */
'use strict';
export default function splitObject(obj, parts){
    let left = {};
    let right = {};
    Object.keys(obj).forEach((k) =>{
        if(parts.indexOf(k) !== -1){
            left[k] = obj[k];
        }else{
            right[k] = obj[k];
        }
    });
    return [left, right];
}
