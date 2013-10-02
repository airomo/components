({
    block: 'b-page',
    title: 'Qr-code',
    head: [
        { elem: 'css', url: '_10-qr-code.css', ie: false },
        { elem: 'css', url: '_10-qr-code', ie: true }
    ],
    content: [
        {
            block: 'qr-code',
            url: 'http://airomo.com'
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-qr-code.js' }
    ]
})