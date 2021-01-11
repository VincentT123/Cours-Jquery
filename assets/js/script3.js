function enleverLiens() {
    $("#contenu").find("a").contents().unwrap();
    //$('#contenu a').remove();
}
function enleverGras() {
    $(".gras").css("font-weight","normal");
}
function enleverItalique() {
    $(".italique").css("font-style","normal");
}
function enleverDecor() {
    $(".souligne").css("text-decoration","none");
}
function viderBoutons() {
    $("#contenu button").empty();
}
function voirCode() {
    $('#contenu').text($('p').html());
}
function liensEnBoutons() {
    $("a").wrap("<button type='button'></button>");
}
function dupliquerTexte() {
    $("#contenu").clone().appendTo( "p" );
}
function regrouperLiens() {
    //$("a").wrapAll('<div></div>');
}
function mettreTitres() {
    $(".titre1").wrap("<h1></h1>");
    $(".titre2").wrap("<h2></h2>");
}
function regrouperTitres() {
    $('h1').wrapAll('<div></div>');
    $('h2').wrapAll('<div></div>');
}
function colorer() {
    $(".vert").css("color","green");
    $(".rouge").css("color","red");
    $(".orange").css("color","orange");
    $(".bleu").css("color","blue");
}
function semantique() {
    $(".italique").css("font-style","italic");
    $(".souligne").css("text-decoration","underline");
    $(".barre").css("text-decoration","line-through");
    $(".gras").css("font-weight","bold");
}
