$(document).ready(function(){

    for(let i = 1; i<=8; i++){
        $('p').after('<img src="images/sun.png" alt="sun">');
    }

    $('img').click(function(){
        $(this).hide();
    });

    $('button').click(function(){
        $('img').show();
    });
    
});