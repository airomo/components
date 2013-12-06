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
                name: 'example'
            },
            content: [
                {
                    elem: 'item',
                    content: 'item 1'
                },
                {
                    elem: 'item',
                    content: 'item 2'
                },
                {
                    elem: 'item',
                    content: 'item 3'
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
                    content: 'one'
                },

                {
                    elem: 'tab',
                    content: 'two'
                },

                {
                    elem: 'tab',
                    content: [
                        'three',
                        {
                            block: 'tab-switcher',
                            js: {
                                name: 'example2'
                            },
                            content: [
                                {
                                    elem: 'item',
                                    content: 'item 1'
                                },
                                {
                                    elem: 'item',
                                    content: 'item 2'
                                },
                                {
                                    elem: 'item',
                                    content: 'item 3'
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
                                name: 'example2'
                            },
                            content: [
                                {
                                    elem: 'tab',
                                    content: 'one'
                                },

                                {
                                    elem: 'tab',
                                    content: 'two'
                                },

                                {
                                    elem: 'tab',
                                    content: 'three'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-tab-switcher.js' }
    ]
})