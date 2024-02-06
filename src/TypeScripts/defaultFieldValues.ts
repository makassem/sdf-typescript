/**
 * defaultFieldValues.ts
 * 
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

import {EntryPoints} from "N/types";
import log = require('N/log');

// Example 1
// When sales order is created, set the memo field value automatically
export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext){
    log.debug({
        title: 'Before Load',
        details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
    });
    if ([context.UserEventType.CREATE].includes(context.type)){
        context.newRecord.setValue({
            fieldId: 'memo',
            value: 'setting default value for memo'
        });
    }
    log.debug({
        title: 'Before Load',
        details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
    });
}

