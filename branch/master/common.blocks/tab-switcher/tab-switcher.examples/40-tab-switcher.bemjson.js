({
    block: 'b-page',
    title: 'Two tab-switchers',
    head: [
        { elem: 'css', url: '_40-tab-switcher.css', ie: false },
        { elem: 'css', url: '_40-tab-switcher', ie: true }
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
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item'
                        }
                    ],
                    content: 'tab 1'
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

        {
            block: 'radio-button',
            mods: {
                color: 'transparent',
                size: 'xl'
            },
            name: 'tabs_2',
            mix: [
                {
                    block: 'tab-switcher',
                    js: {
                        name: 'tabs_2'
                    },
                    mods: {
                        type: 'radio'
                    }
                }
            ],
            content: [
                {
                    elem: 'radio',
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item'
                        }
                    ],
                    content: 'tab 1'
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
                }
            ]
        },

        {
            block: 'tab-switcher',
            js: {
                name: 'tabs_2'
            },
            content: [
                {
                    elem: 'tab',
                    content: 'tab_2 one'
                },

                {
                    elem: 'tab',
                    content: 'tab_2 two'
                }
            ]
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_40-tab-switcher.js' }
    ]
})