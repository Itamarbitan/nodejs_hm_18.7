$('#contact-form2').validate({
    rules: {
        name2 : {
            required : true,
            minlength : 2,
            maxlength : 10
        },
        email2 : {
            type : email,
            minlength : 3

        },
        phone2 : { 
            required : true , 
            
        },
        address2 : {
            minlength : 6
        }


    }
})