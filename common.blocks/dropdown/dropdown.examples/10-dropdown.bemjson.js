({
    block: 'b-page',
    title: 'Dropdown',
    head: [
        { elem: 'css', url: '_10-dropdown.css', ie: false },
        { elem: 'css', url: '_10-dropdown', ie: true }
    ],
    content: [
        {
            block: 'dropdown',
            content: [
                {
                    elem: 'switcher',
                    content: 'press & drag'
                },
                {
                    elem: 'content',
                    content: [
                        {
                            elem: 'item',
                            content: 'item'
                        }
                    ]
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-dropdown.js' }
    ]
})