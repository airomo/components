({
    block: 'b-page',
    title: 'icon',
    head: [
        { elem: 'css', url: '_00-icon.css', ie: false },
        { elem: 'css', url: '_00-icon', ie: true }
    ],
    content: [
        'color: ',
        {
            block: 'radio-button',
            mods: {
                color: 'transparent',
                size: 's',
                type: 'icon-color'
            },
            name: 'icon_color',
            value: 'default',
            content: [
                {
                    elem: 'radio',
                    controlAttrs: { value: 'default' },
                    content: 'default'
                }
            ]
        },
        '<br><br>',
        {
            block: 'example-table',
            mainColumnName: 'type',
            mainColumn: ['shout', 'info', 'refresh', 'dashboard', 'timeline', 'description', 'arrow-down', 'arrow-up', 'apps-info', 'like', 'dislike', 'monkey', 'thin-arrow-left', 'thin-arrow-right'],
            mainRowName: 'size',
            mainRow: ['s', 'm', 'l', 'xl', 'xxl'],
            additionalColumnName: 'state',
            additionalColumn: ['default', 'pressed']
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-icon.js' }
    ]
})