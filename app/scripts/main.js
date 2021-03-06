$(function(){
  $.placeholder();

  $("#professionals-get-started").click(function() {
    $('html, body').animate({
        scrollTop: $("#pricing").offset().top
    }, 1000);
  });
  $("#home-get-started").click(function() {
    $('html, body').animate({
        scrollTop: $("#patients").offset().top
    }, 500);
  });
  
  $('#main, .index-mobile').click(function(e){
    $('#menu-btn').removeClass('active');
  });
  $('#menu-btn').click(function(e){
    $(this).toggleClass('active');
  });

  $('.show-patients-login-dialog').click(function(){
    showPatientsLoginDialog();
  });
  $('.show-professionals-login-dialog').click(function(){
    showProfessionalsLoginDialog();
  });
  $('.show-patients-signup-dialog').click(function(){
    showPatientsSignupDialog();
  });
  $('.show-professionals-signup-dialog').click(function(){
    showProfessionalsSignupDialog();
  });
  $('.show-forgotpassword-dialog').click(function(){
    showForgotPasswordDialog();
  });
});

function showPatientsLoginDialog(){
  $('.modal').modal('hide');
  $('#patients-login-dialog').modal('show');
}

function showProfessionalsLoginDialog(){
  $('.modal').modal('hide');
  $('#professionals-login-dialog').modal('show');
}

function showPatientsSignupDialog(){
  $('.modal').modal('hide');
  $('#patients-signup-dialog').modal('show');
}

function showProfessionalsSignupDialog(){
  $('.modal').modal('hide');
  $('#professionals-signup-dialog').modal('show');
}

function showForgotPasswordDialog(){
  $('.modal').modal('hide');
  $('#forgotpassword-dialog').modal('show');
}

function showVerifyPhoneDialog(){
  $('.modal').modal('hide');
  $('#verify-phone-dialog').modal('show');
}

function showVerifyEmailDialog(){
  $('.modal').modal('hide');
  $('#verify-email-dialog').modal('show');
}

function showResetPasswordDialog(){
  $('.modal').modal('hide');
  $('#resetpassword-dialog').modal('show');
}
