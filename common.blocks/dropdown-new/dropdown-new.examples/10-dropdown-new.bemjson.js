({
    block: 'b-page',
    title: 'dropdown-new',
    head: [
        { elem: 'css', url: '_10-dropdown-new.css', ie: false },
        { elem: 'css', url: '_10-dropdown-new', ie: true }
    ],
    content: [
        {
            block: 'dropdown-new',
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
        { elem: 'js', url: '_10-dropdown-new.js' }
    ]
})