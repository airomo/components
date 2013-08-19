({
    block: 'b-page',
    title: 'button',
    head: [
        { elem: 'css', url: '_10-button.css', ie: false },
        { elem: 'css', url: '_10-button', ie: true }
    ],
    content: [
        {
            block: 'button',
            content: 'Simplest button'
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_20-button.js' }
    ]
})