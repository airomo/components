({
    block: 'b-page',
    title: 'Single tab-switcher with separate tab containers',
    head: [
        { elem: 'css', url: '_30-tab-switcher.css', ie: false },
        { elem: 'css', url: '_30-tab-switcher', ie: true }
    ],
    content: [
        {
            block: 'radio-button',
            mods: {
                color: 'transparent',
                size: 'xl'
            },
            name: 'tabs_1',
            mix: [
                {
                    block: 'tab-switcher',
                    js: {
                        name: 'tabs_1'
                    },
                    mods: {
                        type: 'radio'
                    }
                }
            ],
            content: [
                {
                    elem: 'radio',
                    elemMods: {
                        disabled: 'yes'
                    },
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item',
                            elemMods: { disabled: 'yes'}
                        }
                    ],
                    content: 'disabled tab'
                },
                {
                    elem: 'radio',
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item'
                        }
                    ],
                    content: 'tab 2'
                },
                {
                    elem: 'radio',
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item'
                        }
                    ],
                    content: 'tab 3'
                },
                {
                    elem: 'radio',
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item'
                        }
                    ],
                    content: 'tab 4'
                }
            ]
        },

        {
            block: 'tab-switcher',
            js: {
                name: 'tabs_1'
            },
            content: [
                {
                    elem: 'tab',
                    content: 'tab one'
                }
            ]
        },

        {
            block: 'tab-switcher',
            js: {
                name: 'tabs_1'
            },
            content: [
                {
                    elem: 'tab',
                    content: 'tab two'
                }
            ]
        },

        {
            block: 'tab-switcher',
            js: {
                name: 'tabs_1'
            },
            content: [
                {
                    elem: 'tab',
                    content: 'tab three'
                },
                {
                    elem: 'tab',
                    content: 'tab four'
                }
            ]
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_30-tab-switcher.js' }
    ]
})