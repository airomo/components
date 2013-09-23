({
    block: 'b-page',
    title: 'button',
    head: [
        { elem: 'css', url: '_30-button.css', ie: false },
        { elem: 'css', url: '_30-button', ie: true }
    ],
    content: [
        {
            block: 'button',
            mods: {
                color: 'red',
                size: 'l'
            },
            content: 'Simplest button'
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_30-button.js' }
    ]
})