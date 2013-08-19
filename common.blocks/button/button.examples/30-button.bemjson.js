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
            content: ''
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_30-button.js' }
    ]
})