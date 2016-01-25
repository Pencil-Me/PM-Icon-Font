$(function() {

    var loadingfullscreen = function(){
        if($('#toogle.loading.fullscreen').length>0){
            $('#toogle.loading.fullscreen').remove();
        } else {
            $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
        }
    };

    $("[data-pm-action='loading']").on('click', function(){
        switch($(this).attr('data-pm-type')){
            case 'inline':
                $(this).toggleClass('loading');
                break;
            case 'fullscreen':
                loadingfullscreen();
                break;
        }
    });


    /*$("body").on('click','#toogle',function(){
        loadingfullscreen();
    });*/

});