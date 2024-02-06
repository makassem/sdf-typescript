/**
 * defaultFieldValues.ts
 *
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Example 1
    // When sales order is created, set the memo field value automatically
    function beforeLoad(context) {
        log.debug({
            title: 'Before Load',
            details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
        });
        if ([context.UserEventType.CREATE].includes(context.type)) {
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
    exports.beforeLoad = beforeLoad;
});
