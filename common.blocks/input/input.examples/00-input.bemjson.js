({
    block: 'b-page',
    title: 'input',
    head: [
        { elem: 'css', url: '_00-input.css', ie: false },
        { elem: 'css', url: '_00-input', ie: true }
    ],
    content: [
        {
            block: 'example-table',
            themes: ['transparent', 'light-grey', 'grey', 'green', 'blue'],
            sizes: ['s', 'm', 'l', 'xl', 'xxl'],
            states: ['default'/*, 'hovered', 'focused'*/, 'disabled']
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-input.js' }
    ]
})