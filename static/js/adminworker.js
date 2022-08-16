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
    district.append(`<option value=""></option>`)
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
    punkt.append(`<option value=""></option>`);
    punkts.forEach((elem) => {
      punkt.append(`<option value="${elem.soato}">${elem.nomi}</option>`);
    });
  };
  
  const mahallalarFunc = (mfy = document.getElementById("punkt").value) => {
    let kuchalar = mfysFunc(mfy);
    $("#mfy").html(`<select name="punkt" id="mfy"></select>`);
    kucha = $("#mfy");
    kucha.append(`<option value=""></option>`)
    kuchalar.forEach((elem) => {
      kucha.append(`<option value="${elem.soato}">${elem.nomi}</option>`);
    });
  };
  
  
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
      district.append(`<option value=""></option>`)
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
    
  });
  