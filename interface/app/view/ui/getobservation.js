/*
 * File: app/view/ui/getobservation.js
 * Date: Fri Sep 13 2013 14:42:09 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.getobservation', {
    extend: 'Ext.form.Panel',

    border: 0,
    bodyPadding: 10,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    id: 'getobsconfig',
                    title: 'GetObservation configuration:',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'maxgoperiod',
                            fieldLabel: 'Max request interval (hours)',
                            anchor: '100%'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});