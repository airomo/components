({
    block: 'b-page',
    title: 'Radiobox',
    head: [
        { elem: 'css', url: '_20-radiobox.css', ie: false },
        { elem: 'css', url: '_20-radiobox', ie: true }
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
                    content: 'Виден всем'
                },
                {
                    elem: 'radio',
                    controlAttrs: {
                        value: '1'
                    },
                    content: 'Только мне'
                },
                {
                    elem: 'radio',
                    controlAttrs: {
                        value: '2'
                    },
                    content: 'Только друзьям'
                }

            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_20-radiobox.js' }
    ]
})
