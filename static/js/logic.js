$(document).ready(function () {
    const logic_1 = () => {
        let get = document.querySelectorAll('[data-index="g1"]')

        try {
            let tempVal = 0;
            get.forEach(elem => {
                if (elem.value == 1) {
                    tempVal = parseFloat(elem.parentElement.parentElement.parentElement.parentElement.children[5].children[0].children[0].children[0].value) || 0;
                    if (tempVal < 1000) {
                        throw {
                            message: `1-str 5-gr Йирик шоҳли қорамоллар (бош) kam ${tempVal} < 1000`
                        }
                    }
                }
            })

            return ``
        } catch (e) {
            return e.message
        }

    };

    const logic_2 = (par) => {
        let get = document.querySelectorAll('[data-index="g1"]')
        get.forEach(elem => {
            let tempVal1 = 0, tempVal2 = 0;
            tempVal1 = parseFloat(elem.parentElement.parentElement.parentElement.parentElement.children[5].children[0].children[0].children[0].value) || 0;
            tempVal2 = parseFloat(elem.parentElement.parentElement.parentElement.parentElement.children[par].children[0].children[0].children[0].value) || 0;
            if (tempVal1 < tempVal2) {
                elem.parentElement.parentElement.parentElement.parentElement.children[par].querySelector('span').innerHTML = `5-устун (${tempVal1}) < ${par}-устун (${tempVal2})`;
            } else{
                elem.parentElement.parentElement.parentElement.parentElement.children[par].querySelector('span').innerHTML = ``;
            }
        })
    };
    
    function savefunction() {
        let spans = document.querySelectorAll(".span-error");
        let form_save_element = document.querySelector("#saveForm");

        let sum = 0;
        spans.forEach(elem => {
            sum += parseFloat(elem.innerHTML.length);
        })

        
        if (sum > 0) {
            form_save_element.disabled = true;
        } else {
            if (document.querySelector("#saveForm")) {
                if (document.querySelector("#saveForm").children.length == 0) {
                    form_save_element.disabled = false;
                }
            }
        }
        
        $(document).on('focus', 'input[type=number]', function (e) {
            $(this).on('wheel.disableScroll', function (e) {
                e.preventDefault()
            })
        })
    
        $(document).on('blur', 'input[type=number]', function (e) {
            $(this).off('wheel.disableScroll')
        })
    }
    
    $(document).on("focusout", "input", (event) => {
        logic_2(6);
        logic_2(7);
        logic_2(8);
        savefunction();
    });
})

