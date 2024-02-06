/**
 * createRelatedRecords.ts
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

import {EntryPoints} from "N/types";
import log = require('N/log');
import record = require('N/record')

// Example 4
// When sales order is created, set the memo field value automatically
export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext){
    log.debug({
        title: 'After Submit',
        details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
    });
    if ([context.UserEventType.CREATE].includes(context.type)){
        const newRecord = context.newRecord;
        const relatedRecord = record.create({
            type: record.Type.TASK,
            isDynamic: true
        });
        relatedRecord.setValue('title', 'Related Task');
        relatedRecord.setValue('company', newRecord.id);
        relatedRecord.save();
    }
    log.debug({
        title: 'Before Load',
        details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
    });
}