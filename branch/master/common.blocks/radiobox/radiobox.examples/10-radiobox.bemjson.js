({
    block: 'b-page',
    title: 'Radiobox',
    head: [
        { elem: 'css', url: '_10-radiobox.css', ie: false },
        { elem: 'css', url: '_10-radiobox', ie: true }
    ],
    content: [
        {
            block: 'radiobox',
            name: 'example',
            value: '1',
            mods: {
                color: 'blue',
                size: 'l'
            },
            content:[
                {
                    elem: 'radio',
                    controlAttrs: {
                        value: '3'
                    },
                    elemMods: {
                        disabled: 'yes'
                    },
                    content: 'disabled'
                },

                '<br><br>',

                {
                    elem: 'radio',
                    controlAttrs: {
                        value: '1',
                        accesskey: 'k'
                    },
                    content: 'press ALT + K'
                },

                '<br><br>',

                {
                    elem: 'radio',
                    controlAttrs: {
                        value: '2',
                        accesskey: 'l'
                    },
                    content: 'press ALT + L'
                }

            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-radiobox.js' }
    ]
})
