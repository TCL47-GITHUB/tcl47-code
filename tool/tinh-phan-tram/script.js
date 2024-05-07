$(document).ready(function () {
  $(".number1").keyup(function () {
    val = ($(this).val() * $(".number2").val()) / 100;
    if (
      !isNaN(parseFloat($(".number2").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value").val(val);
    }
  });
  $(".number2").keyup(function () {
    val = ($(this).val() * $(".number1").val()) / 100;
    if (
      !isNaN(parseFloat($(".number1").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value").val(val);
    }
  });
  $(".number3").keyup(function () {
    val1 = ($(this).val() / $(".number4").val()) * 100;
    if (
      !isNaN(parseFloat($(".number4").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value1").val(val1);
    }
  });
  $(".number4").keyup(function () {
    val1 = ($(".number3").val() / $(this).val()) * 100;
    if (
      !isNaN(parseFloat($(".number3").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value1").val(val1);
    }
  });
  $(".number5").keyup(function () {
    val2 = ($(this).val() * 100) / $(".number6").val();
    if (
      !isNaN(parseFloat($(".number6").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value3").val(val2);
    }
  });
  $(".number6").keyup(function () {
    val2 = ($(".number5").val() * 100) / $(this).val();
    if (
      !isNaN(parseFloat($(".number5").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value3").val(val2);
    }
  });
  $(".choice").change(function () {
    if ($(this).val() == 1) {
      val4 =
        parseFloat($(".number8").val()) +
        ($(".number8").val() * $(".number7").val()) / 100;
      $(".number7").keyup(function () {
        val4 =
          parseFloat($(".number8").val()) +
          ($(".number8").val() * $(this).val()) / 100;
      });
      $(".number8").keyup(function () {
        val4 =
          parseFloat($(this).val()) +
          ($(this).val() * $(".number7").val()) / 100;
      });
      if (
        !isNaN(parseFloat($(".number7").val())) &&
        !isNaN(parseFloat($(".number8").val()))
      ) {
        $(".value4").val(val4);
      }
    } else {
      val4 =
        $(".number8").val() - ($(".number8").val() * $(".number7").val()) / 100;
      $(".number7").keyup(function () {
        val4 =
          $(".number8").val() - ($(".number8").val() * $(this).val()) / 100;
      });
      $(".number8").keyup(function () {
        val4 = $(this).val() - ($(this).val() * $(".number7").val()) / 100;
      });
      if (
        !isNaN(parseFloat($(".number7").val())) &&
        !isNaN(parseFloat($(".number8").val()))
      ) {
        $(".value4").val(val4);
      }
    }
  });
  $(".number7").keyup(function () {
    if ($(".choice").val() == 1) {
      val4 =
        parseFloat($(".number8").val()) +
        ($(".number8").val() * $(this).val()) / 100;
    } else {
      val4 = $(".number8").val() - ($(".number8").val() * $(this).val()) / 100;
    }
    if (
      !isNaN(parseFloat($(".number8").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value4").val(val4);
    }
  });
  $(".number8").keyup(function () {
    if ($(".choice").val() == 1) {
      val4 =
        parseFloat($(this).val()) + ($(this).val() * $(".number7").val()) / 100;
    } else {
      val4 = $(this).val() - ($(this).val() * $(".number7").val()) / 100;
    }
    if (
      !isNaN(parseFloat($(".number7").val())) &&
      !isNaN(parseFloat($(this).val()))
    ) {
      $(".value4").val(val4);
    }
  });
  $(".number9").keyup(function () {
    var val9 = parseFloat($(this).val());
    var val10 = parseFloat($(".number10").val());

    if (!isNaN(val9) && !isNaN(val10)) {
      var val5 = Math.abs(((val9 - val10) / ((val9 + val10) / 2)) * 100);
      var percent =
        (($(".number10").val() - $(this).val()) / $(this).val()) * 100;
      $(".value5").val(val5);
      $(".result").slideDown();
      $(".valnum10").text(parseFloat($(".number10").val()));
      $(".valnum9").text(parseFloat($(this).val()));
      $(".result-val").text(val5);
      $(".result-precent").text(percent + "%");
    }
  });

  $(".number10").keyup(function () {
    var val9 = parseFloat($(".number9").val());
    var val10 = parseFloat($(this).val());

    if (!isNaN(val9) && !isNaN(val10)) {
      var val5 = Math.abs(((val9 - val10) / ((val9 + val10) / 2)) * 100);
      var percent =
        (($(this).val() - $(".number9").val()) / $(".number9").val()) * 100;
      $(".value5").val(val5);
      $(".result").slideDown();
      $(".valnum10").text(parseFloat($(this).val()));
      $(".valnum9").text(parseFloat($(".number9").val()));
      $(".result-val").text(val5);
      $(".result-precent").text(percent + "%");
    }
  });
  var acc = $(".accordion");
  acc.click(function () {
    $(this).toggleClass("active");
    var panel = $(this).next();

    if (panel.css("max-height") !== "0px") {
      panel.css("max-height", "0");
      panel.removeClass("active");
    } else {
      panel.css("max-height", panel.prop("scrollHeight") + "px");
      panel.addClass("active");
    }
  });
});
1