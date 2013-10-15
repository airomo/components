BEM.DOM.decl({block: 'button', modName: 'action', modVal: 'dialog'}, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    dialogWindow;


                this.bindTo('click', function() {
                    if ( !dialogWindow ) {

                        BEM.blocks['dialog-window'].createDialog({
                            block: 'dialog-window',
                            mix: [
                                {
                                    block: 'test-form',
                                    js: true
                                }
                            ],
                            mods: {
                                type: 'info'
                            },
                            title: 'Some form',
                            content: [
                                {
                                    block: 'input',
                                    mix: [
                                        {
                                            block: 'test-form',
                                            elem: 'input'
                                        }
                                    ],
                                    mods: {
                                        color: 'light-grey',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'hint',
                                            content: 'Write something'
                                        },
                                        {
                                            elem: 'control'
                                        },
                                        {
                                            elem: 'message',
                                            elemMods: {
                                                type: 'error'
                                            },
                                            content: 'You need to write something'
                                        }
                                    ]
                                },

                                {
                                    elem: 'controls',
                                    content: [
                                        {
                                            block: 'button',
                                            mods: {
                                                color: 'green',
                                                size: 'm'
                                            },
                                            mix: [
                                                {
                                                    block: 'test-form',
                                                    elem: 'submit'
                                                },
                                                { block: 'dialog-window', elem: 'control', elemMods: { type: 'resolve' } }
                                            ],
                                            content: 'Send'
                                        },

                                        {
                                            block: 'button',
                                            mods: {
                                                color: 'red',
                                                size: 'm'
                                            },
                                            mix: [
                                                { block: 'dialog-window', elem: 'control', elemMods: { type: 'reject' } }
                                            ],
                                            content: 'Cancel'
                                        }
                                    ]
                                }
                            ]
                        }, function(block) {
                            dialogWindow = block;

                            dialogWindow.onOpen(function() {
                                console && console.log('open');
                            });

                            dialogWindow.open();
                        });

                    } else {

                        dialogWindow.open();

                    }
                });


            }
        }
    }
});