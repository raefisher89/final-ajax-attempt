// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).on('turbolinks:load', function() {
  console.log('document is ready!', new Date());
  $('#task_name').focus();


  $('.modal-footer .btn-primary').click(function() {
     console.log($('.edit_task').submit());
   });

   $('.edit_class').on('shown.bs.modal', function (e) {

     $.ajax({
       method: "GET",
       url: e.relatedTarget.attributes["data-url"].value,
       dataType: "html"
     })
     .done(function(data){
       $(".modal-body").html(data)
     })
  })
});
