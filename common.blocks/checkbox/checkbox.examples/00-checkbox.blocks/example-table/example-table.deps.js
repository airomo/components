({
    shouldDeps: [
        {
            block: 'radio-button',
            mods: {
                color: ['transparent'],
                size: ['s']
            },
            elems: [
                {elem: 'radio', mods: {side: ['left', 'right']}}
            ]
        },
        {
            block: 'button',
            mods: {
                focused: ['yes'],
                hovered: ['yes'],
                pressed: ['yes'],
                disabled: ['yes'],
                size: ['s', 'm', 'l', 'xl', 'xxl'],
                color: ['blue', 'light-grey', 'grey', 'green', 'transparent', 'red'],
                'only-icon': ['yes'],
                side: ['left', 'right']
            },
            elems: [
                {
                    elem: 'icon',
                    mods: {
                        size: ['s', 'm', 'l', 'xl', 'xxl']
                    }
                },
                {
                    elem: 'counter'
                }
            ]
        },
        {
            block: 'icon',
            mods: {
                type: ['apps-info', 'arrow-up', 'dashboard', 'description', 'dislike', 'info', 'like', 'monkey', 'refresh', 'timeline', 'thin-arrow-left', 'thin-arrow-right'],
                size: ['s', 'm', 'l', 'xl', 'xxl']
            }
        }
    ]
})