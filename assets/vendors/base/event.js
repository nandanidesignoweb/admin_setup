var Event = function () {
	this.__construct = function () {
		this.loader();
		this.tooltip();
		this.commonForm();
		this.commonFormreset();
		this.imageCommonForm();
		this.imageCommonFormNew();
		this.contentWrapper();
		this.changeStatus();
		this.delete();
		this.deleteImage();
		this.doUpdateOrderStatus();
		this.changeBannerStatus();
		this.categoryId();
		this.subCategoryId();
		this.changeModuleStatus();
		
	};

	this.loader = function () {
		$(document).ready(function () {
			$(".loader-admin").fadeOut("slow");
		});
	};

	this.tooltip = function () {
		$(document).ready(function () {
			$('[data-toggle="tooltip"]').tooltip();
		});
	};

	this.commonForm = function () {
		$(document).on("submit", "#common-form", function (evt) {
			evt.preventDefault();
			$(".loader").fadeIn("slow");
			var url = $(this).attr("action");
			var postdata = $(this).serialize();
			$.post(url, postdata, function (out) {
				$(".loader").fadeOut("slow");
				$(".form-group > .text-danger").remove();
				if (out.result === 0) {
					for (var i in out.errors) {
						$("#" + i)
							.parents(".form-group")
							.append('<span class="text-danger">' + out.errors[i] + "</span>");
					}
				}
				if (out.result === -1) {
					var message =
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-danger alert-success")
						.addClass("alert alert-danger alert-dismissable")
						.show();
					$(".error_msg").html(message + out.msg);
					$(".error_msg").fadeOut(5000);
				}
				if (out.result === -2) {
					var message =
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-danger alert-success")
						.addClass("alert alert-danger alert-dismissable")
						.show();
					$(".error_msg").html(message + out.msg);
					$(".error_msg").fadeOut(2000);
					window.setTimeout(function () {
						window.location.href = out.url;
					}, 1000);
				}
				if (out.result === 1) {
					var message =
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-danger alert-danger")
						.addClass("alert alert-success alert-dismissable")
						.show();
					$(".error_msg").html(message + out.msg);
					$(".error_msg").fadeOut(2000);
					if (out.url !== undefined) {
						window.setTimeout(function () {
							window.location.href = out.url;
						}, 1000);
					}
				}
			});
		});
	};

	this.commonFormreset = function () {
		$(document).on("submit", "#common-form-reset", function (evt) {
			evt.preventDefault();
			$(".loader").fadeIn("slow");
			var url = $(this).attr("action");
			var postdata = $(this).serialize();
			$.post(url, postdata, function (out) {
				$(".loader").fadeOut("slow");
				$(".form-group > .text-danger").remove();
				if (out.result === 0) {
					for (var i in out.errors) {
						$("#" + i)
							.parents(".form-group")
							.append('<span class="text-danger">' + out.errors[i] + "</span>");
					}
				}
				if (out.result === -1) {
					var message =
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-danger alert-success")
						.addClass("alert alert-danger alert-dismissable")
						.show();
					$(".error_msg").html(message + out.msg);
					$(".error_msg").fadeOut(2000);
				}
				if (out.result === 1) {
					$("#common-form-reset")[0].reset();
					var message =
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-danger alert-danger")
						.addClass("alert alert-success alert-dismissable")
						.show();
					$(".error_msg").html(message + out.msg);
					$(".error_msg").fadeOut(2000);
					window.reload();
				}
			});
		});
	};

	this.imageCommonForm = function () {
		 
		$("#image-common-form").submit(function (evt) {
			evt.preventDefault();
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
						for (var i in out.errors) {
							$("#" + i)
								.parents(".form-group")
								.append('<span class="error">' + out.errors[i] + "</span>");
							$("#" + i).focus();
						}
					}
					if (out.result === -1) {
						var message =
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
						$("#error_msg")
							.removeClass("alert-warning alert-success")
							.addClass("alert alert-danger alert-dismissable")
							.show();
						$("#error_msg").html(message + out.msg);
						$("#error_msg").fadeOut(2000);
						if (out.url) {
							window.location.href = out.url;
						}
					}
					if (out.result === -2) {
						var message =
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
						$("#error_msg")
							.removeClass("alert-danger alert-success")
							.addClass("alert alert-danger alert-dismissable")
							.show();
						$("#error_msg").html(message + out.msg);
						$("#error_msg").fadeOut(2000);
						window.setTimeout(function () {
							window.location.href = out.url;
						}, 1000);
					}
					if (out.result === 1) {
						var message =
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
						$("#error_msg")
							.removeClass("alert-danger alert-danger")
							.addClass("alert alert-success alert-dismissable")
							.show();
						$("#error_msg").html(message + out.msg);
						$("#error_msg").fadeOut(2000);
						window.location.href = out.url;
					}
				},
			});
		});
	};

	this.imageCommonFormNew = function () {
		$(document).on("submit", "#image-common-form-new", function (evt) {
			evt.preventDefault();
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
						for (var i in out.errors) {
							$("#" + i)
								.parents(".form-group")
								.append('<span class="error">' + out.errors[i] + "</span>");
							$("#" + i).focus();
						}
					}
					if (out.result === -1) {
						var message =
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
						$(".error_msg")
							.removeClass("alert-warning alert-success")
							.addClass("alert alert-danger alert-dismissable")
							.show();
						$(".error_msg").html(message + out.msg);
						$(".error_msg").fadeOut(5000);
						$("html, body").animate(
							{
								scrollTop: 0,
							},
							800
						);
						return false;

						if (out.url) {
							window.location.href = out.url;
						}
					}

					if (out.result === 1) {
						var message =
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
						$(".error_msg")
							.removeClass("alert-warning alert-success")
							.addClass("alert alert-success alert-dismissable")
							.show();
						$(".error_msg").html(message + out.msg);
						window.setTimeout(function () {
							$(".error_msg").slideUp();
							if (out.url) {
								window.location.href = out.url;
							}
						}, 2000);
					}
				},
			});
		});
	};

	this.contentWrapper = function () {
		$(document).ready(function () {
			var url = $("#content-wrapper").data("url");
			if(!url){
				$("#dom-jqry_wrapper").DataTable({
					responsive: true,
					destroy: true,
				});
			}else{
				$.post(url, "", function (out) {
					if (out.result === 1) {
						$("#content-wrapper").html(out.content_wrapper);
						$("#dom-jqry_wrapper").DataTable({
							responsive: true,
							destroy: true,
						});
					}
				});
			}
		});
	};

	this.changeStatus = function () {
		$(document).on("change", ".order-status", function (e) {
			e.preventDefault();
			var url = $(this).attr("data-url");
			var status = $(this).val();
			$.post(url, { status: status }, function (out) {
				if (out.result === 1) {
					var message =
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-warning alert-success")
						.addClass("alert alert-success alert-dismissable")
						.show();
					$(".error_msg").html(message + "Status changes successfully.");
					window.setTimeout(function () {
						$(".error_msg").slideUp();
					}, 2000);
					obj.contentWrapper();
				}
			});
		});
	};
	this.changeBannerStatus=function(){
		$(document).on("click",".banner-status",function (e){
			e.preventDefault();
			var url=$(this).attr("href");
			$.post(url,{},function (out){
				if(out.result===1){
					var message=
					'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-warning alert-success")
						.addClass("alert alert-success alert-dismissable")
						.show();
					$(".error_msg").html(message + "Status changes successfully.");
					window.setTimeout(function () {
						$(".error_msg").slideUp();
					}, 2000);
					obj.contentWrapper();
				}

			});

		});
	};

	this.delete = function () {
		$(document).on("click", ".delete", function (e) {
			e.preventDefault();
			var url = $(this).attr("href");
			var result = confirm("Are You Sure, You Want To Delete");
			if (result === true) {
				$.post(url, "", function (out) {
					location.reload();
				});
			}
		});
	};

	this.deleteImage = function () {
		$(document).on("click", ".delete-image", function (e) {
			e.preventDefault();
			var url = $(this).attr("href");
			var result = confirm("Are You Sure, You Want To Delete");
			if (result === true) {
				$.post(url, "", function () {
					obj.contentWrapper();
				});
			}
		});
	};

	this.doUpdateOrderStatus = function () {
		$(document).on("change", ".order_status", function (evt) {
			evt.preventDefault();
			var selectedValue = $(this).val();
			var url = $(this).attr("data-url");
			$.post(url, { status: selectedValue }, function (out) {
				window.location.href = out.url;
			});
		});
	};

	this.categoryId = function () {

		$(document).on("change", "#category_id", function (evt) {
			evt.preventDefault();
	  
			var url = $("#category_id").data("url");
			var category_id = $("#category_id").val();

			$.ajax({
			  url: url,
			  type:"POST",
			  data:{
				category_id:category_id,
			  },
			  success:function(response){
				$("#sub_category_id").html(response.html);
			  },
			});
		});
	};


	this.subCategoryId = function () {

		$(document).on("change", "#sub_category_id", function (evt) {
			evt.preventDefault();
			var url = $("#sub_category_id").data("url");
			var sub_category_id = $("#sub_category_id").val();
			$.ajax({
			  url: url,
			  type:"POST",
			  data:{
				sub_category_id:sub_category_id,
			  },
			  success:function(response){
				$("#child_category_id").html(response.html);
			  },
			});
		});
	};

	this.changeModuleStatus=function(){
		$(document).on("click",".status",function (e){
			e.preventDefault();
			var url=$(this).attr("href");
			$.post(url,{},function (out){
				if(out.result===1){
					var message=
					'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					$(".error_msg")
						.removeClass("alert-warning alert-success")
						.addClass("alert alert-success alert-dismissable")
						.show();
					$(".error_msg").html(message + "Status changes successfully.");
					window.setTimeout(function () {
						$(".error_msg").slideUp();
					}, 2000);
					obj.contentWrapper();
				}
			});
		});
	};

	
	this.__construct();
};
var obj = new Event();
