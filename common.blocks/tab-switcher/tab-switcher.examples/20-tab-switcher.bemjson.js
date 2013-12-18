({
    block: 'b-page',
    title: 'Tab-switcher with prev/next buttons based on radio-button',
    head: [
        { elem: 'css', url: '_20-tab-switcher.css', ie: false },
        { elem: 'css', url: '_20-tab-switcher', ie: true }
    ],
    content: [
        {
            block: 'tab-switcher',
            js: {
                name: 'tabs_1'
            },
            mods: {
                role: 'navigation'
            },
            content: [
                {
                    block: 'button',
                    mods: {
                        color: 'transparent',
                        size: 'xl',
                        side: 'left'
                    },
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item',
                            elemMods: {
                                type: 'prev'
                            }
                        }
                    ],
                    content: 'prev'
                }
            ]
        },

        {
            block: 'radio-button',
            mods: {
                color: 'transparent',
                size: 'xl',
                side: 'both'
            },
            name: 'tabs_1',
            value: '0',
            mix: [
                {
                    block: 'tab-switcher',
                    js: {
                        name: 'tabs_1'
                    },
                    mods: {
                        type: 'radio',
                        role: 'navigation'
                    }
                }
            ],
            content: [
                {
                    elem: 'radio',
                    controlAttrs: { value: '1' },
                    elemMods: {
                        disabled: 'yes',
                        side: 'both'
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
                    controlAttrs: { value: '2' },
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
                    controlAttrs: { value: '3' },
                    elemMods: {
                        side: 'both'
                    },
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
            mods: {
                role: 'navigation'
            },
            content: [
                {
                    block: 'button',
                    mods: {
                        color: 'transparent',
                        size: 'xl',
                        side: 'right'
                    },
                    mix: [
                        {
                            block: 'tab-switcher',
                            elem: 'item',
                            elemMods: {
                                type: 'next'
                            }
                        }
                    ],
                    content: 'next'
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

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_20-tab-switcher.js' }
    ]
})