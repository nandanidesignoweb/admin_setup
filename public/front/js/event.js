var Event = function () {
    this.__construct = function () {
      this.loader();
      this.category();
      this.commonForm();
      this.deleteItem();
      this.deleteItemCategory();
      this.deleteItemSubCategory();
      this.deleteItemFabric();
      this.imageCommonFormNew();
      this.changeStatus();
      this.contentWrapper();
      this.getSettingWrapper();
      this.getFaqWrapper();
      this.logout();
      this.addsection();
      this.chnageOrderStatus();
      this.sendOtp();
      this.optVerification();
      this.selectType();
      this.petcategory();
      this.addToCart();
      this.changeWeight();
      this.changecolor();
      this.changesize();
      this.deleteCartItem();
      this.checkAddress();
      this.orderBooking();
      this.getcity();
      this.getstate();
      // this.applyvoucher();
      this.addwishlist();
      this.getUserwishlist();
      this.latlong();
      this.increaseQuantity();
      this.underdevelop();
      this.classcommonForm();
      // this.datepicker();
      this.buynow();
      this.googlemap();
      this.searchWrapper();
      this.commonForm2();
      this.close_modal();
      this.switch_user();
      this.change_service();
      this.switch_both();
      this.switch_sp();
      this.dateBooking();
      // this.bookingdata();
      this.reload();
      
      this.customdeleteItem();
      this.change_pet_category();
      this.timeslot_validation();
      this.addHideClass();
      this.request_type();
      this.common_booking();
      this.common_booking2();
      this.common_booking3();
      this.common_booking4();
    };
      this.sendOtp = function () {
          $(document).on('click', '#login-form', function (e) {
              e.preventDefault();
              var url = $('.form-login').attr("action");
              var phone = $('#phoneNumber').val();
              var latitude = $('#latitude').val();
              var longitude = $('#longitude').val();
  
              $.post(url, {phoneNumber:phone,longitude:longitude,latitude:latitude}, function (out) {
                  
                  if (out.result === 1) {
                      $('#phoneNumber').val('');
                      $('#loginModal').modal('hide');
                      $(this).parents('body').addClass('modals-open');
                      $('#verificationModal').modal('show');
                      $('.mobile_no').html('<span class="boldText mobile_no">'+phone+'</span>');
                      $('#user_phone').val(phone);
                  }
                  if (out.result === -1) {
                      
                      $(".error_msg").removeClass('alert-warning alert-success').addClass('alert alert-danger alert-dismissable').show();
                          $(".error_msg").html(out.msg);
                          $(".error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                  }
                  if (out.result === 0) {
                      
                      $(".error_msg").removeClass('alert-warning alert-success').addClass('alert alert-danger alert-dismissable').show();
                          $(".error_msg").html(out.errors);
                          $(".error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                  }
              });
          });
      };
  
      this.optVerification = function () {
          $(document).on('click', '#opt-form', function (e) {
              e.preventDefault();
              
              var url = $('.otpForm').attr("action");
              var digit1 = $('#digit-1').val();
              var digit2 = $('#digit-2').val();
              var digit3 = $('#digit-3').val();
              var digit4 = $('#digit-4').val();
              var digit5 = $('#digit-5').val();
              var digit6 = $('#digit-6').val();
              var phone = $('#user_phone').val();
              
              var otp = digit1+digit2+digit3+digit4+digit5+digit6;
              $.post(url, {otp:otp,phoneNumber:phone}, function (out) {
                   
                  if (out.result === 1) {
                      $('#verificationModal').modal('hide');
                      if(out.data.email){  
  
                          // alert(out.data.user_id);
                          // $(".error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                          // $(".error_msg").html(out.msg);
                          // $(".error_msg").fadeOut(5000);
                          // window.setTimeout(function () {
                          //     if (out.url) {
                          //         window.location.href = out.url;
                          //     }
                          // }, 2000);
                          $('#verificationModal').modal('hide');
                          // $(this).parents('body').addClass('modals-open');
                          // $('#whyHere').modal('show');
                          // $('.user_id').val(out.data.user_id);
                          // $('.user_phone').val(out.data.mobile);
                           toastr.info(out.msg).fadeOut(1000)
  
                          // var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                          // $(".error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                          // $(".error_msg").html(message + out.msg);
                          // $(".error_msg").fadeOut(5000);
                           // window.history.back();
                           window.location.href;
                           location.reload();
                          // window.setTimeout(function () {
                          // if (out.url) {
                          //     // window.location.href = out.url;
  
                          // }
                          // }, 2000);
  
                      }else{
                          // alert();
                          $(this).parents('body').addClass('modals-open');
                          $('#whyHere').modal('show');
                          $('.user_id').val(out.data.user_id);
                          $('.user_phone').val(out.data.mobile);
                          $('.email').val(out.data.email);
                          
                      }
                  }if (out.result === -1) {
                      $(".error_msg").removeClass('alert-warning alert-success').addClass('alert alert-danger alert-dismissable').show();
                          $(".error_msg").html(out.msg);
                          $(".error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                  }
                  if (out.result === 0) {
                      $(".error_msg").removeClass('alert-warning alert-success').addClass('alert alert-danger alert-dismissable').show();
                          $(".error_msg").html(out.errors);
                          $(".error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                  }
              });
          });
      };
      this.selectType = function () {
          $(document).ready(function(){
              $('.onSelectType').on('click', function(){
                  var url = $('#selectTypes').attr("action");    
                  var selectType = $('.selectType:checked').val();
                  var user_id = $('.user_id').val();
                  var phone = $('.user_phone').val();
                      $.post(url, {phoneNumber:phone,selectType:selectType,user_id:user_id}, function (out) { 
                          
                      if (out.result === 1) {
                          
                          if(out.data.email){
                              // alert(out.data.email);
                              $('#whyHere').modal('hide');
                              window.setTimeout(function () {
                              if (out.url) {
                                  window.location.href = out.url;
                              }
                              }, 5000);
                          }else{
                              
                              $('#whyHere').modal('hide');
                              $(this).parents('body').addClass('modals-open');
                              $('#compProfileModal').modal('show');
                              $('.user_phone').val(out.data.mobile);
                              $('#selectType').val(selectType);
                              $('.user_id').val(out.data.user_id);
                          }
                      }
                      if (out.result === -1) {
                      
                          $(".error_msg").removeClass('alert-warning alert-success').addClass('alert alert-danger alert-dismissable').show();
                              $(".error_msg").html(out.msg);
                              $(".error_msg").fadeOut(5000);
                              $('html, body').animate({
                                  scrollTop: 0
                              }, 800);
                      }
  
                  });
              });
          });
      };
  
      this.loader = function(){
          $(document).ready(function () {
              $(".loader-admin").fadeOut("slow");
          });
      };
  
      this.category = function () {
          $(document).on('change', '#agegroup_id', function (e) {
              e.preventDefault();
              var val = $(this).val();
              var url = $(this).data('url');
              $.post(url, {val: val}, function (out) {
                  if (out.result === 1) {
                      var html = '<option value"">--Select Category--</option>';
                      for (var i in out.category) {
                          html += "<option value='" + i + "'>" + out.category[i] + "</option>";
                      }
                      $('#category_id').html(html)
                  }
              });
          });
      };
      
      this.commonForm = function(){
          $(document).on('submit', '#common-form', function(e){
                e.preventDefault();
              var url = $(this).attr("action");
               var user_id = $('#user_id').val();
              var postdata = $(this).serialize();
              $.post(url, postdata, function (out) {
                  $(".form-group > .error").remove();
                  if (out.result === 0) {
                      var a = 1;
                      
                      for (var i in out.errors) {
                          $("#" + i).parents(".form-group").append('<span class="error text-danger">' + out.errors[i] + '</span>');
                          if(a == 1){
                              $("#" + i).focus();
                          }
                          a++;
                      }
                  }
                  if (out.result === -1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1000);
                  }
                  if (out.result === -2) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1000);
                  }
                  if (out.result === -3) {
                      var message = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                      $("#error_msg").removeClass('alert-danger alert-success').addClass('alert alert-danger alert-dismissable').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(2000);
                  }
                  if (out.result === 1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1000);
                  }
              });
          })
      }
      
      this.deleteItem = function(){
          $(document).on('click', '.delete-item', function(e){
              e.preventDefault();
              
              var customtitle = $(this).data('title');
              
              var url = $(this).attr("href");
              customtitle='';
              if(customtitle!==''){
                  // alert('if')
                  title = customtitle;
              }else{
                  // alert('else')
                  title = 'Do you really want to Delete?';
              }
              
              swal({
                  title: title,
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete) {
                      
                      $.post(url, '', function (out) {
                  
                          if (out.result === 0) {
                              
                              swal({
                                  title: "You cannot delete this Image.",
                                  icon: 'warning',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                          if (out.result === 1) {
                               
                              swal({
                                  title: "Deleted Succesfully!!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      window.setTimeout(function () {
                                          if (out.url) {
                                              window.location.href = out.url;
                                          }else{
                                              window.location.href;
                                              location.reload();
                                          }
                                      }, 1000);
                                  }
                              });
                          }
                      });
                  }else{
                      swal({
                          title: "Not Deleted!!",
                          icon: 'success',
                          buttons: 'OK',
                          closeOnClickOutside: true,
                      });
                  }
              });
          });
      };
  
      this.deleteItemCategory = function(){
          $(document).on('click', '.delete-item-category', function(e){
              e.preventDefault();
              var name = $(this).data('name');
              var url = $(this).attr("href");
              swal({
                  title: "Do you really want to Delete? Deleting the Category "+name+" will delete all the related Sub-categories and Products also.",
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete) {
                      $.post(url, '', function (out) {
                          if (out.result === 1) {
                              swal({
                                  title: "Category Deleted Succesfully!!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                      });
                  }else{
                      swal({
                          title: "Category Not Deleted!!",
                          icon: 'success',
                          buttons: 'OK',
                          closeOnClickOutside: true,
                      });
                  }
              });
          });
      };
  
      this.deleteItemSubCategory = function(){
          $(document).on('click', '.delete-item-sub-category', function(e){
              e.preventDefault();
              var name = $(this).data('name');
              var url = $(this).attr("href");
              swal({
                  title: "Do you really want to Delete? Deleting the Sub-Category "+name+" will delete all the related Products also.",
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete) {
                      $.post(url, '', function (out) {
                          if (out.result === 1) {
                              swal({
                                  title: "Sub-Category Deleted Succesfully!!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                      });
                  }else{
                      swal({
                          title: "Sub-Category Not Deleted!!",
                          icon: 'success',
                          buttons: 'OK',
                          closeOnClickOutside: true,
                      });
                  }
              });
          });
      };
  
      this.deleteItemFabric = function(){
          $(document).on('click', '.delete-item-fabric', function(e){
              e.preventDefault();
              var name = $(this).data('name');
              var url = $(this).attr("href");
              swal({
                  title: "Do you really want to Delete? Deleting the Fabric "+name+" will delete all the related Fabric Colors also.",
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete) {
                      $.post(url, '', function (out) {
                          if (out.result === 1) {
                              swal({
                                  title: "Fabric Deleted Succesfully!!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                      });
                  }else{
                      swal({
                          title: "Fabric Not Deleted!!",
                          icon: 'success',
                          buttons: 'OK',
                          closeOnClickOutside: true,
                      });
                  }
              });
          });
      };
  
      this.imageCommonFormNew = function () {
          $(document).on('submit', '#image-common-form-new', function (evt) {
              evt.preventDefault();
              // alert($(this).attr("action"));
              $(".loader").fadeIn("slow");
              $.ajax({
                  url: $(this).attr("action"),
  
                  type: "post",
                  data: new FormData(this),
                  processData: false,
                  contentType: false,
                  success: function (out) {
                      
                      $(".loader").fadeOut("slow");
                      $(".form-group > .error").remove();
                      if (out.result === 0) {
                          console.log(out.errors);
                          for (var i in out.errors) {
                              $("#" + i).parents(".form-group").append('<span class="error text-danger">' + out.errors[i] + '</span>');
                              $("#" + i).focus();
                          }
                      }
                      if (out.result === -1) {
                          var message = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                          $(".error_msg").removeClass('alert-warning alert-success').addClass('alert alert-danger alert-dismissable').show();
                          $(".error_msg").html(message + out.msg);
                          $(".error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                          window.setTimeout(function () {
                              if (out.url) {
                                  window.location.href = out.url;
                              }
                          }, 1200);
                      }
  
                      if (out.result === 1) {
                          var message = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                          $(".error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                          $(".error_msg").html(message + out.msg);
                          $(".error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                          window.setTimeout(function () {
                              if (out.url) {
                                  window.location.href = out.url;
                              }else{
                                  window.location.href;
                                  location.reload();
                              }
                          }, 1200);
                      }
                  }
              });
          });
      };
  
      this.changeStatus = function () {
          $(document).on('click', '.change-status', function (e) {
              e.preventDefault();
              var url = $(this).attr("href");
              $.post(url, function (out) {
                  if (out.result === 1) {
                      $('html, body').animate({
                          scrollTop: $(".card").offset().top
                      }, 500);
                      var message = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#res_status").removeClass('alert-warning alert-danger').addClass('alert alert-success alert-dismissable').show();
                      $("#res_status").html(message + out.msg);
                      $("#res_status").fadeOut(5000);
                      window.setTimeout(function () {
                         location.reload();
                      }, 1200);
                  }
              });
          });
      };
  
      this.contentWrapper = function () {
          $(document).ready(function () {
              var url = $('#content-wrappers').data('url');
  
              $.post(url, '', function (out) {
                  if (out.result === 1) {
                      $('#content-wrappers').html(out.content_wrapper);
                       $('#dataTable').DataTable({
                          responsive: true,
                          destroy: true
                      });
                  }
              });
          });
      };
  
      this.getSettingWrapper = function () {
          $(document).on('click', '.edit_settings', function(evt){
              evt.preventDefault();
              $("#settings").modal('show');
              var url = $(this).data("url");
              $.post(url, '', function (out) {
                  $("#set_wrap").html(out.content_wrapper);
                  CKEDITOR.replace('description');
              });
          })
      }
  
      this.getFaqWrapper = function () {
          $(document).on('click', '.edit_faqs', function(evt){
              evt.preventDefault();
              $("#add_faq").modal('show');
              var url = $(this).data("url");
              $.post(url, '', function (out) {
                  $("#faq_wrap").html(out.content_wrapper);
                  CKEDITOR.replace('description');
              });
          })
      }
  
      this.logout = function(){
          $(document).on('click', '.logout', function(evt){
              evt.preventDefault();
              var url = $(this).attr('href');
              swal({
                  title: "Are you sure you want to logout?",
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete){
                      $.post(url, '', function(out){
                          if(out.result === 1){
                              swal({
                                  title: "Logout Successfully!!",
                                  icon: "success",
                                  buttons: "OK",
                                  dangerMode: true,
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      window.location.href = out.url;
                                  } 
                              });
                          }
                      });
                  }
              });
          });
      }
  
      this.addsection = function(){
          $(document).on('click', "#addsection", function(){
              if($(".fa-minus-square:last").data("active")){
                  var a = parseInt($(".fa-minus-square:last").data("active"))+parseInt(1);
              }else{
                  var a = 3;
              }
              var data = $(".newsection_chk").html();
              data = data.replace("size","size"+a);
              data = data.replace("price","price"+a);
              data = data.replace("discount","discount"+a);
              data = data.replace("height","height"+a);
              data = data.replace("width","width"+a);
              data = data.replace("lengths","lengths"+a);
              data = data.replace("stock","stock"+a);
              data = data.replace('id="size"','id="size'+a+'"');
              data = data.replace('name="size"','name="size'+a+'"');
              data = data.replace('id="price"', 'id="price'+ a +'" ');
              data = data.replace('id="discount"', 'id="discount'+ a +'" ');
              data = data.replace('id="height"', 'id="height'+ a +'" ');
              data = data.replace('id="width"', 'id="width'+ a +'" ');
              data = data.replace('id="lengths"', 'id="lengths'+ a +'" ');
              data = data.replace('id="stock"', 'id="stock'+ a +'" ');
              data = data.replace('name="err_chk[]" value=""','name="err_chk[]" value="'+a+'"');
              data = data.replace('err_chk"',"err_chk"+a+'"');
              $(".sectionMore").append("<div class='row newsection'>" + data + "<a href='javascript:void(0);' class='remove'><i class='fa fa-minus-square pull-right' data-active='"+ a +"' aria-hidden='true'></i></a></div>"); 
          });
          $(document).on("click", "a.remove" , function() {
              $(this).parent().remove();
          });
      }
  
      
      this.chnageOrderStatus = function () {
          $(document).on('change', '.order_status', function (evt) {
              evt.preventDefault();
              var status = $(this).val();
              let url = $(this).data("url");
              $.ajax({
                  url: url,
                  type: "post",
                  data:{
                      status:status
                  },
                  success: function (out) {
                      toastr.info('Status Updated Successfully!!').fadeOut(5000)
                      location.reload()
                  }
              });
          });
      };
      this.petcategory=function(){
          $(document).on('change', '#pet_category_id', function (e) {
              e.preventDefault();
              var val = $(this).val();
              var url = $(this).data('url');
              $.post(url, {val: val}, function (out) {
                  if (out.result === 1) {
                      var html = '';
                      for (var i in out.pet_category) {
                          html += "<option value='" + i + "'>" + out.pet_category[i] + "</option>";
                      }
                      $('#breed_id').html(html);
                  }
              });
          });
      };
      this.changeWeight=function(){
       $(document).on('click', '.selectWeight', function (e) {
              e.preventDefault();
              var product_id=$('#product_id').val();
              var selectWeight = $('.selectWeight:checked').val();
              
              if(selectWeight!=''){
                  var specification_id = $('.selectWeight:checked').data('id');
                  var selectsku = $('.selectWeight:checked').data('sku');
                  var url=$('#url').data('url');
                  
                  $.post(url, {specification_id: specification_id,selectsku:selectsku,product_id,product_id}, function (out){
                      if(out.result=='1'){
                          var price=out.data['price'];
                          var qty='1';
                          $('.productPrice').html(price);
                          $('.productPrice1').val(price);
                          $('.selectsku').val(selectsku);
                          $('.specification_id').val(specification_id);
                          $('#qty1').val(qty);
                      }
                   
                  });
              }
              
          });
          
      };
  
      this.changecolor=function(){
          $(document).on('click', '.selectColor', function (e) {
              e.preventDefault();
              var product_id=$('#product_id').val();
              var selectColor = $('.selectColor:checked').val();
  
              if(selectColor!=''){
                  var specification_id = $('.selectColor:checked').data('id');
                  var selectsku = $('.selectColor:checked').data('sku');
  
                  var url=$('#url').data('url');                
                  $.post(url, {specification_id: specification_id,selectsku:selectsku,product_id,product_id}, function (out){
                      if(out.result=='1'){
                          var price=out.data['price'];
                          var qty='1';
                          
                          $('.productPrice').html(price);
  
                          $('.productPrice1').val(price);
                          $('.selectsku').val(selectsku);
                          $('.specification_id').val(specification_id);
                          $('#qty1').val(qty);
                      }
                   
                  });
              }
          });
      };
  
      this.changesize=function(){
          $(document).on('click', '.selectSize', function (e) {
              e.preventDefault();
              var product_id=$('#product_id').val();
              var selectSize = $('.selectSize:checked').val();
  
              if(selectSize!=''){
                  var specification_id = $('.selectSize:checked').data('id');
                  var selectsku = $('.selectSize:checked').data('sku');
                  var url=$('#url').data('url');
                  $.post(url, {specification_id: specification_id,selectsku:selectsku,product_id,product_id}, function (out){
                      if(out.result=='1'){
                          var price=out.data['price'];
                          var qty='1';
                          $('.productPrice').html(price);
                          $('.productPrice1').val(price);
                          $('.selectsku').val(selectsku);
                          $('.specification_id').val(specification_id);
                          $('#qty1').val(qty);
                      }
                  });
              }
          });
      };
      
      this.addToCart=function(){
         $(document).on('click', '.addcart', function (e) {
          // alert();
          e.preventDefault();
          var product_id=$('#product_id').val();
          var specification_id = $('.specification_id').val();
          var selectsku = $('.selectsku').val();
          var url=$('#addcart-url').data('addcarturl');
          var productPrice=$('#productPrice').val();
          var quantity=$('.cartquantity').val();
              $.post(url, {specification_id: specification_id,selectsku:selectsku,product_id,product_id,productPrice:productPrice,quantity:quantity}, function (out) {
  
                  if (out.result === -1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1200);
                  }
                  if (out.result === -2) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1200);
                  }
                  if (out.result === -3) {
                      var message = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                      $("#error_msg").removeClass('alert-danger alert-success').addClass('alert alert-danger alert-dismissable').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(2000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                  }
                  if (out.result === 1) {
                      swal({
                              title: out.msg,
                              icon: 'success',
                              buttons: 'OK',
                              closeOnClickOutside: false,
                          }).then(function(isConfirm){
                              if(isConfirm){
                                  window.location.href = out.url;
                              }
                          });
                      }
              });  
         }); 
      };
  
      this.deleteCartItem=function(){
          $(document).on('click', '.delete-item1', function(e){
              e.preventDefault();
              
              var product_id=$(this).data('product_id');
              var url=$(this).data('url');
              // alert(url);
              swal({
                  title: "Do you really want to delete the product?",
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete) {
                      $.post(url, {product_id:product_id}, function (out) {
                          if (out.result === 0) {
                              swal({
                                  title: "You cannot delete this Cart.",
                                  icon: 'warning',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                          if (out.result === 1) {
                              swal({
                                  title: "Item removed successfully from the cart!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                          if (out.result === -1) {
                              swal({
                                  title: "Item removed successfully from the cart!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      window.location.href = out.url;
                                  }
                              });
                          }
                      });
                  }else{
                      swal({
                          title: "Not Deleted!!",
                          icon: 'success',
                          buttons: 'OK',
                          closeOnClickOutside: true,
                      });
                  }
              });
          });
      };
  
      this.checkAddress=function(){
          $(document).on('click', '.checkAddress', function(e){
              e.preventDefault();
              var address_id = $('.address_id:checked').val();
  
              if(address_id){
                    var url = $(this).data('url');
                    $.post(url, {address_id: address_id}, function (out) { 
  
                      if (out.result === 1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.location.href = out.url;
                  }
                    });
              }else{
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html('Please Choose Shipping Address!');
                  $("#error_msg").fadeOut(5000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
              }
          });
      };
  
      this.orderBooking=function(){
          $(document).on('click', '.orderBooking', function(e){
              e.preventDefault();
              var payment_type = $('.payment_type:checked').val();
               if(payment_type){
                  var url = $('.orderBooking').data('url');
                     $.post(url, {payment_type,payment_type}, function (out) { 
                      if (out.result === 1) {
                          var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                          $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                          $("#error_msg").html(message + out.msg);
                          $("#error_msg").fadeOut(5000);
                          $('html, body').animate({
                              scrollTop: 0
                          }, 800);
                           window.location.href = out.url;
                      }
                     });
              }else{
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html('Please Choose Payment Method!');
                  $("#error_msg").fadeOut(5000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
               }
          });
      };
      
      this.getcity=function(){
          $(document).on('change', '#state', function (e) {
              e.preventDefault();
              var state_id = $(this).val();
              var url = $(this).data('url');
  
              $.post(url, {state_id: state_id}, function (out) {
                  if (out.result === 1) {
                      
                      var html = '';
                      for (var i in out.city) {
                          html += "<option value='" + i + "'>" + out.city[i] + "</option>";
                      }
                      $('#cities').html(html);
                  }
              });
          });
  
          $(document).on('change', '.state1', function (e) {
              e.preventDefault();
              var state_id = $(this).val();
              // alert(state_id);
              var url = $(this).data('url');
              // alert(url);
              $.post(url, {state_id: state_id}, function (out) {
                  if (out.result === 1) {
                      
                      var html = '';
                      for (var i in out.city) {
                          html += "<option value='" + i + "'>" + out.city[i] + "</option>";
                      }
                      $('.cities1').html(html);
                  }
              });
          });
      };
  
      this.getstate=function(){
          $(document).on('change', '#country', function (e) {
              e.preventDefault();
              var country_id = $(this).val();
              
              var url = $(this).data('url');
              $.post(url, {country_id: country_id}, function (out) {
                  if (out.result === 1) {
                      
                      var html = '';
                      for (var i in out.state) {
                          html += "<option value='" + i + "'>" + out.state[i] + "</option>";
                      }
                      $('#state').html(html);
                  }
              });
          });
  
          $(document).on('change', '.country1', function (e) {
              e.preventDefault();
              var country_id = $(this).val();
              
              var url = $(this).data('url');
              $.post(url, {country_id: country_id}, function (out) {
                  if (out.result === 1) {
                      
                      var html = '';
                      for (var i in out.state) {
                          html += "<option value='" + i + "'>" + out.state[i] + "</option>";
                      }
                      $('.state1').html(html);
                  }
              });
          });
      };
  
      // this.applyvoucher=function(){
      //     $(document).on('click', '.apply_voucher', function (e) {
      //         e.preventDefault();
      //         var url = $(this).attr("href");
      //         var url1=$(this).data("url");
              
      //         $.post(url, {}, function (out) {
      //             if (out.result === -1) {
      //                 var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
      //                 $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
      //                 $("#error_msg").html(message + out.msg);
      //                 $("#error_msg").fadeOut(5000);
      //                 window.setTimeout(function () {
      //                     window.location.href = out.url;
      //                 }, 2000);
      //             }
      //             if (out.result === 1) {
      //                 var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
      //                 $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
      //                 $("#error_msg").html(message + out.msg);
      //                 $("#error_msg").fadeOut(5000);
      //                  window.location.href = url1;
      //             }
      //         });
      //     });
      // };
      
      this.addwishlist=function(){
          $(document).on("click",".addwishlist",function (e){
              e.preventDefault();
              var user_id=$(this).data('user');
              var product_id=$(this).data('product');
              var url=$(this).data('url');
              var url1=$(this).data('url1');
  
              var msg='Please Login!';
              if(user_id==''){
                  $('#loginModal').modal('show');
              }else{
                  $.post(url,{user_id:user_id,product_id:product_id},function (out){
                   if (out.result === 1) {
  
                      // var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      // $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      // $("#error_msg").html(message + out.msg);
                      // $("#error_msg").fadeOut(5000);
                      // window.location.href = out.url;
                      
                  }
                  });
              }
          });
  
          $(document).on("click",".addwishlist1",function (e){
              e.preventDefault();
              var user_id=$(this).data('user');
              var product_id=$(this).data('product');
              var url=$(this).data('url');
              var url1=$(this).data('url1');
  
              var msg='Please Login!';
              if(user_id==''){
                  $('#loginModal').modal('show');
              }else{
                  $.post(url,{user_id:user_id,product_id:product_id},function (out){
                   if (out.result === 1) {
                      
                      // var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      // $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      // $("#error_msg").html(message + out.msg);
                      // $("#error_msg").fadeOut(5000);
                      // window.location.href = url1;
                  }
                  });
              }
          });
  
          $(document).on("click",".addwishlist2",function (e){
              e.preventDefault();
              var user_id=$(this).data('user');
              var product_id=$(this).data('product');
              var url=$(this).data('url');
  
              var msg='Please Login!';
              if(user_id==''){
                  $('#loginModal').modal('show');
              }else{
                  $.post(url,{user_id:user_id,product_id:product_id},function (out){
                   if (out.result === 1) {
                      
                      // var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      // $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      // $("#error_msg").html(message + out.msg);
                      // $("#error_msg").fadeOut(5000);
                      // window.location.href = url;
                  }
                  });
              }
          });
      };
  
      this.getUserwishlist=function(){
          $(document).on("click",".wishlist",function (e){
              e.preventDefault();
              var user_id=$(this).data('user');
              var product_id=$(this).data('product');
              var url=$(this).data('url');
               
              var msg='Please Login!';
                  $.post(url,{user_id:user_id,product_id:product_id},function (out){
                   if (out.result === 1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.location.href = out.url;
                  }
                  });
          });
      };
  
      this.latlong=function(){
              getLocation();
              function getLocation() {
                  if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(showPosition);
  
                  } else {
                   x.innerHTML = "Geolocation is not supported by this browser.";
                  }
              }
              function showPosition(position) {
                  $('#latitude').val(position.coords.latitude);
                  $('#longitude').val(position.coords.longitude);
              }
  
               $.get('https://ipapi.co/json/', function(data) { 
                $.getJSON('https://ipapi.co/'+data.ip+'/json', function(response){
                    $('#country_name').val(response.country_name);
                    var url=$('#countryname_url').data('url');
                    $.post(url,{country_name:response.country_name},function (out){
                          if (out.result === -1) {
                              toastr.error(out.msg).fadeOut(5000)
                              // window.setTimeout(function () {
                              //     window.location.href = out.url;
                              // }, 2000);
  
                          }
                    });
                });
              }) 
      };
  
      this.increaseQuantity = function () {
          $(document).on('click', '.plus_btn', function (e) {
              e.preventDefault();
              var url=$(this).data('url');
              var cartid=$(this).data('value');
              var qty= $('#qty_'+cartid).val();
              var price= $(this).data('price');
              // alert(price);
              var total_price=qty*price;
              // alert(total_price);
               $.post(url, {cartid:cartid,total_price:total_price,qty:qty}, function(res){
                  if(res.result === 1){
                      location.reload();
                  }
                  // if(res.result === -1){
                  //     swal({
                  //         title: "This Product has only "+ res.stock +" Quantities available.",
                  //         icon: "warning",
                  //         closeOnClickOutside: false,
                  //     }).then(function(isConfirm){
                  //         if(isConfirm){
                  //             location.reload();
                  //         }
                  //     });
                  // }
               });
          });
  
          $(document).on('click', '.minus_btn', function (e) {
              e.preventDefault();
              var url=$(this).data('url');
              var cartid=$(this).data('value');
              var qty= $('#qty_'+cartid).val();
              var price= $(this).data('price');
              var total_price=qty*price;
  
              if(qty==0){
                  var deletecart=$(this).data('deletecart');
                  $.post(deletecart, function(res){
                      if(res.result === 1){
                          location.reload();
                      }
                  });
              }
              $.post(url, {cartid:cartid,total_price:total_price,qty:qty}, function(res){
                  if(res.result === 1){
                      location.reload();
                  }
              }); 
          });
  
          $(document).on('click', '.minus_btn1', function (e) {
              e.preventDefault();
              var url=$(this).data('url');
              var product_id=$(this).data('product_id');
              var selectsku=$(this).data('sku');
              var quantity= $('#qty').val();
              var productPrice= $(this).data('price');
  
              $.post(url, {selectsku:selectsku,product_id:product_id,productPrice:productPrice,quantity:quantity}, function(res){
                  if(res.result === 1){
                      window.location.href =res.url;
                  }
                  if(res.result === -1){
                      window.location.href =res.url;
                  }
              }); 
          });
  
          $(document).on('click', '.plus_btn1', function (e) {
              e.preventDefault();
              var url=$(this).data('url');
             
              var product_id=$(this).data('product_id');
              var selectsku=$(this).data('sku');
              var quantity= $('#qty').val();
              var productPrice= $(this).data('price');
              
              $.post(url, {selectsku:selectsku,product_id:product_id,productPrice:productPrice,quantity:quantity}, function(res){
                  if(res.result === 1){
                      window.location.href = res.url;
                  }
              }); 
          });
  
  
  
      };
  
      this.underdevelop = function () {
          $(document).on('click', '.underdevelop', function (e) {
              toastr.error("Under Development!").fadeOut(1000)
          });
      };
  
      this.classcommonForm = function(){
          $(document).on('submit', '.common-form-class', function(e){
              // alert("hello")
                e.preventDefault();
              var url = $(this).attr("action");
              // alert(url);
              var user_id = $('#user_id').val();
              var postdata = $(this).serialize();
              $.post(url, postdata, function (out) {
                  $(".form-group > .error").remove();
                  if (out.result === 0) {
                      var a = 1;
                      for (var i in out.errors) {
                          $("." + i).parents(".form-group").append('<span class="error text-danger">' + out.errors[i] + '</span>');
                          if(a == 1){
                              $("." + i).focus();
                          }
                          a++;
                      }
                  }
                  if (out.result === -1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1200);
                  }
                  if (out.result === -2) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1200);
                  }
                  if (out.result === -3) {
                      var message = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                      $("#error_msg").removeClass('alert-danger alert-success').addClass('alert alert-danger alert-dismissable').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(2000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                  }
                  if (out.result === 1) {
                      // alert();
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-danger alert-danger admin_chk_dng').addClass('alert alert-success alert-dismissable admin_chk_suc').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(5000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      window.setTimeout(function () {
                          window.location.href = out.url;
                      }, 1200);
                  }
              });
          })
      };
      
      this.buynow = function() {
           $(document).on('click', '.buynow', function(e){
              e.preventDefault();
              var url= $(this).data('url');
              var product_id=$('#product_id').val();
              var specification_id = $('.specification_id').val();
              var selectsku = $('.selectsku').val();
              var productPrice=$('#productPrice').val();
              var quantity=$('.cartquantity').val();
  
              $.post(url, {product_id:product_id,specification_id:specification_id,
                  selectsku:selectsku,productPrice:productPrice
                  ,quantity:quantity},function (out) {
                  $(".form-group > .error").remove();
                  if (out.result === 0) {
                      var a = 1;
                      for (var i in out.errors) {
                          $("." + i).parents(".form-group").append('<span class="error text-danger">' + out.errors[i] + '</span>');
                          if(a == 1){
                              $("." + i).focus();
                          }
                          a++;
                      }
                  }
                  
                  if (out.result === 1) {
                      window.location.href = out.url;
                  }
                  
              });
           });
      };
  
      this.googlemap=function(){
        // This sample uses the Autocomplete widget to help the user select a
        // place, then it retrieves the address components associated with that
        // place, and then it populates the form fields with those details.
        // This sample requires the Places library. Include the libraries=places
        // parameter when you first load the API. For example:
        // <script
        // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
        let placeSearch;
        let autocomplete;
        const componentForm = {
          complete_address: "formatted_address",
        };
  
        function initAutocomplete() {
          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            { types: ["geocode"] }
          );
          // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.
          autocomplete.setFields(["address_component"]);
          // When the user selects an address from the drop-down, populate the
          // address fields in the form.
          autocomplete.addListener("place_changed", fillInAddress);
        }
  
        function fillInAddress() {
          // Get the place details from the autocomplete object.
          const place = autocomplete.getPlace();
  
          for (const component in componentForm) {
            document.getElementById(component).value = "";
            document.getElementById(component).disabled = false;
          }
  
          // Get each component of the address from the place details,
          // and then fill-in the corresponding field on the form.
          for (const component of place.address_components) {
            const addressType = component.types[0];
  
            if (componentForm[addressType]) {
              const val = component[componentForm[addressType]];
              document.getElementById(addressType).value = val;
            }
          }
        }
  
        // Bias the autocomplete object to the user's geographical location,
        // as supplied by the browser's 'navigator.geolocation' object.
        function geolocate() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
           
              const circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy,
              });
              autocomplete.setBounds(circle.getBounds());
            });
          }
        }
    };
  
    this.searchWrapper = function () {
          document.addEventListener("mousedown",function(event){
              if(event.target.closest("#search, .serachData"))
                 return;
          $('.serachData').slideUp();
          });
          $(document).on("keyup", "#search", function(e){
              e.preventDefault();
              var search = $(this).val();
              var url = $(this).data('url');
              $.post(url, {search : search}, function(res){
                      // alert(res.search_wrapper)
                  //   $(".serachData").show();
                  //   $(".serachData").html(res.html);
                    if(search != ""){
                      $(".serachData").show();
                      //   alert('if');
                      $(".serachData").html(res.html);
                  }else{
                      $(".serachData").html('');
                  }
              })
          })
          $(document).on('submit', '#frm_srch', function(e){
              e.preventDefault();
              window.location.href = $("#range_search").attr("href");
          })
          $(document).on("click", "#search", function(e){
              e.preventDefault();
              var search = $(this).val();
              var url = $(this).data('url');
              $.post(url, {search : search}, function(res){
                    $(".serachData").show();
                    $(".serachData").html(res.html);
                    // $(".serachData").html(res.search_wrapper);
              })
          })
      }
  
      this.commonForm2 = function(){
          $(document).on('submit', '#common-form2', function(e){
              e.preventDefault();
              
              var url = $(this).attr("action");
              var user_id = $('#user_id').val();
              var postdata = $(this).serialize();
              $.post(url, postdata, function (out) {
                  $(".form-group > .error").remove();
                  if (out.result === 0) {
                      var a = 1;
                      
                      for (var i in out.errors) {
                          $("#" + i).parents(".form-group").append('<span class="error text-danger">' + out.errors[i] + '</span>');
                          if(a == 1){
                              $("#" + i).focus();
                          }
                          a++;
                      }
                  }
                  if (out.result === 1) {
                      var question =$('.question').val();
                          if(question==''){
                              swal({
                                  title: 'Please Enter Your Question',
                                  icon: 'warning',
                                  closeOnClickOutside: false,
                                  timer:3000,
                                  });
                          }else{
                          swal({
                              title: out.msg,
                              icon: 'success',
                              buttons: 'OK',
                              closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      window.location.href = out.url;
                                  }
                              });
                          }
                      }
              });
          })
      }
  
      this.close_modal=function() {
           $(document).on('click', '.close_modal', function(e){
              location.reload();
           });
      }
  
      this.switch_user=function (){
          $(document).on('click', '.user_switch', function(e){
              var user_switch = $('.user_switch:checked').val();
              if(user_switch!='serviceprovider' && user_switch!='both'){
                  var msg="You Already logged in as User!";
                  toastr.info(msg).fadeOut(10000);
                  location.reload(10000);
              }
              if(user_switch==='serviceprovider'){
                  var user_id=$(".sp_url").data('user_id');
                  var usertype=$('.sp_url').data('usertype');
                  // alert(sp_status);
                  $.post(usertype, {user_id:user_id,selectType:user_switch}, function (out) {
                      var sp_url=$('.sp_url').val();
                      var msg="You logged in as Service Provider!";
                      toastr.info(msg).fadeOut(10000);
                      window.setTimeout(function () {
                         window.location.href = sp_url;
                      }, 1000);
                      
                  });
              }
              if(user_switch=='both'){
                  var user_id=$(".both_url").data('user_id');
                  var usertype=$('.both_url').data('usertype');
                 
                  $.post(usertype, {user_id:user_id,selectType:user_switch}, function (out) {
                      var both_url=$('.both_url').val();
                      var msg="You logged in as Both!";
                      toastr.info(msg).fadeOut(10000);
                      window.setTimeout(function () {
                         window.location.href = both_url;
                      }, 1000);
                  });
              }
  
           });
      }
  
      this.switch_sp =function(){
          $(document).on('click', '.sp_switch', function(e){ 
              var sp_switch = $('.sp_switch:checked').val();
              
              if(sp_switch!='user' && sp_switch!='both'){
                  var msg="You Already logged in as Service Provider!";
                  toastr.info(msg).fadeOut(10000);
                  location.reload(10000);
              }
              if(sp_switch==='user'){
                  var user_id=$(".user_url").data('user_id');
                  var usertype=$('.user_url').data('usertype');
                  $.post(usertype, {user_id:user_id,selectType:sp_switch}, function (out) {
                      var user_url=$('.user_url').val();
                      var msg="You logged in as User!";
                      toastr.info(msg).fadeOut(10000);
                       window.setTimeout(function () {
                         window.location.href = user_url;
                      }, 1200);
                  });
              }
              if(sp_switch=='both'){
                  var user_id=$(".both_url").data('user_id');
                  var usertype=$('.both_url').data('usertype');
                  
                  $.post(usertype, {user_id:user_id,selectType:sp_switch}, function (out) {
                      var both_url=$('.both_url').val();
                      
                      var msg="You logged in as Both!";
                      toastr.info(msg).fadeOut(10000);
                       window.setTimeout(function () {
                         window.location.href = both_url;
                      }, 1200);
                  });
              }
           });
      }
  
      this.switch_both=function(){
          $(document).on('click', '.both_switch', function(e){ 
              var both_switch = $('.both_switch:checked').val();
              if(both_switch!='user' && both_switch!='serviceprovider'){
                  var msg="You Already logged in as Both!";
                  toastr.info(msg).fadeOut(10000);
                  location.reload(10000);
              }
              if(both_switch==='user'){
                  var user_id=$(".user_url").data('user_id');
                  var usertype=$('.user_url').data('usertype');
                  var user_url=$('.user_url').val();
                  $.post(usertype, {user_id:user_id,selectType:both_switch}, function (out) {
                      var msg="You logged in as User!";
                      toastr.info(msg).fadeOut(10000);
                      window.setTimeout(function () {
                         window.location.href = user_url;
                      }, 1000);
                  });
              }
              if(both_switch==='serviceprovider'){
                  var user_id=$(".sp_url").data('user_id');
                  var usertype=$('.sp_url').data('usertype');
                  $.post(usertype, {user_id:user_id,selectType:both_switch}, function (out) {
                      var sp_url=$('.sp_url').val();
                      var msg="You logged in as Service Provider!";
                      toastr.info(msg).fadeOut(10000);
                      window.setTimeout(function () {
                         window.location.href = sp_url;
                      }, 1000);
                  });
              }
           });
      }
  
      this.change_service=function (){
          $(document).on('change', '.change_service', function(e){
              var service_key = $(this).val();
              var url=$(this).data('url');
  
              $.post(url, {service_key:service_key}, function (out) {
                  if (out.result === 1) {
                      window.location.href = out.url; 
                  }
                  if (out.result === -1) {
                      var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                      $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                      $("#error_msg").html(message + out.msg);
                      $("#error_msg").fadeOut(3000);
                      $('html, body').animate({
                          scrollTop: 0
                      }, 800);
                      // window.setTimeout(function () {
                      //     // window.location.href = out.url;
                      // }, 2000);
                  }
              });
              
           });
      };
  
      this.dateBooking=function(){
          $(document).on('change','.dateBooking',function(e){
              var booking_date = $(this).val();
  
              var url=$('.datePicks').data('url');
              $.post(url,{booking_date:booking_date},function(out){
                  if (out.result === 1) {
                      $('.dateBooking').val(booking_date);
                      $('.slots').html(out.slots);
                  }
              });
          });
  
          $(document).ready(function () {
              var booking_date = $('.datePicks').data('value');
              // alert(booking_date);
              var url=$('.datePicks').data('url');
              $.post(url,{booking_date:booking_date},function(out){
                  if (out.result === 1) {
                      $('.slots').html(out.slots);
                  }
              });
          });
      };
  
      this.reload=function(){
          $(document).on('click','.reload',function(e){
              location.reload();
          });
      };
  
      
  
      this.customdeleteItem = function(){
          $(document).on('click', '.custom-delete-item', function(e){
              e.preventDefault();
              
              var title = $(this).data('title');
              var url = $(this).attr("href");
          
              swal({
                  title: $(this).data('title'),
                  icon: "warning",
                  buttons: ["No", "Yes"],
                  dangerMode: true,
                  closeOnClickOutside: false,
              })
              .then((willDelete) => {
                  if (willDelete) {
                      
                      $.post(url, '', function (out) {
                  
                          if (out.result === 0) {
                              
                              swal({
                                  title: "You cannot delete this Image.",
                                  icon: 'warning',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      location.reload();
                                  }
                              });
                          }
                          if (out.result === 1) {
                               
                              swal({
                                  title: "Deleted Succesfully!!",
                                  icon: 'success',
                                  buttons: 'OK',
                                  closeOnClickOutside: false,
                              }).then(function(isConfirm){
                                  if(isConfirm){
                                      window.setTimeout(function () {
                                          if (out.url) {
                                              window.location.href = out.url;
                                          }else{
                                              window.location.href;
                                              location.reload();
                                          }
                                      }, 2000);
                                  }
                              });
                          }
                      });
                  }else{
                      swal({
                          title: "Not Deleted!!",
                          icon: 'success',
                          buttons: 'OK',
                          closeOnClickOutside: true,
                      });
                  }
              });
          });
      };
  
      this.change_pet_category=function(){
          $(document).on('change','.change_pet_category',function(e){
               pet_category_id = $(this).val();
               url=$(this).data('url');
               $.post(url,{pet_category_id:pet_category_id},function(out){
                  if (out.result === 1) {
                      $('#pet_breed').html(out.pet_breed);
                  }
              });
          });
  
          $(document).ready(function () {
              pet_category_id = $('.change_pet_category').val();
              url=$('.change_pet_category').data('url');
              $.post(url,{pet_category_id:pet_category_id},function(out){
                 if (out.result === 1) {
                     $('#pet_breed').html(out.pet_breed);
                 }
             });
         });
          
      }
  
      this.timeslot_validation=function(){
          $(document).on('click','.timeslot_validation',function(e){
              e.preventDefault();
              dateBooking=$('.dateBooking').val();
              check_time=$('.check_time').val();
              check_slots=$('.check_slots').val();
              
               if(dateBooking==0 || dateBooking == ''){
                  var msg="Please Add Booking Date!";
                 
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                 return false;
              }
              if(check_slots==0 || check_slots == ''){
                  var msg="No Slot Availabilty!";
                  
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_time==0 || check_time == ''){
                  var msg="Please Add Booking Time!";
  
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
          });
      };
      
      this.addHideClass=function(){
          $('.hideShowBox3').hide();
          if($('.addHideClass').data('key')=='offline_vet'){
              $(document).on('change','.addHideClass ',function(e){
                  $('.hideShowBox3').show();
                  $(".validn").hide();
  
              });
          }
  
          $('.hideShowBox6').hide();
          if($('.addHideClass1').data('key')=='online_vet'){
              $(document).on('change','.addHideClass1 ',function(e){
                  $('.hideShowBox6').show();
                  $(".validn").hide();
              });
          }
      
      };
  
      this.request_type=function(){
          $('.submit_button').hide();
  
          
          $(document).on('click','.request_type ',function(e){
              // $('#preferredReq1').find('.hideShowBox4').css('display', 'none');
              $('.showRecordNew').css('display', 'none');
          });
          
          $(document).on('click','.check_request_type ',function(e){
              
              request_type=$("input[type='radio'][name='request_type']:checked").val();
              if(request_type==undefined || request_type == ''){
                  var msg="Please Select Prefrences!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }else{
                  $('.check_request_type').hide();
                  $('.submit_button').show();
                  $('.showRecordNew').css('display', 'none');
              }
          });
          
          $(document).on('click','.check_request_type1 ',function(e){
              e.preventDefault();
              // request_type=$('.request_type').val();
              request_type=$("input[type='radio'][name='request_type']:checked").val();
              
              if(request_type==undefined || request_type == ''){
                  
                  var msg="Please Select Prefrences!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              else{
                  $('.submit_button').show();
                  // $('.showRecord3').css('display','block');
                  // $('.booking_form').css('display', 'none');
                  // $('.showRecordNew').css('display', 'none');
                  $('.check_request_type1').hide();
              }
          });
      };
  
      this.common_booking=function(){
          $('.hideShowBox2').hide();
          $(document).on('click','.common_booking',function(e){
              checkPet=$('.checkPet').val();
              check_consult=$('.check_consult').val();
              check_address=$('.check_address').val();
              check_description=$('.check_description').val();
              
             
              if(checkPet==undefined || checkPet == ''){
                  var msg="Please Add Pet!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_consult==undefined || check_consult == ''){
                  var msg="Please Select Consultancy Type!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_address==undefined || check_address == ''){
                  var msg="Please Add Address!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_description==undefined || check_description == ''){
                  var msg="Please Add Description!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
  
              if(checkPet!='' && check_consult!='' && check_address!='' && check_description!=''){
                  $('.hideShowBox2').show();
                  $('.showRecord').css('display', 'none');
                  $('.showRecord2').css('display', 'block');
                  $(".validn").hide();
              }else{
                  $('.check_validation').hide();
              }
          });  
      };
  
  
  
      this.common_booking2=function(){
          $('.hideShowBox5').hide();
          $(document).on('click','.common_booking1',function(e){
              checkPet1=$('.checkPet1').val();
              check_consult1=$('.check_consult1').val();
              check_address1=$('.check_address1').val();
              check_description1=$('.check_description1').val();
             
              if(checkPet1==undefined || checkPet1 == ''){
                  var msg="Please Add Pet!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_consult1==undefined || check_consult1 == ''){
                  var msg="Please Select Consultancy Type!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_address1==undefined || check_address1 == ''){
                  var msg="Please Add Address!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_description1==undefined || check_description1 == ''){
                  var msg="Please Add Description!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
  
              if(checkPet1!='' && check_consult1!='' && check_address1!='' && check_description1!=''){
                  $('.hideShowBox5').show();
                  $('.addAddemptyFront').css('display', 'none');
                  $('.showRecordNew').css('display', 'none');
                  $('.showRecord2New').css('display', 'block');
                  $('.check_validation').hide();
              }else{
                  $('.hideShowBox5').hide();
                 
              }
          });
  
          
      };
  
      this.common_booking3=function(){
          $('.hideShowBox2').hide();
          $(document).on('click','.common_booking3',function(e){
              // prescription_file=$('.prescription_file').val();
              check_address1=$('.check_address1').val();
              check_description1=$('.check_description1').val();
              // alert(prescription_file);
             
              // if(prescription_file==undefined || prescription_file == 0){
              //     var msg="Please Add Prescription file!";
              //     var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
              //     $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
              //     $("#error_msg").html(message + msg);
              //     $("#error_msg").fadeOut(3000);
              //     $('html, body').animate({
              //         scrollTop: 0
              //     }, 800);
              //     return false;
              // }
              
              if(check_address1==undefined || check_address1 == ''){
                  var msg="Please Add Address!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_description1==undefined || check_description1 == ''){
                  var msg="Please Add Description!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
  
              if(check_address1!='' && check_description1!=''){
                  $('.hideShowBox2').show();
                  $(".check_validation").hide();
                  
                  $('.showRecord').css('display', 'none');
                  $('.showRecord2').css('display', 'block');
              }else{
                  $('.hideShowBox2').hide();
                 
              }
          });
  
          
      };
  
      this.common_booking4=function(){
          $('.hideShowBox2').hide();
          $(document).on('click','.common_booking4',function(e){
              check_description1=$('.check_description1').val();
              if(check_description1==undefined || check_description1 == ''){
                  var msg="Please Add Description!";
                  var message = '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close"></button>';
                  $("#error_msg").removeClass('alert-warning alert-success admin_chk_suc').addClass('alert alert-danger alert-dismissable admin_chk_dng').show();
                  $("#error_msg").html(message + msg);
                  $("#error_msg").fadeOut(3000);
                  $('html, body').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              }
              if(check_description1!=''){
                  $('.hideShowBox2').show();
                  $(".check_validation").hide();
                  
                  $('.showRecord').css('display', 'none');
                  $('.showRecord2').css('display', 'block');
              }else{
                  $('.hideShowBox2').hide();
                 
              }
          });
  
          
      };
      
  
      
  
    this.__construct();
  };
  var obj = new Event();