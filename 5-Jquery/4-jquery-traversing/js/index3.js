$(document).ready(function () {
    
    let htmlString = '<div><p>Hello FBW5 in Jquery <a href="#">Click here</a></p></div><script>alert("HI")</script>'
    let smallDom = $(htmlString)
    smallDom.find('a').click(function (e) { 
        e.preventDefault();
        alert('hello')
    });

    let someBtn = document.createElement('button')
    //someBtn.innerText = 'hi'
    $(someBtn).text('hi')

    $('#container').append(smallDom);
    $('#container').append(someBtn);
});

