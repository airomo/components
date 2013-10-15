({
    shouldDeps: [
        {
            block: 'input',
            mods: {
                focused: ['yes'],
                hovered: ['yes'],
                disabled: ['yes'],
                'message-error': 'yes',
                color: 'light-grey',
                size: ['l']
            },
            elems: [
                'box', 'radio', 'control', 'clear', 'hint', {
                    elem: 'message',
                    mods: {
                        type: 'error',
                        visibility: 'visible'
                    }
                }
            ]
        }
    ]
})