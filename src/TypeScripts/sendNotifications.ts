
/**
 * sendNotifications.ts
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

import {EntryPoints} from "N/types";
import log = require('N/log');
import email = require('N/email')

export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext){
    if ([context.UserEventType.CREATE].includes(context.type)){
        const newRecord = context.newRecord;
        email.send({
            author: -5, // -5 is the default sender ID for system notes
            recipients: 'example@email.com',
            subject: 'TEST - Record Created Notification',
            body: `Record ${newRecord.id} has been created.`
        });
    }
    log.debug({
        title: 'Email Sent',
        details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
    });
}