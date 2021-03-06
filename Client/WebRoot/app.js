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
Ext.Loader.setConfig({
	 enabled: true,
      paths: {
      	
          'YongYou':'app'
      }

});

Ext.require(['YongYou.util.Config','YongYou.util.DataApi'
,'YongYou.model.ListItem', 'YongYou.layout.Accordion','YongYou.util.ClientEventHandle']);

Ext.application({
    stores: [
        'MainMenu',       
        'SubjectMenu',
          'IndustryMenu',
        'AddressMenu',
        'QueryRoot'
    ],
     requires:[
    ],
    controllers: ['Main','ConsultingControl','QueryControl'], 
    views: [
        'Main'
    ],
   
    name: 'YongYou',

    launch: function() {
		
        var view = Ext.create('YongYou.view.Main', { fullscreen: true }); 
        Ext.Viewport.add(view);
      
   
    }

});
