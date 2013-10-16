BEM.DOM.decl('example', {
    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    dialogWindow;


                this.bindTo(this.elem('button'), 'click', function() {
                    if ( !dialogWindow ) {

                        dialogWindow = BEM.blocks['dialog-window'].createNew({
                            block: 'dialog-window',
                            mods: {
                                type: 'info'
                            },
                            mix: [
                                {
                                    block: 'example-form',
                                    js: true
                                }
                            ],
                            title: 'Some form',
                            content: [
                                {
                                    block: 'input',
                                    mix: [
                                        {
                                            block: 'example-form',
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
                                            elem: 'control',
                                            mix: [
                                                {
                                                    block: 'example-form',
                                                    elem: 'form-input'
                                                }
                                            ]
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
                                                { block: 'dialog-window', elem: 'control', elemMods: { type: 'resolve' } }
                                            ],
                                            content: 'Send'
                                        },

                                        {
                                            block: 'button',
                                            mods: {
                                                color: 'light-grey',
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
                        });


                        var form = dialogWindow.findBlockOn('example-form'),
                            formSubmit = form.submit;


                        form.submit = function() {
                            dialogWindow.resolve();
                        };


                        dialogWindow
                            .onOpen(function() {
                                dialogWindow.findBlockOn('example-form').elem('form-input').focus();
                            })
                            .onResolve(function() {
                                return formSubmit.apply(form) != false ? BEM.blocks['dialog-window'].open('success', {
                                    block: 'dialog-window',
                                    mods: {
                                        type: 'success'
                                    },
                                    title: 'Success',
                                    content: [
                                        'Successful message',

                                        {
                                            elem: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {
                                                        color: 'light-grey',
                                                        size: 'm'
                                                    },
                                                    mix: [
                                                        { block: 'dialog-window', elem: 'control', elemMods: { type: 'close' } }
                                                    ],
                                                    content: 'Ok'
                                                }
                                            ]
                                        }
                                    ]
                                }) : false;
                            });


                        if ( console ) {
                            dialogWindow
                                .onOpen(function() {
                                    console.log('open');
                                })
                                .onResolve(function() {
                                    console.log('resolve');
                                })
                                .onReject(function() {
                                    console.log('reject');
                                })
                                .onClose(function() {
                                    console.log('close');
                                });
                        }
                    }


                    dialogWindow.open();
                });
            }
        }
    }
});