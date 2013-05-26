({
    block: 'b-page',
    title: 'airomo-button',
    head: [
        { elem: 'css', url: '_10-airomo.css', ie: false },
        { elem: 'css', url: '_10-airomo', ie: true }
    ],
    content: [
        {
            block: 'button',
            mods: { size: 'm', theme: 'airomo' },
            content: 'Airomo.Button'
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-airomo.js' }
    ]
})