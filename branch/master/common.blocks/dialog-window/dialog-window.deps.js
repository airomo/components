({
    shouldDeps: [
        {
            elems: ['inner', 'body', 'close', 'icon', 'title', 'content', 'controls', 'paranja'],
            mods: {
                visibility: 'hidden'
            }
        },

        {
            block: 'button',
            mods: {
                focused: ['yes'],
                hovered: ['yes'],
                pressed: ['yes'],
                disabled: ['yes'],
                color: ['green', 'red'],
                size: ['m']
            },
            elems: [
                'text'
            ]
        }
    ]
})