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
                name: 'example',
                tabs: ['one', 'two', 'three'],
                activeTab: 'one'
            },
            content: [
                {
                    elem: 'item',
                    elemMods: {
                        type: 'one'
                    },
                    content: [
                        'tab one'
                    ]
                },
                {
                    elem: 'item',
                    elemMods: {
                        type: 'two'
                    },
                    content: [
                        'tab two'
                    ]
                },
                {
                    elem: 'item',
                    elemMods: {
                        type: 'three'
                    },
                    content: [
                        'tab three'
                    ]
                },
                {
                    elem: 'item',
                    elemMods: {
                        type: 'prev'
                    },
                    content: 'previous'
                },
                {
                    elem: 'item',
                    elemMods: {
                        type: 'next'
                    },
                    content: 'next'
                }
            ]
        },

        {
            block: 'tab-switcher',
            js: {
                name: 'example'
            },
            content: [
                {
                    elem: 'tab',
                    elemMods: {
                        type: 'one',
                        visibility: 'hidden'
                    },
                    content: 'one'
                },

                {
                    elem: 'tab',
                    elemMods: {
                        type: 'two',
                        visibility: 'hidden'
                    },
                    content: 'two'
                },

                {
                    elem: 'tab',
                    elemMods: {
                        type: 'three',
                        visibility: 'hidden'
                    },
                    content: 'three'
                }
            ]
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-tab-switcher.js' }
    ]
})