// $(document).ready(function () {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });

$(function () {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });
});

$(function () {
    $("#but", "body").click(function () {
        // $("#container").text("<p>Hello les gars</p>");
        // $("#container").html("<p>Hello les gars</p>");
        $("div#container").prepend("<h1>Hello</>");
        $("div#container").append("<h1>Bye</>");
    });
});

// $(function () {
//     $("#but", "body").click(function () {
//         $("div p:nth-child(1)").prepend("<p>test</p>")
//     });
// });

// utilisation de la méthode .attr(nomAttribut) qui permet de récupérer la valeur de l'attribut passé en paramètre
//affiche blue car le premier p est blue
$(function () {
    console.log($("p").attr("class"));
});

// méthode .attr(nomAttribut) et de .each() qui permet de récupérer toutes les valeurs de l'attribut passé en paramètre
//affiche toutes les class des p
$(function () {
    $("p").each(function () {
        console.log($(this).attr("class"));
    });
});

// méthode .length qui permet de récupérer le nombre d'élément du type passé en param
//affiche 3
$(function () {
    console.log($("p").length);
});

// méthode .eq qui permet de choisir l'élément ayant l'indice passé en param
//affiche blue
$(function () {
    console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});

// opérations
// p:lt(i) : parag < indice i
// p:gt(i) : parag > indice i
// p:even : parag d'indice pair et p:odd d'indice impair
// p:first : premier parag et p:last : dernier parag
// inpuy:text : on récupère les inputs de type text

// utilisation de la méthode removeAttr(nomAttribut) supprimant l'attribut passé en param (ici class)
// puis la méthode .attr(nomAttribut, nouvellevaleur) pour ajouter une new class
$(function () {
    // $("p").eq(0).removeAttr("class");
    // $("p").eq(0).attr("class", "red");

    $("p").even().removeClass("blue").addClass("red");
});

// method .val() qui permet de récupérer la valeur de l'attribue value
$(function () {
    $("#but").click(function () {
        console.log($("#nom").val());
    });
});

// method .val() qui permet de remplacer la valeur de l'attribue value par celle passée en param
$(function () {
    $("#but").click(function () {
        console.log($("#nom").val("john wick"));
    });
});

//$("#nom").val("john wick");

// utilisation de la méthode .css (nomPropriete) qui permet de récupérer la valeur de la
// propriété css passée en paramètre
$(function () {
    console.log($("p").eq(0).css("color"));
});

// utilisation de la méthode .css (nomPropriete, newVal) qui permet de modifier la valeur de la
// propriété css passée en paramètre
$(function () {
    console.log($("p").eq(0).css("color", "green"));

    console.log($("p").eq(0).css({ "color": "green", "background-color": "red" }));
});

// Méthodes .xClass()
// .addClass() : ajoute une classe
// .removeClass() : supprime une classe
// .hasClass() : teste l'existence d'une classe
// .toggleClass() : retire ou ajoute une classe

// En utilisant les methodes xClass, ecrire un code jQuery qui permet de
// permuter les couleurs des paragraphes suivants : (rouge -> bleu), (bleu ->
// vert) et (vert -> rouge).

// $(function () {
//     $("#red").each(function () {
//         $(this).removeClass("red").addClass("blue");
//     });
// });$(function () {
//     $("#blue").each(function () {
//         $(this).removeClass("blue").addClass("green");
//     });
// });$(function () {
//     $("#green").each(function () {
//         $(this).removeClass("green").addClass("red");
//     });
// });
$(function () {
    $("#red").removeClass("red").addClass("blue");
    $("#blue").removeClass("blue").addClass("green");
    $("#green").removeClass("green").addClass("red");
});

// $(function() {
//     $("p").last().addClass(".w3r_font_color");
// }

// exo 2
// $('#button1').click(function () {
//     $("textarea").add("p").css("border", "2px solid red");
// });


//utilisation de wrap(balise) permettant d'entourer les éléments sélectionnés
//par les balises passées en param
$(function () {
    $("#but").click(function () {
        $("#p p").wrapAll("<div></div>");
    });
});