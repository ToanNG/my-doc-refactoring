$(function(){
  $.placeholder();
  
  $('#menu-btn').click(function(){
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
