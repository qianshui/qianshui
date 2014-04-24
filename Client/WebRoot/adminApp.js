/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setPath('YongYou', 'app');

   Ext.require([
            'Ext.layout.container.*',
            'Ext.resizer.Splitter',
            'Ext.fx.target.Element',
            'Ext.fx.target.Component',
            'Ext.window.Window',
            'YongYou.view.Viewport',
            'YongYou.view.config.LeftPanel',
            'YongYou.util.Config',
            'YongYou.util.DataApi',
             'YongYou.util.EventHandle'
        ]);
        
var subjectType_model = Ext.create('YongYou.model.SubjectType');
var subject_model = Ext.create('YongYou.model.Subject');
var law_model = Ext.create('YongYou.model.Law');
var flow_model = Ext.create('YongYou.model.Flow');
var policy_model = Ext.create('YongYou.model.Policy');
var contact_model = Ext.create('YongYou.model.Contact');


Ext.application({
    name: 'YongYou',
    autoCreateViewport: true
    
//    models: ['Station', 'Song'],    
//    stores: ['Stations', 'RecentSongs', 'SearchResults'],
//    controllers: ['Station', 'Song']
});
