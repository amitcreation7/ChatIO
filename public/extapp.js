<script type="text/javascript">
                Ext.application({
            label: 'HelloExt',
            launch: function() {
                Ext.create('Ext.container.Viewport', {
                    layout: 'fit',
                    items: [
                        {
                            title: 'Hello Ext',
                            html : '<marquee>Hello! Welcome to Ext JS.</marquee>'
                        }
                    ]
                });
            }
        });

            var tpl = Ext.create('Ext.Template', [
             'Hello {firstName} {lastName}!',
             ' Nice to meet you!'
            ]);
            var formPanel = Ext.create('Ext.form.FormPanel', {
             itemId : 'formPanel',
             frame : true,
             layout : 'anchor',
             defaultType : 'textfield',
             defaults : {
             anchor : '-10',
             labelWidth : 65
             },
             items : [
                 {
                 fieldLabel : 'First name',
                 name : 'firstName',
                 allowBlank : false
                 },
                 {
                 fieldLabel : 'Last name',
                 name : 'lastName',
                 allowBlank: true
                 }
             ],
             buttons : [
                 {
                 text : 'Submit',
                     handler : function() {
                     var formPanel = this.up('#formPanel'),
                     vals = formPanel.getValues(),
                     greeting = tpl.apply(vals);
                     Ext.Msg.alert('Hello!', greeting);
                     }
                 }
             ]
        });
            Ext.onReady(function() {
             Ext.create('Ext.window.Window', {
             height : 125,
             width : 200,
             closable : true,
             title : 'Input needed.',
             border : false,
             layout : 'fit',
             items : formPanel
             }).show();
            });
        </script>