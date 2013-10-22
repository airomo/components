({
    block: 'b-page',
    title: 'Radiobox',
    head: [
        { elem: 'css', url: '_00-radiobox.css', ie: false },
        { elem: 'css', url: '_00-radiobox', ie: true }
    ],
    content: [
        {
            block: 'example-table',
            mainColumnName: 'color',
            mainColumn: ['blue'],
            mainRowName: 'size',
            mainRow: ['s','m','l'],
            additionalColumnName: 'state',
            additionalColumn: ['default', 'focused', 'checked', ['checked', 'focused'], 'disabled', ['disabled', 'checked']]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-radiobox.js' }
    ]
})
