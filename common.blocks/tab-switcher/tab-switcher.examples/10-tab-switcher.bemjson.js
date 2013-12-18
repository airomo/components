({
    block: 'b-page',
    title: 'Simplest tab-switcher',
    head: [
        { elem: 'css', url: '_10-tab-switcher.css', ie: false },
        { elem: 'css', url: '_10-tab-switcher', ie: true }
    ],
    content: [
        {
            block: 'tab-switcher',
            js: {
                name: 'tabs_1'
            },
            content: [
                {
                    elem: 'item',
                    elemMods: { disabled: 'yes'},
                    content: 'disabled tab'
                },
                {
                    elem: 'item',
                    content: 'tab 2'
                },
                {
                    elem: 'item',
                    content: 'tab 3'
                },

                {
                    elem: 'tab',
                    content: 'tab one'
                },

                {
                    elem: 'tab',
                    content: 'tab two'
                },

                {
                    elem: 'tab',
                    content: 'tab three'
                }
            ]
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-tab-switcher.js' }
    ]
})