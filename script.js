function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if(username == "ario" && password == "ario") {
        if (confirm("apakah anda ingin login?") == true) {
            window.location.href = "https://github.com/daidara99";
        } else{
            alert("membatalkan login !") ;
        }
    } else{
        if(done==0) {
            alert("username/password salah!") ;
        }
    }
}    
