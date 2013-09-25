({
    block: 'b-page',
    title: 'checkbox',
    head: [
        { elem: 'css', url: '_00-checkbox.css', ie: false },
        { elem: 'css', url: '_00-checkbox', ie: true }
    ],
    content: [
        'black size l, disabled no',
        {
            block: 'checkbox',
            mods: { theme: 'black-l', size: 'l' },
            content: {
                elem: 'label',
                content: 'black-l'
            }
        },
        '<br/>black size m, disabled no',
        {
            block: 'checkbox',
            mods: { theme: 'black-m', size: 'm' },
            content: {
                elem: 'label',
                content: 'black-m'
            }
        },
        '<br/>black size l, disabled yes',
        {
            block: 'checkbox',
            mods: { theme: 'black-l', size: 'l', disabled: 'yes' },
            content: {
                elem: 'label',
                content: 'disabled black-l'
            }
        },
        '<br/>black size m, disabled yes',
        {
            block: 'checkbox',
            mods: { theme: 'black-m', size: 'm', disabled: 'yes' },
            content: {
                elem: 'label',
                content: 'disabled black-m'
            }
        },
        '<br/>grey size l, disabled no',
        {
            block: 'checkbox',
            mods: { theme: 'grey-l' },
            content: {
                elem: 'label',
                content: 'grey-l'
            }
        },
        '<br/>grey size m, disabled no',
        {
            block: 'checkbox',
            mods: { theme: 'grey-m' },
            content: {
                elem: 'label',
                content: 'grey-m'
            }
        },
        '<br/>grey size l, disabled yes',
        {
            block: 'checkbox',
            mods: { theme: 'grey-l', disabled: 'yes' },
            content: {
                elem: 'label',
                content: 'disabled grey-l'
            }
        },
        '<br/>grey size m, disabled yes',
        {
            block: 'checkbox',
            mods: { theme: 'grey-m', disabled: 'yes' },
            content: {
                elem: 'label',
                content: 'disabled grey-m'
            }
        },
        { block: 'i-jquery',
            mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-checkbox.js' }
    ]
})