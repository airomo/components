({
    block: 'b-page',
    title: 'Tab-switcher',
    head: [
        { elem: 'css', url: '_10-tab-switcher.css', ie: false },
        { elem: 'css', url: '_10-tab-switcher', ie: true }
    ],
    content: [
        {
            block: 'tab-switcher',
            js: {
                name: 'wall',
                tabs: ['one', 'two', 'three'],
                activeTab: 'one'
            },
            content: [
                {
                    elem: 'tab',
                    elemMods: {
                        type: 'one',
                        visibility: 'hidden'
                    },
                    content: [
                        {
                            block: 'wall',
                            mods: {
                                type: 'one'
                            }
                        },
                        'tab one'
                    ]
                },
                {
                    elem: 'tab',
                    elemMods: {
                        type: 'two',
                        visibility: 'hidden'
                    },
                    content: [
                        {
                            block: 'wall',
                            mods: {
                                type: 'two'
                            }
                        },
                        'tab two'
                    ]
                },
                {
                    elem: 'tab',
                    elemMods: {
                        type: 'three',
                        visibility: 'hidden'
                    },
                    content: [
                        {
                            block: 'wall',
                            mods: {
                                type: 'three'
                            }
                        },
                        'tab three'
                    ]
                },
                {
                    block: 'tab-switcher',
                    js: true,
                    elem: 'item',
                    elemMods: {
                        type: 'prev'
                    },
                    content: 'previous'
                },
                {
                    block: 'tab-switcher',
                    js: true,
                    elem: 'item',
                    elemMods: {
                        type: 'next'
                    },
                    content: 'next',
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-tab-switcher.js' }
    ]
})