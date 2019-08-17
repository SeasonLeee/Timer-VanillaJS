(function() {
    function getInputs() {
        return document.querySelectorAll('.input');
    }

    function dealWithInput() {
        let inputArr = getInputs();
        console.log(inputArr);
    }

    dealWithInput();
})();