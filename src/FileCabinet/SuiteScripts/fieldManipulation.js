/**
 * fieldManipulation.ts
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function beforeSubmit(context) {
        log.debug({
            title: 'Before Submit',
            details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
        });
        if ([context.UserEventType.CREATE].includes(context.type)) {
            const orderNumber = context.newRecord.getValue('tranid');
            let newValue = orderNumber * 2;
            context.newRecord.setValue('memo', newValue);
        }
    }
    exports.beforeSubmit = beforeSubmit;
});
