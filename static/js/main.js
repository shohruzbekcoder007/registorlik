const qapsFunc = (tuman) => {
  let mahallalar = qaps.find((o) => o.soato === tuman);
  if (mahallalar) {
    return mahallalar.mahallalar || [];
  } else {
    return [];
  }
};

const mfysFunc = (mfy) => {
  let mfyss = mfys.find((o) => o.soato === mfy);
  if (mfyss) {
    return mfyss.mahallalar || [];
  } else {
    return [];
  }
};

const provinceFunc = () => {
  province = $("#province");
  tumanlar.forEach((elem) => {
    $("#province").attr("data-soato") == elem.soato
      ? province.append(
          `<option value="${elem.soato}" selected>${elem.nomi}</option>`
        )
      : province.append(`<option value="${elem.soato}">${elem.nomi}</option>`);
  });
};

const districtFunc = () => {
  district = $("#district");
  let tuman = tumanlar.find(
    (o) => o.soato === $("#province").attr("data-soato")
  );
  tuman.tumanlar.forEach((elem) => {
    $("#district").attr("data-soato") == elem.soato
      ? district.append(
          `<option value="${elem.soato}" selected>${elem.nomi}</option>`
        )
      : district.append(`<option value="${elem.soato}">${elem.nomi}</option>`);
  });
};

const punctFunc = (punk = $("#district").attr("data-soato")) => {
  let punkts = qapsFunc(punk);
  $("#punkt").html(`<select name="punkt" id="punkt"></select>`);
  punkt = $("#punkt");
  punkts.forEach((elem) => {
    punkt.append(`<option value="${elem.soato}">${elem.nomi}</option>`);
  });
};

const mahallalarFunc = (mfy = document.getElementById("punkt").value) => {
  let kuchalar = mfysFunc(mfy);
  $("#mfy").html(`<select name="punkt" id="mfy"></select>`);
  kucha = $("#mfy");
  kuchalar.forEach((elem) => {
    kucha.append(`<option value="${elem.soato}">${elem.nomi}</option>`);
  });
};

const addRowFunction = () => {
  let tb = document.getElementById("tablereportbody");
  let lastChild = tb.children[tb.children.length - 1];
  let newtrnumber = +lastChild.getAttribute("data-row");
  let newtr = `<tr data-row="${newtrnumber + 1}">
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="colA-1" type="number" data-name="colA-${
                          newtrnumber + 1
                        }" value="${newtrnumber + 2}" disabled="">
                        </div>
                      </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input type="text" class="repeatstreet" value="${document.querySelector("#street").value}" disabled="">
                        </div>
                      </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col1-1" type="text" data-name="col1-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col2-1" type="number" data-name="col2-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td> 
                    <div class="ui form">
                      <div class="field">
                        <input id="col3-1" type="number" data-name="col3-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col4-1" type="number" data-name="col4-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col5-1" type="number" data-name="col5-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col6-1" type="number" data-name="col6-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col7-1" type="number" data-name="col7-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col8-1" type="number" data-name="col8-${
                          newtrnumber + 1
                        }">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="ui form">
                      <div class="field">
                        <input id="col9-1" type="text" data-name="col9-${
                          newtrnumber + 1
                        }" onkeypress="addRowFunction1(event)">
                      </div>
                    </div>
                  </td>
                </tr>`;
  $("#tablereportbody").append(newtr);
};

function addRowFunction1(event) {
  if (event.which == 13) {
    addRowFunction();
  }
}

