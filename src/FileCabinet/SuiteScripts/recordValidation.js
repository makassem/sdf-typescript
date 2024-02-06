/**
 * recordValidation.ts
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
        if ([context.UserEventType.EDIT].includes(context.type)) {
            const memoField = context.newRecord.getValue('otherrefnum');
            log.debug({
                title: 'otherrefnum',
                details: `${memoField}`
            });
            if (memoField == '')
                throw 'Memo Field cannot be empty.';
        }
    }
    exports.beforeSubmit = beforeSubmit;
});
