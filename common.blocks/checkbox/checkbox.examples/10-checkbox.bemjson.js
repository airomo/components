({
    block: 'b-page',
    title: 'Checkbox',
    head: [
        { elem: 'css', url: '_10-checkbox.css', ie: false },
        { elem: 'css', url: '_10-checkbox', ie: true }
    ],
    content: [
        {
            block: 'checkbox',
            mods: {
                color: 'blue',
                size: 'l',
                checked: 'yes',
                disabled: 'yes'
            },
            checkboxAttrs: {
                value: 1,
                name: 'example'
            },
            content: {
                elem: 'label',
                content: 'Disabled'
            }
        },

        '<br><br>',

        {
            block: 'checkbox',
            mods: {
                color: 'blue',
                size: 'l'
            },
            checkboxAttrs: {
                value: 1,
                name: 'example2',
                accesskey: 'k'
            },
            content: {
                elem: 'label',
                content: 'press Alt + K'
            }
        },

        '<br><br>',

        {
            block: 'checkbox',
            mods: {
                color: 'blue',
                size: 'l'
            },
            checkboxAttrs: {
                value: 1,
                name: 'example3',
                accesskey: 'a'
            },
            content: {
                elem: 'label',
                content: 'press Alt + A'
            }
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-checkbox.js' }
    ]
})
