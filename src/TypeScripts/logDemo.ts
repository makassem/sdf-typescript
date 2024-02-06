/**
 * logDemo.ts
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

import {EntryPoints} from "N/types";
import log = require('N/log');

// Bonus Example: Using the N/log module
// UserEventScript triggered beforeLoad, showing various logs for demo purposes
// UserEventType: on Sales Order create, edit and deletions
export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext){
    if ([context.UserEventType.CREATE, context.UserEventType.EDIT, context.UserEventType.DELETE].includes(context.type)){
        let myValue = 'value';

        let myObject = {
            name: 'Jane',
            id: '123'
        };
    
        // An audit log message
        log.audit({
            title: 'Audit Entry',
            details: myObject
        });
    
        // A debug log message
        log.debug({
            title: 'Debug Entry',
            details: 'Value of myValue is: ' + myValue
        });

        // A debug log message with context details
        log.debug({
            title: 'Before Load',
            details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
        });
    
        // An emergency log message
        log.emergency({
            title: 'Emergency Entry',
            details: 'Value of myValue is: ' + myValue
        });
    
        // An error log message
        log.error({
            title: 'Error Entry', 
            details: 'Value of myValue is: ' + myValue
        });
    
    }   
}