$(document).ready(async function () {
  provinceFunc();
  districtFunc();

  punctFunc();
  mahallalarFunc();

  $("#province").on("change", function () {
    $("#district").html(
      `<select name="district" data-soato=${$("#district").attr(
        "data-soato"
      )}></select>`
    );
    let tuman = tumanlar.find((o) => o.soato === this.value);
    tuman.tumanlar.forEach((elem) => {
      $("#district").attr("data-soato") == elem.soato
        ? district.append(
            `<option value="${elem.soato}" selected>${elem.nomi}</option>`
          )
        : district.append(
            `<option value="${elem.soato}">${elem.nomi}</option>`
          );
    });
    punctFunc(tuman.tumanlar[0].soato);
  });

  $("#district").on("change", function () {
    punctFunc(this.value);
  });

  $("#punkt").on("change", function () {
    mahallalarFunc(this.value);
  });

  $("#punkt").on("change", function () {
    mahallalarFunc(this.value);
  });

  $("#addRow").on("click", (event) => {
    addRowFunction();
  });

  document.querySelector('#street').addEventListener('change', (event) => {
    let repeatstreets = document.querySelectorAll('.repeatstreet')
    repeatstreets.forEach(elem => {
      elem.value = event.target.value
    })
  })

  $("#saveForm").on("click", async (event) => {
    if (
      document.querySelector("#mfy").value == "" ||
      document.querySelector("#street").value == "" ||
      document.querySelector("#regnumber").value == ""
    ) {
      alert("Ko'cha va Registorlik uchastkasi raqami ni kiritishingiz kerak!!!")
    } else {
      let tb = document.getElementById("tablereportbody");
      let lastChild = tb.children[tb.children.length - 1];
      let newtrnumber = +lastChild.getAttribute("data-row");

      let provinceSoato = document.getElementById("province").value
      let districtSoato = document.getElementById("district").value
      let punktSoato = document.getElementById("punkt").value
      let mfySoato = document.getElementById("mfy").value
      let provinceName = tumanlar.find((o) => o.soato === provinceSoato).nomi
      let districtName = tumanlar.find((o) => o.soato === provinceSoato).tumanlar 
                            .find((o) => o.soato === districtSoato).nomi
      let punktName = qaps.find((o) => o.soato === districtSoato).mahallalar
                            .find((o) => o.soato === punktSoato).nomi
      let mfyName = mfys.find((o) => o.soato === punktSoato).mahallalar
                            .find((o) => o.soato === mfySoato).nomi

      let nomi = `${provinceName}, ${districtName}, ${punktName}, ${mfyName}`

      let request = [];
      for (let i = 0; i <= newtrnumber; i++) {
        let soato = document.querySelector("#mfy").value;
        let street = document.querySelector("#street").value;
        let regnubmer = document.querySelector("#regnumber").value;
        let colA = document.querySelector(`[data-name="colA-${i}"]`).value;
        let col1 = document.querySelector(`[data-name="col1-${i}"]`).value;
        let col2 = document.querySelector(`[data-name="col2-${i}"]`).value;
        let col3 = document.querySelector(`[data-name="col3-${i}"]`).value;
        let col4 = document.querySelector(`[data-name="col4-${i}"]`).value;
        let col5 = document.querySelector(`[data-name="col5-${i}"]`).value;
        let col6 = document.querySelector(`[data-name="col6-${i}"]`).value;
        let col7 = document.querySelector(`[data-name="col7-${i}"]`).value;
        let col8 = document.querySelector(`[data-name="col8-${i}"]`).value;
        let col9 = document.querySelector(`[data-name="col9-${i}"]`).value;
        request.push({
          soato,
          street,
          regnubmer,
          col0: provinceName,
          col00: districtName,
          col000: punktName,
          col0000: mfyName,
          colA,
          col1: nomi+", "+street,
          col2: col1,
          col3: col2,
          col4: col3,
          col5: col4,
          col6: col5,
          col7: col6,
          col8: col7,
          col9: col8,
          col10: col9,
        });
      }
      let response = await axios({
        method: "post",
        url: "/report/addreportmany",
        data: request,
      });
      if(response.data){
        let inputs = document.querySelectorAll('input')
        inputs.forEach(elem => {
          elem.disabled = true
        })
        document.querySelector("#addRow").disabled = true;
        document.querySelector("#saveForm").disabled = true;
        $('.btns').append(`<a href="/refresh" class="ui primary button">Янги</a>`)
      }
    }
  });
});
