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
            mainColumn: ['light-grey'],
            mainRowName: 'size',
            mainRow: ['l'],
            additionalColumnName: 'state',
            additionalColumn: ['default', 'focused', 'hovered', 'checked', 'disabled', ['disabled', 'checked']]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-checkbox.js' }
    ]
})