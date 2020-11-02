
var Page_Before = "mainpage";

$( document ).ready(function() {
    $( ".nav-link" ).click(function() {
        GoToPage( $(this).attr("target_trigg") );
    });
});

function GoToPage(Page){
    if(Page != Page_Before){
        $("a[target_trigg*='"+ Page_Before +"']").removeClass("active");
        $("."+Page).show();
        $("."+Page_Before).hide();
        $("a[target_trigg*='"+ Page +"']").addClass("active");
        if(Page  == "aboutme"){
            $("#currpage").text( "About Me" );
        }else{
            $("#currpage").text( $("a[target_trigg*='"+ Page +"']").text() );
        }
        Page_Before = Page;
    }
}   