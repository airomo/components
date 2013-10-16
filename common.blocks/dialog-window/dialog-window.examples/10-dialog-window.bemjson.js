({
    block: 'b-page',
    title: 'Dialog window',
    head: [
        { elem: 'css', url: '_10-dialog-window.css', ie: false },
        { elem: 'css', url: '_10-dialog-window', ie: true }
    ],
    content: [
        {
            block: 'example',
            js: true,
            content: [
                {
                    block: 'button',
                    mods: {
                        color: 'light-grey',
                        size: 's'
                    },
                    mix: [
                        { block: 'example', elem: 'button' }
                    ],
                    content: 'Info'
                }
            ]
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-dialog-window.bemhtml.js' },
        { elem: 'js', elemMods: { i18n: 'yes' }, url: '_10-dialog-window.js' }
    ]
})