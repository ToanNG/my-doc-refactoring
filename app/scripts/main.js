$(function(){
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
