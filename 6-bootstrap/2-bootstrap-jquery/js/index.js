$(document).ready(function () {
    $('#loginBtn').click(function (e) { 
        e.preventDefault();
        let chechData = true
        //check username isnt empty
        let userName = $('#usernameInput').val();
        if (!userName.trim() ) {
            $('#usernameAlert').removeClass('d-none');
            chechData = false
        }

        //check password isnt empty
        let password = $('#passwordInput').val();
        if ( !password.trim()) {
            $('#passwordAlert').removeClass('d-none');
            chechData = false
        }
        
        

        //get data with AJAX

        //1rst method
        // if ( password.trim() && userName.trim()) {
        //     //ajax request
        // }

        //2nd method
        if (chechData) {
            //prepare the data to sen to the server
            let sentDataObj = {
                userName, //userName:userName,
                password
            }
            //ajax request
            $.ajax({
                type: "GET",
                url: "/usercheck.json",
                data: JSON.stringify(sentDataObj),
                dataType : "json",
                success: function (response) {
                    console.log(response.result);
                    //show login error modal
                    if (!response.result) {
                        $('#loginErrorModal').modal('show')
    
                    }else{
                        //login success
                        alert('login success')
                    }
                }
            });
        }
    });
});