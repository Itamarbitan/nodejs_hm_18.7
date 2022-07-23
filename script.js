$('#contact-form1').validate({
    rules: {
        name : {
            required : true,
            minlength : 2
        },
        email : {
            type : email,
            minlength : 3

        },
        phone : { 
            required : true , 
            
        }


    }
});

