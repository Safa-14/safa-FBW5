$(document).ready(function () {
    

    $('.list').sortable({
        axis: 'y', //allow movement axis
        cancel: '.unsortable', //prevent element with this selector to not be sortable
        handle: 'span',
        stop: function (event,ui) {
            if (checkOrder()) {
               alert('you did it') 
            }
            
        }
    });

    //check ordre function
    function checkOrder() {
        let check = true
        console.log($('.list>li>h2'));
        
        $('.list>li>h2').each((idx,item) => {
            //console.log($(item).text());
            if ((idx+1)+'' != $(item).text()) {
                check = false
            }
            
        })
        return check
    }


});