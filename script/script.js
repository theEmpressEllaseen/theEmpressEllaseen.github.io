$(document).ready(function(){
    // check for local storage of dark mode and font size
    if (localStorage.darkMode == 1) {
        $("*").addClass("dark-mode");
    }
    if (localStorage.fontSize) {
        if (localStorage.fontSize > 0) {
            for (let i=0; i<localStorage.fontSize; i++) {
                $("*").css("font-size","+=1");
            }
        } else if (localStorage.fontSize < 0) {
            for (let i=0; i>localStorage.fontSize; i--) {
                $("*").css("font-size","-=1");
            }
        }
    } else {
        localStorage.setItem("fontSize", "0");
    }

    // change font size on click
    $("#font-increase").click(function(){
        let fontSize = localStorage.fontSize;
        $("*").css("font-size","+=1");
        ++fontSize;
        localStorage.setItem("fontSize", fontSize);
    });
    $("#font-decrease").click(function(){
        let fontSize = localStorage.fontSize;
        $("*").css("font-size","-=1");
        --fontSize;
        localStorage.setItem("fontSize", fontSize);
    });
    $("#font-reset").click(function(){
        localStorage.setItem("fontSize", "0");
        location.reload();
    });

    // change between dark and light mode
    $("#dark-mode").click(function(){
        $("*").addClass("dark-mode");
        localStorage.setItem("darkMode", "1");

    })
    $("#light-mode").click(function(){
        $("*").removeClass("dark-mode");
        localStorage.setItem("darkMode", "0");
    })

    // thumbnail image modal funcionality
    $(".thumbnail").click(function(){
        $(".modal").css("display", "block");
        $(".modal-content").attr("src", $(".thumbnail").attr("src"));
        $(".caption").html(this.alt);
    });
    $(".close").click(function(){
        $(".modal").css("display", "none");
    });

    // form processing
    $("#account-form").submit(function(){
        let fname = $("#fname").val();
        localStorage.setItem("first-name", fname);
        alert("Thanks for creating an account, " + localStorage.getItem("first-name") + "!");
    });

    // check for items already in shopping basket
    if (!localStorage.butter) {
        localStorage.setItem("butter", "0");
    }
    if (!localStorage.kefir) {
        localStorage.setItem("kefir", "0");
    }
    if (!localStorage.milk) {
        localStorage.setItem("milk", "0");
    }
    if (!localStorage.snackBar) {
        localStorage.setItem("snackBar", "0");
    }
    if (!localStorage.yoghurt) {
        localStorage.setItem("yoghurt", "0");
    }

    // add products to basket when selected
    $("#add-butter").click(function(){
        let butter = (parseInt(localStorage.getItem("butter"))) +1;
        localStorage.setItem("butter", butter);
    });
    $("#add-kefir").click(function(){
        let kefir = (parseInt(localStorage.getItem("kefir"))) +1;
        localStorage.setItem("kefir", kefir);
    });
    $("#add-milk").click(function(){
        let milk = (parseInt(localStorage.getItem("milk"))) +1;
        localStorage.setItem("milk", milk);
    });
    $("#add-snack-bar").click(function(){
        let snackBar = (parseInt(localStorage.getItem("snackBar"))) +1;
        localStorage.setItem("snackBar", snackBar);
    });
    $("#add-yoghurt").click(function(){
        let yoghurt = (parseInt(localStorage.getItem("yoghurt"))) +1;
        localStorage.setItem("yoghurt", yoghurt);
    });

    // enter item quantities and prices into basket table
    let butter = parseInt(localStorage.getItem("butter"));
    $(".butter > .quantity").text(butter);
    $(".butter > .total-price").text((butter * $(".butter > .unit-price").text()).toFixed(2));

    let kefir = parseInt(localStorage.getItem("kefir"));
    $(".kefir > .quantity").text(kefir);
    $(".kefir > .total-price").text((kefir * $(".kefir > .unit-price").text()).toFixed(2));

    let milk = parseInt(localStorage.getItem("milk"));
    $(".milk > .quantity").text(milk);
    $(".milk > .total-price").text((milk * $(".milk > .unit-price").text()).toFixed(2));

    let snackBar = parseInt(localStorage.getItem("snackBar"));
    $(".snack-bar > .quantity").text(snackBar);
    $(".snack-bar > .total-price").text((snackBar * $(".snack-bar > .unit-price").text()).toFixed(2));

    let yoghurt = parseInt(localStorage.getItem("yoghurt"));
    $(".yoghurt > .quantity").text(yoghurt);
    $(".yoghurt > .total-price").text((yoghurt * $(".yoghurt > .unit-price").text()).toFixed(2));

    // calculate total cost of basket
    let column = $("table td:nth-child(4)").map(function(){
        return $(this).text();
    }).get();
    let basketTotal = 0;
    for (var i in column) {
        basketTotal += parseFloat(column[i]);
    }
    $("#total > td").text("£" + basketTotal.toFixed(2));

    // empty basket
    $("#clear-basket").click(function(){
        localStorage.setItem("butter", "0");
        localStorage.setItem("kefir", "0");
        localStorage.setItem("milk", "0");
        localStorage.setItem("snackBar", "0");
        localStorage.setItem("yoghurt", "0");
        location.reload();
    })
});
