// // Your code here...
//
// var formProduct = document.getElementById('form-product');
// const activeOptionClass = 'option_active';
//
// formProduct.addEventListener('click', function (event) {
//     var target = event.target;
//     while (target != this) {
//         if (target.className == 'option-content__item') {
//             var targetBlock = findOptionBlock(target);
//             var selectOptions = targetBlock.getElementsByClassName(activeOptionClass);
//             for (var i = 0; i < selectOptions.length; i++) {
//                 selectOptions[i].classList.remove(activeOptionClass);
//             }
//
//             selectOption(target);
//             return;
//         }
//         target = target.parentNode;
//     }
// });
// function selectOption(node) {
//     var data = node.dataset;
//     var option = node.getElementsByClassName('option')[0];
//     option.classList.add(activeOptionClass);
//     // change image src
//     if (data.src) {
//         var imgElement = document.getElementsByClassName('product-box__product-img')[0];
//         imgElement.src = data.src;
//     }
//     // change input value
//     var targetBlock = findOptionBlock(node);
//     var input = targetBlock.getElementsByClassName('product-option-input')[0];
//     input.value = data.value;
//
// }
// function findOptionBlock(option) {
//     var optionBlock = option.parentNode ;
//     while (optionBlock != formProduct) {
//         if (optionBlock.classList.contains('product-option__content')) {
//             return optionBlock;
//         }
//         optionBlock = optionBlock.parentNode;
//     }
// }

import PropertySelector from './property-selector.js';

const Dispatcher = document.getElementById('doc');

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        changePicture(data.src);
        changeHiddenOption(data.type,data.value);
    }

    if (data.type === 'size') {
        changeHiddenOption(data.type,data.value);
    }
});


function changePicture(src) {
    document.getElementById('productPicture').src = src;
}
function changeHiddenOption(type, value){
    const options = document.getElementsByClassName('product-option-input');
    for(let i = 0; i < options.length; i++) {
        if(options[i].name == type) {
            options[i].value = value;
            break;
        }
    }
}
