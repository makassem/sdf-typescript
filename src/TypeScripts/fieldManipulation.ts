/**
 * fieldManipulation.ts
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

import {EntryPoints} from "N/types";
import log = require('N/log');

export function beforeSubmit(context: EntryPoints.UserEvent.beforeSubmitContext){
    log.debug({
        title: 'Before Submit',
        details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
    });
    if ([context.UserEventType.CREATE].includes(context.type)){
        const orderNumber = context.newRecord.getValue('tranid') as number;
        let newValue = orderNumber * 2;
        context.newRecord.setValue('memo', newValue);
    }
}