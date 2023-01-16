$(document).ready(function(){
    // light/dark mode and font size
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

    $("#dark-mode").click(function(){
        $("*").addClass("dark-mode");
        localStorage.setItem("darkMode", "1");
    })

    $("#light-mode").click(function(){
        $("*").removeClass("dark-mode");
        localStorage.setItem("darkMode", "0");
    })

    // modal functionality
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

    // basket processing
    /*let butter = 0;
    $("#add-butter").click(function(){
        butter++;
    });
    $(".butter > .quantity").text(butter);
    $(".butter > .total-price").text((butter * $(".butter > .unit-price").text()).toFixed(2));*/


    if (localStorage.butter) {
        console.log("Exists")
    } else {
        localStorage.setItem("butter", "0");
        console.log("Created");
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

    let butter = parseInt(localStorage.getItem("butter"));
    $(".butter > .quantity").text(butter);
    $(".butter > .total-price").text((butter * $(".butter > .unit-price").text()).toFixed(2));

    $(".kefir > .quantity").text(localStorage.getItem("butter"));
    $(".kefir > .total-price").text((localStorage.getItem("butter") * $(".kefir > .unit-price").text()).toFixed(2));

    $(".milk > .quantity").text(localStorage.getItem("butter"));
    $(".milk > .total-price").text((localStorage.getItem("butter") * $(".milk > .unit-price").text()).toFixed(2));

    $(".snack-bar > .quantity").text(localStorage.getItem("butter"));
    $(".snack-bar > .total-price").text((localStorage.getItem("butter") * $(".snack-bar > .unit-price").text()).toFixed(2));

    $(".yoghurt > .quantity").text(localStorage.getItem("butter"));
    $(".yoghurt > .total-price").text((localStorage.getItem("butter") * $(".yoghurt > .unit-price").text()).toFixed(2));

    $("#clear-basket").click(function (){
        location.reload();
    })
});
