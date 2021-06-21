$(document).ready(function () {


	$('.burger').click(function (event) {
		//alert('hhh');
		//$(".burger , .burger-menu,.header-footer__menu1").toggleClass('active');
		$(".burger ,.header-footer__menu1").toggleClass('active');
		$("body").toggleClass('lock');
		//$('.burger-menu.active').css('display','block');
		//$('.burger-menu').fadeOut(0);
		//$('.burger-menu.active').fadeIn(500);
	});

	//$(".burger").addClass('active');

	$('.bloc1 li').click(function (event) {
		$("li.active").removeClass('active');
		$(this).addClass('active');
	});
	$('.bloc2 li').click(function (event) {

		$(this).parent('ul').children('.active').removeClass('active');
		$(this).addClass('active');


	});






	/*
		function isEmail(email) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
		}
	
		form.addEventListener('submit', e => {
			e.preventDefault();
			$('#formName').siblings('span').text('');
			$('#formEmail').siblings('span').text('');
			$('.form__input').removeClass('_error');
	
			if ($('#formName').val() === '') {
				$('#formName').siblings('span').text('Не заполнено поле имя');
				$('#formName').addClass('_error');
			}
			if (isEmail($('#formEmail').val()) === false) { 
				$('#formEmail').siblings('span').text('Не коректно заполнено поле Email');
				$('#formEmail').addClass('_error');
			}
			if ($('#formEmail').val() === '') {
				$('#formEmail').siblings('span').text('Не заполнено поле имя');
				$('#formEmail').addClass('_error');
				
			}
		});
	*/
	var d;
	var i;
	$(function () {
	$('form').submit(function (e) {
		var form = $(this);
		e.preventDefault();
		//console.log(form);
		//alert('yyyy');
		$(this).find('span').text('');
		$(this).find('._error').removeClass('_error');

		$(this).find('._req').each(function () {
			if ($.trim($(this).val()) === '') {
				$(this).next().text("Не заполнено поле  " + $(this).prev().text());
				$(this).addClass('_error');
			}


			else {
				console.log($('form').serialize());


				$.ajax({
					type: "POST",
					url: "send.php",
					data: form.serialize(),
					beforeSend: function () {
						$('.form__body').addClass('_load');
					},
					success: function (res) {
						$('.form__body').removeClass('_load');
						alert(res);

						// $('form').find('input:not(#submit),textarea').val('');
					},
					error: function () {
						alert('error');
					}

				}, 2000);
			}
		});
	})


	})














});//end











