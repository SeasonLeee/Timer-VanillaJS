(function () {
    let inputs; // array

    /// for later code refactoring...
    // let keyPressedEles = [], // dom element array
    //     keyPressedEleIndexs = []; // number array

    function getInputs() {
        return document.querySelectorAll('.input');
    }

    function addEvent() {
        inputs = getInputs()
        inputs.forEach((element, index) => {
            element.addEventListener('keypress', (event) => {
                onKeypress(element, index, event);
            });
        });
    }

    function onKeypress(element, index, event) {
        if (event.which == 13 || event.keyCode == 13) {
            // console.log('hi', index);
            if (event.which == 13 || event.keyCode == 13) {
                // console.log('enter key was hit');
                // element.checkValidity(); // using when need to get the validity of the input
                // console.log('eleme.checkValidity()', element.checkValidity());

                if (element.checkValidity()) {
                    // keyPressedEles.push(element);
                    // element.setAttribute('readonly', '');
                    controlModal(element, index);
                }
                element.reportValidity(); // a pop-up will based on the sesult of above
                // if (!element.checkValidity()) element.value = '';
            }

            return false;
        }
    }

    function controlModal(element, index) {
        let modal = document.querySelector('.modal');
        if (modal.classList.contains('modal-disappear')) {
            modal.classList.replace('modal-disappear', 'modal-show');
        } else {
            modal.classList.replace('modal-show', 'modal-disappear');
        }
        onCancel(element, index, calculateTime);
    }

    function onCancel(element, index, fn) {
        let cancelBtn = document.querySelector('.cancel');
        cancelBtn.addEventListener('click', () => {
            inputs.forEach(ele => ele.setAttribute('readonly', ''));
            controlModal();
            console.log('On Cancel');
            fn(element, index)
        });
    }

    function onConfirm() {

    }

    function calculateTime(element, index) {
        let base = 60; 
        console.log('calculateTime activated');
        // let inputedTime = element.value;
        switch (index) {
            case 0:
                inputs[1].value = base;
                inputs[2].value = base;
                inputs[1].value = parseInt(inputs[1].value) - 1;
                element.value = parseInt(element.value) - 1;
                setInterval(() => {
                    if (parseInt(inputs[2].value) > 0) {
                        inputs[2].value = parseInt(inputs[2].value) - 1;
                    } else {
                        if (parseInt(inputs[1].value) > 0) {
                            inputs[1].value = parseInt(inputs[1].value) - 1;
                            inputs[2].value = base;
                        } else {
                            if (parseInt(element.value) > 0) {
                                element.value = parseInt(element.value) - 1;
                                inputs[1].value = base;
                                inputs[2].value = base;
                            } else {
                                element.value = '';
                                inputs[1].value = '';
                                inputs[2].value = '';
                            }
                        }
                    }
                }, 1000);
                break;
            case 1:
                inputs[2].value = base;
                element.value = parseInt(element.value) - 1;
                setInterval(() => {
                    if (parseInt(inputs[2].value) > 0) {
                        inputs[2].value = parseInt(inputs[2].value) - 1;
                    } else {
                        if (parseInt(element.value) > 0) {
                            element.value = parseInt(element.value) - 1;
                            inputs[2].value = base;
                        } else {
                            element.value = '';
                            inputs[2].value = '';
                        }
                        // return;
                    }
                }, 1000);
                break;
            case 2:
                setInterval(() => {                    
                    if (parseInt(element.value) > 0) {
                        element.value = parseInt(element.value) - 1;
                    } else {
                        element.value = '';
                    }
                }, 1000);
                break;
            default:
                break;
        }
    }

    /// Test code
    // let testBtn = document.querySelector('#for-test');
    // testBtn.addEventListener('click', () => {
    //     let lastInput = document.querySelectorAll('.input')[2];
    //     lastInput.setAttribute('readonly', '');
    //     setInterval(() => {
    //         if (lastInput.value != base) {
    //             lastInput.value = parseInt(lastInput.value) + 1;
    //         } else {
    //             return;
    //         }
    //     }, 1000);
    // });

    addEvent();
    // onCancel();
})();

/// 1. issue#1 why try to set to dom element's value not working
// when set the value of dom element
// set it directly with the property name,
// NOT the reference of the property name
// which should work since that's reference
// once the reference's changed,
// the original is changed too.
// 
// ...needs further investigation

/// 2. value retrived from input.value is STRING
// for god's sake, I long for a strong-type programming language

///