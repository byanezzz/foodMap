//EL EFECTO HOVER NO ES POSIBLE EN MOVILAPP

$(document).ready(function(){
  setTimeout(function() {
    $('.preload').fadeOut(500);
  }, 3000);
  
  var category = data.category;
  selectCategory();
  $('#restaurantList').change(getImg);
  function selectCategory() {
    for (var i in category) {
    $('#restaurantList').append('<option>' + i + '</option>');
    }
  }
  var categorySelection;
  function getImg() {
    var selection = $(this).val();
    categorySelection = category[selection];
    $('.filterRest').append('<div class="imgBox col-xs-offset-2" </div>');
    $('.imgBox').remove();
    for(var i = 0; i < categorySelection.length; i++ ) {  
      $('.filterRest').append('<div class="imgBox col-xs-offset-2"><img src="'+ categorySelection[i].photo +'" data-id="' + categorySelection[i].id + '" class="col-xs-3  select"></div>');
    }
    $('.select').css({'padding':'0', 'height':'100px', 'margin-top':'1em'});
    $('.select').click(idRest);
  }
  function idRest() {
    var idRest = $(this).attr('data-id');
    for(var i = 0; i < categorySelection.length; i++) {
      if (categorySelection[i].id===idRest) {
        $('.modal-title').text(categorySelection[i].name);
        $('.modal-body').html('<div class="row"> <img src="'+ categorySelection[i].photo +'" class="col-xs-5"></div>' +
        '<div class="row"><p class="col-xs-5">'+ categorySelection[i].address + '</p></div>');
      }
    }
    $('#infoRestModal').modal('show');    
  }
});