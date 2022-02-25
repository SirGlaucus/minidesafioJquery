$(document).ready(function () {
    $("#pasarAca").mouseover(function () {
        $("li:even").removeClass();
        $("li:even").addClass("border border-success text-right text-danger bg-info rounded p-5")
        $("li:odd").removeClass();
        $("li:odd").addClass("border border-danger text-left text-primary bg-success rounded p-3")
    });
    $("#pasarAca").mouseleave(function () {
        $("li").removeClass();
        $("li").addClass("border border-black text-center border-dotted p-4")
    });
})