({
    block: 'b-page',
    title: 'modal window',
    head: [
        { elem: 'css', url: '_10-modal-window.css', ie: false },
        { elem: 'css', url: '_10-modal-window', ie: true }
    ],
    content: [
        {
            block: 'button',
            mods: { show: 'warning', size: 's', color: 'transparent' },
            content: 'Show modal window type warning'
        },
        {
            block: 'button',
            mods: { show: 'info', size: 's', color: 'transparent' },
            content: 'Show modal window type info'
        },
        {
            block: 'button',
            mods: { show: 'error', size: 's', color: 'transparent' },
            content: 'Show modal window type error'
        },
        {
            block: 'button',
            mods: { show: 'success', size: 's', color: 'transparent' },
            content: 'Show modal window type success'
        },
        {
            block: 'modal-window',
            mods: { visibility: 'hidden' },
            content: [
                {
                    elem: 'paranja'
                },
                {
                    elem: 'inner',
                    content: [
                        {
                            elem: 'top-bar',
                            content: [
                                {
                                    elem: 'icon'
                                },
                                {
                                    elem: 'title',
                                    content: 'Warning !'
                                },
                                {
                                    elem: 'button',
                                    elemMods: { type: 'close', visibility: 'hidden' },
                                    content: '&#10006;'
                                }
                            ]
                        },
                        {
                            elem: 'content',
                            content: 'bla bla bla'
                        },
                        {
                            elem: 'button',
                            elemMods: { type: 'submit', visibility: 'hidden' },
                            mix: { block: 'button', mods: { size: 's', color: 'transparent' } },
                            content: 'submit'
                        },
                        {
                            elem: 'button',
                            elemMods: { type: 'cancel', visibility: 'hidden'},
                            mix: { block: 'button', mods: { size: 's', color: 'transparent' } },
                            content: 'cancel'
                        }
                    ]
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-modal-window.js' }
    ]
})