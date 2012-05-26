$(document).ready(function(){
    $('#settings').modal('hide');
    
    $('.close').bind('click', function(){
        console.log('hide');
        $('#settings').modal('hide');
    });
    
    $('.btn.settings').bind('click', function(){
        console.log('show');
        $('#settings').modal('show');
    });
    
    $('.btn.apply').bind('click', function(){
        console.log('apply');
    });
    
    $('#scene').bind('change', function(){
        var selected = $('#' + $(this).val()), panels = $('.panel');
        panels.removeClass('visible');
        selected.addClass('visible');
        panels.not(selected).addClass('hidden');
    });
});
