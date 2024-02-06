/**
 * sendNotifications.ts
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["require", "exports", "N/log", "N/email"], function (require, exports, log, email) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function afterSubmit(context) {
        if ([context.UserEventType.CREATE].includes(context.type)) {
            const newRecord = context.newRecord;
            email.send({
                author: -5,
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
    exports.afterSubmit = afterSubmit;
});
