(function () {
    let inputs; // array

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
                // element.checkValidity(); /// using when need to get the validity of the input
                // console.log('eleme.checkValidity()', element.checkValidity());

                if (element.checkValidity()) {
                    // keyPressedEles.push(element);
                    // element.setAttribute('readonly', '');
                    showModal(element, index);
                }
                element.reportValidity(); /// a pop-up will based on the sesult of above
                // if (!element.checkValidity()) element.value = '';
            }

            return false;
        }
    }

    function showModal(element, index) {
        controlModal();
        onCancel(element, index, calculateTime);
        onConfirm();
    }

    function onCancel(element, index, fn) {
        let cancelBtn = document.querySelector('.cancel');
        cancelBtn.addEventListener('click', function eventOption() {
            inputs.forEach(ele => ele.setAttribute('readonly', ''));
            controlModal(cancelBtn, eventOption);
            fn(element, index)
        });
    }

    function onConfirm() {
        let confirmBtn = document.querySelector('.confirm');
        confirmBtn.addEventListener('click', function eventOption() {
            controlModal(confirmBtn, eventOption);
        })
    }

    function controlModal(element, func) {
        let modal = document.querySelector('.modal');

        if (modal.classList.contains('modal-disappear')) {
            modal.classList.replace('modal-disappear', 'modal-show');
        } else {
            if (element) {
                element.removeEventListener('click', func)
            }
            modal.classList.replace('modal-show', 'modal-disappear');
        }      
    }

    function calculateTime(element, index) {
        let base = 3; 
        let timeout;
        console.log('calculateTime activated');
        // let inputedTime = element.value;
        switch (index) {
            case 0:
                inputs[1].value = base;
                inputs[2].value = base;
                inputs[1].value = parseInt(inputs[1].value) - 1;
                element.value = parseInt(element.value) - 1;

                function recursiveTimeout0() {
                    if (!element.value && !inputs[1].value && inputs[2].value) {
                        clearTimeout(timeout);
                    } else {
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
                        timeout = setTimeout(recursiveTimeout0, 1000);                        
                    }
                }
                recursiveTimeout0();
                break;
            case 1:
                inputs[2].value = base;
                element.value = parseInt(element.value) - 1;

                function recursiveTimeout1() {
                    if (!element.value && !inputs[2].value) {
                        clearTimeout(timeout);
                    } else {
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
                        }
                        timeout = setTimeout(recursiveTimeout1, 1000);                        
                    }
                }
                recursiveTimeout1();      
                break;
            case 2:
                function recursiveTimeout2() {
                    if (!element.value) {
                        clearTimeout(timeout);
                    } else {
                        if (parseInt(element.value) > 0) {
                            element.value = parseInt(element.value) - 1;
                        } else {
                            element.value = '';
                        }
                        timeout = setTimeout(recursiveTimeout2, 1000);
                    }
                }
                recursiveTimeout2();
                break;
            default:
                break;
        }
        onResetBtn();
    }

    function onResetBtn() {
        let resetBtn = document.querySelector('.reset');
        resetBtn.classList.toggle('inactive');
        resetBtn.addEventListener('click', () => {
            inputs.forEach(ele => ele.removeAttribute('readonly'));
        });
    }

    addEvent();
})();