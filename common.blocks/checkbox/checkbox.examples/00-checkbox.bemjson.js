({
    block: 'b-page',
    title: 'Checkbox',
    head: [
        { elem: 'css', url: '_00-checkbox.css', ie: false },
        { elem: 'css', url: '_00-checkbox', ie: true }
    ],
    content: [
        {
            block: 'example-table',
            mainColumnName: 'color',
            mainColumn: ['blue'],
            mainRowName: 'size',
            mainRow: ['l', 'm', 's'],
            additionalColumnName: 'state',
            additionalColumn: ['default', 'focused', 'checked', ['focused', 'checked'], 'disabled', ['disabled', 'checked']]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-checkbox.js' }
    ]
})
