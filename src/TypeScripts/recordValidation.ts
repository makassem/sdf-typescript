/**
 * recordValidation.ts
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
    if ([context.UserEventType.EDIT].includes(context.type)){
        const memoField = context.newRecord.getValue('otherrefnum');
        log.debug({
            title: 'otherrefnum', 
            details: `${memoField}`
        })
        if (memoField == '')
            throw 'Memo Field cannot be empty.';
    }
}
