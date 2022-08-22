$(document).ready(function () {

    const logic_2 = (par) => {
        let get = document.querySelectorAll('[data-index="g1"]')
        get.forEach(elem => {
            let tempVal1 = 0, tempVal2 = 0;
            tempVal1 = parseFloat(elem.parentElement.parentElement.parentElement.parentElement.children[5].children[0].children[0].children[0].value) || 0;
            tempVal2 = parseFloat(elem.parentElement.parentElement.parentElement.parentElement.children[par].children[0].children[0].children[0].value) || 0;
            if (tempVal1 < tempVal2) {
                elem.parentElement.parentElement.parentElement.parentElement.children[par].querySelector('span').innerHTML = `5-устун (${tempVal1}) < ${par}-устун (${tempVal2})`;
            } else {
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
        if (event.target.getAttribute("type") == "number") {
            if (event.target.value < 0) {
                event.target.value = null;
            }

            if (event.target.value != 0) {
                event.target.value = parseInt(event.target.value);
            }
        }

        logic_2(6);
        savefunction();
    });

    $(document).on('keyup', 'input', (event) => {
        if (event.target.getAttribute("type") == "number") {
            if([16, 107, 109, 187, 189].some(e => e == event.keyCode)) {
                event.target.value = null;
            }
        }
    })
})

$(document).ready(() => {
    if($("#district").attr("data-soato") != "undefined"){
        $("#district").prop("disabled", true);
    }
    
    if($("#province").attr("data-soato") != "undefined"){
        $("#province").prop("disabled", true);
    }
})

// enter key like to tab

// $(document).on('keydown', 'input, select', function (e) {
//     if (e.key === "Enter") {
//         let inputKeys = e.target?.dataset?.name, col = Number(inputKeys.split('-')[0].slice(3, 4)), index = Number(inputKeys.split('-')[1]);
//         let input = document.querySelector(`[data-name="col${col == 9 ? 1 : col + 1}-${col == 9 ? index + 1 : index}"]`)
//         input.focus();
//     }
// });

