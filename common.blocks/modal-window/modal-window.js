BEM.DOM.decl('modal-window', {
    onSetMod: {
        'js': {
            'inited': function() {
                var _this = this,
                    paranja = this.elem('paranja');
                    this.__self.modalWindow = this;


                this.bindTo(paranja, 'click', function(e) {

                    ('paranja' == e.target) && BEM.blocks['modal-window'].close();
                });

            }
        }
    }
},
{
    _modalWindowStack: [],
/*
    *Shows modal window with params
    *@param content: {String|BEMHTML} modal window title
    *@param type: {String} error|succes|submit|info type of modal window
    *@param buttons: [String] [submit|cancel|close] buttons, which displayed in modal window
    *@param onSubmit {Function} submit action callback
    *@param onClose {Function} close action callback
    *@param onCancel {Function} cancel action callback
*/

    show: function(title, content, type, buttons, onSubmit, onClose, onCancel) {
        var _this = this,
            modalWindow = this.modalWindow;

        if (modalWindow.hasMod('visibility', 'visible')) {
            var showParams = {
                title: title,
                content: content,
                type: type,
                buttons: buttons,
                onSubmit: onSubmit,
                onClose: onClose,
                onCancel: onCancel
            }
            this._modalWindowStack.push(showParams);
            return;
        }

        buttons.length && buttons.forEach(function(button) {
            var buttonElem = modalWindow.elem('button', 'type', button);
            modalWindow.bindTo(buttonElem, 'click',  function() {
                _this.close();
                (button == 'close') && onClose && onClose();
                (button == 'submit') && onSubmit && onSubmit();
                (button == 'cancel') && onCancel && onCancel();
            });
            modalWindow.setMod(buttonElem, 'visibility', 'visible');
        });

        modalWindow.findBlockOutside('b-page').setMod('type', 'locked');
        modalWindow.setMod(modalWindow.elem('paranja'), 'visibility', 'visible');

        type ? modalWindow.setMod(modalWindow.elem('top-bar'), 'type', type) : modalWindow.delMod(modalWindow.elem('top-bar'), 'type');
        type ? modalWindow.setMod(modalWindow.elem('icon'), 'type', type) : modalWindow.delMod(modalWindow.elem('icon'), 'type');

        content = typeof content == 'object' ? BEMHTML.apply(content) : content;
        content && modalWindow.elem('content').html(content);
        title && modalWindow.elem('title').html(title);

        modalWindow.setMod('visibility', 'visible');
    },
/*
    *Close modal window
*/
    close: function() {
        var modalWindow = this.modalWindow;

        if (modalWindow.hasMod('visibility', 'hidden')) return;

        modalWindow.setMod('visibility', 'hidden');
        modalWindow.elem('content').html('');
        modalWindow.elem('title').html('');
        modalWindow.findBlockOutside('b-page').delMod('type');
        modalWindow.delMod(modalWindow.elem('paranja'), 'visibility', 'visible');

        var buttons = ['close', 'submit', 'cancel'];

        buttons.forEach(function(button) {
            var buttonElem = modalWindow.elem('button', 'type', button);
            modalWindow.unbindFrom(buttonElem, 'click');
        });

        modalWindow.setMod(modalWindow.elem('button'), 'visibility', 'hidden');

        if (this._modalWindowStack.length) {
            showParams = this._modalWindowStack.pop();
            this.show(
                showParams.content,
                showParams.type,
                showParams.buttons,
                showParams.onSubmit,
                showParams.onClose,
                showParams.onCancel
            );
        }
    }
});