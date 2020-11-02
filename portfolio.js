var Page_Before = "mainpage";

    $( document ).ready(function() {
        Menu_System_Init();
        Submit_Email_Init();
    });

    function Menu_System_Init(){
        $( ".nav-link" ).click(function() {
            GoToPage( $(this).attr("target_trigg") );
        });
    }
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

    function Submit_Email_Init(){
        $('#email_form').on('submit', function(e) {
            e.preventDefault();
            var data = $("#email_form").serializeArray();
            console.log(data);
            window.open('mailto:drsedate@gmail.com?subject='+data[1].value+'&body='+ data[2].value+'\nfrom: '+data[0].value);
        });
    }