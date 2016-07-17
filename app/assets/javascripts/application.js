//= require angular
//= require angular-ui-router
//= require angular-resource
//= require angular-rails-templates
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

$(function(){
  $('#home-page-picture').mouseover(function(){
    $('.image-caption').removeClass('hide');
    $('.image-caption').slideDown('medium', function(){
    });
  });

  $('#home-page-picture').mouseout(function(){
    $('.image-caption').slideUp('medium', function(){
    });
  });
});
