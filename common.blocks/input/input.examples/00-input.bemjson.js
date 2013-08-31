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
            mainColumnName: 'color',
            mainColumn: ['transparent', 'light-grey', 'grey', 'dark-grey', 'green', 'blue'],
            mainRowName: 'size',
            mainRow: ['s', 'm', 'l', 'xl', 'xxl'],
            additionalColumnName: 'state',
            additionalColumn: ['default'/*, 'hovered', 'focused'*/, 'disabled']
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-input.js' }
    ]
})