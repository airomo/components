({
    block: 'b-page',
    title: 'radio-button',
    head: [
        { elem: 'css', url: '_00-radio-button.css', ie: false },
        { elem: 'css', url: '_00-radio-button', ie: true }
    ],
    content: [
        {
            block: 'radio-button',
            mods: {
                theme: 'transparent',
                size: 'xl'
            },
            name: 'show_to',
            value: 'friends',
            content: [
                {
                    elem: 'radio',
                    controlAttrs: { value: 'all' },
                    elemMods: { disabled: 'yes'},
                    content: 'виден всем'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'friends' },
                    content: 'только друзьям'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'me' },
                    content: 'только мне'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'other' },
                    content: 'только не мне'
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-radio-button.js' }
    ]
})