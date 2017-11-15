// Create an immediately invoked functional expression to wrap our code IIFE
(function () {

    // Define our constructor
    this.Modal = function () {
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;

        var defaults = {
            className: '',
            closeButton: true,
            content: '',
            maxWidth: 600,
            minWidth: 280,
            overlay: true
        };

        if (arguments[0] && typeof arguments[0] === 'object') {
            this.options = extendDefaults(defaults, arguments[0]);
        }
    };

    // Public Methods

    Modal.prototype.open = function () {


    };

    // Private Methods

    function buildOut() {
        var content, contentHolder, docFrag;

        /**
         * If content is an HTML string, append the HTML string.
         * If content is a domNode, append its content.
         */

        if (typeof this.options.content === 'string') {
            content = this.options.content;
        }
        else {
            content = this.options.content.innerHTML;
        }

        // Create a DocumentFragment to build with
        docFrag = document.createDocumentFragment();

        // Create modal element
        this.modal = document.createElement('div');
        this.modal.className = 'scotch-modal ' + this.options.className;
        this.modal.style.minWidth = this.options.minWidth + 'px';
        this.modal.style.maxWidth = this.options.maxWidth + 'px';

        // If closeButton option is true, add a close button
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement('button');
            this.closeButton.className = "scotch-close close-button";
            this.closeButton.innerHTML = 'x';
            this.modal.appendChild(this.closeButton);
        }

        // If overlay is true, add one
        if (this.options.overlay === true) {
            this.overlay = document.createElement('div');
            this.overlay.className = 'scotch-overlay ' + this.options.classname;
            docFrag.appendChild(this.overlay);
        }

        // Create content area and append to modal
        contentHolder = document.createElement('div');
        contentHolder.className = 'scotch-content';
        contentHolder.innerHTML = content;
        this.modal.appendChild(contentHolder);

        // Append modal to DocumentFragment
        docFrag.appendChild(this.modal);

        // Append DocumentFragment to body
        document.body.appendChild(docFrag);
    }

    function initializeEvents() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }
    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        for (var property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

}());