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
let tartib = 1;
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
  
  document.querySelector('#addreport').addEventListener("click", async event => {
    let soato = document.querySelector('#mfy').value
    let street = document.querySelector('#street').value
    let regnubmer = document.querySelector('#regnumber').value
    let colA = document.querySelector('#colA').value
    let col1 = document.querySelector('#col1').value
    let col2 = document.querySelector('#col2').value
    let col3 = document.querySelector('#col3').value
    let col4 = document.querySelector('#col4').value
    let col5 = document.querySelector('#col5').value
    let col6 = document.querySelector('#col6').value
    let col7 = document.querySelector('#col7').value
    let col8 = document.querySelector('#col8').value
    let col9 = document.querySelector('#col9').value
    console.log(soato, street, regnubmer, colA, col1, col2, col3, col4, col5, col6, col7, col8, col9)
    let response = await axios({
      method: 'post',
      url: '/report/addreport',
      data: {
        soato, 
        street, 
        regnubmer, 
        colA, 
        col1, 
        col2, 
        col3, 
        col4, 
        col5, 
        col6, 
        col7, 
        col8, 
        col9
      }
    })
    if(response.data && response.data._id){
      $('#tablereportbody').append(
        `<tr>
          <td>${response.data.colA}</td>
          <td>${response.data.col1}</td>
          <td>${response.data.col2}</td>
          <td>${response.data.col3}</td>
          <td>${response.data.col4}</td>
          <td>${response.data.col5}</td>
          <td>${response.data.col6}</td>
          <td>${response.data.col7}</td>
          <td>${response.data.col8}</td>
          <td>${response.data.col9}</td>
          <td></td>
        </tr>`
      )
    }else{
      alert("Xatolik yuzaga keldi")
    }
  })

});