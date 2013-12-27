({
    block: 'b-page',
    title: 'button',
    head: [
        { elem: 'css', url: '_20-button.css', ie: false },
        { elem: 'css', url: '_20-button', ie: true }
    ],
    content: [
        {
            block: 'button',
            mods: {
                color: 'light-grey',
                size: 'l'
            },
            content: 'Simplest button'
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_20-button.js' }
    ]
})