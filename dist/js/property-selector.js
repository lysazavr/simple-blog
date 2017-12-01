const Dispatcher = document.getElementById('doc');

export default class PropertySelector {
    constructor(el) {
        this.el = el;

        this.el.addEventListener('click', ev => {
            if(ev.target.classList.contains('option-content__item')) {
                const type = ev.target.dataset['type'];
                const value = ev.target.dataset['value'];
                const src = ev.target.dataset['src'];

                // remove active class from selected option item
                const optionContent = ev.target.closest('.option-content');
                const selectOptionItems = optionContent.getElementsByClassName('option-content__item_active');
                for (let i = 0; i < selectOptionItems.length; i++) {
                    selectOptionItems[i].classList.remove('option-content__item_active');
                }
                // add active class
                ev.target.classList.add('option-content__item_active');

                this.dispatchEvent(type, value, src);
            }
        });
    }

    dispatchEvent(type,value, src) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value,
                src: src
            }
        });
        // Pub/Sub
        Dispatcher.dispatchEvent(event);
    }
}
