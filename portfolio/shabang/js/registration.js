var home = {
	currentPane : "home", 
	btnClicked : ""
};


$(document).ready(function () {

	// main function
	$(function () {

		var mobileOptionsBtn = "off";
		var mobileSearchBtn  = "off";
		var skipButton = true;

		winWidth();

		// TEMP NAVIGATION for preview
		// This should be removed once backend code is tied in
		//...............................
		// Index Form to Talent Role Selection
		$('#firstNextButton').click(function(e){
			window.location = "reg_role_talent.html";
		});

		// Talent Role to Photo Upload Selection
		$('#secondNextButton').click(function(e){
			window.location = "reg_photo_upload.html";
		});

/*
____   ____      .__  .__    .___       __  .__               
\   \ /   /____  |  | |__| __| _/____ _/  |_|__| ____   ____  
 \   Y   /\__  \ |  | |  |/ __ |\__  \\   __\  |/  _ \ /    \ 
  \     /  / __ \|  |_|  / /_/ | / __ \|  | |  (  <_> )   |  \
   \___/  (____  /____/__\____ |(____  /__| |__|\____/|___|  /
               \/             \/     \/                    \/
*/

		// FORM mVALIDATION
		//...............................

		// PROFILE NAME on focus
		$("#profileName").focus(function () {
	        var name = $("#profileName").val();
	        if (name.length >= 1 && name.length <= 26) {
	            $('.instructionPName').hide();
	        }
	        else {
	            $('.instructionPName').html('1-26 alphanumeric characters');
	            $('.instructionPName').css('color', '#fff');
	            $('.instructionPName').css('position', 'relative');
	            $('.instructionPName').show();
	        }
	        checkPageForm();
	    });

		// PROFILE NAME on blur
		$("#profileName").blur(function () {
	        var name = $("#profileName").val();
	        if (name.length >= 1 && name.length <= 26) {
	            checkUserName();
	        } else {
	        	$('.instructionPName').html('1-26 alphanumeric characters');
	        	$('.instructionPName').css('color', '#85398c');
	        	$('.instructionPName').css('position', 'relative');
	            $('.instructionPName').show();
	            $('.invalidPName').show();
	            $('.validPName').hide();
	        }
	        checkPageForm();
	    });

		// PROFILE NAME Dirty Words Check
	    var dirtyWordsArray = ['bitch','shit', 'piss', 'fuck', 'cunt', 'cocksucker', 'motherfucker', 'tits'];

		function checkForDirtyWords(fieldVal) {
		    var result = false;
		    $.each(dirtyWordsArray, function (key, value) {
		        if (fieldVal.toLowerCase().indexOf(value) != -1) {
		            result = true;
		        }
		    });
		    return result;
		}

		// PROFILE NAME Validation
	    function checkUserName() {
		    var name = $("#profileName").val();

		    if (name.length > 1 && name.length < 27) {

		    	$('.instructionPName').hide();
		    	$('.validPName').show();
		        $('.invalidPName').hide();

		        // if (!checkForDirtyWords(name)) {
		        //     $.ajax({
		        //         type: "Post",
		        //         url: "../../scripts/handlers/usernamecheck.ashx",
		        //         async: false,
		        //         data: { "userName": name },
		        //         success: function (data) {
		        //             nameResult(data);
		        //         },
		        //         error: function () { alert('error'); }
		        //     });
		        // } else {
		        //     $('.instructionPName').css('color', '#85398c');
		        //     $('.instructionPName').html('Invalid profile name');
		        //     $('.instructionPName').show();
		        //     $('.validPName').hide();
		        //     $('.invalidPName').show();
		        // }
		    } else {
		        $('.instructionPName').css('color', '#85398c');
		        $('.instructionPName').html('1-26 alphanumeric characters');
		        $('.instructionPName').show();
		        $('.validPName').hide();
		        $('.invalidPName').show();
		    }
		}

		// EMAIL Focus
		$("#formEmail").focus(function () {
	        var email = $.trim($('#formEmail').val());
	        if (email == "") {
	            $('.instructionEmail').html("Please include an email in a valid format.");
	            $('.instructionEmail').show();
	            $('.invalidEmail').hide();
	        } else if (email != "") {
	            var validFormat = /^\w(\.?\w)*@\w(\.?[-\w])*\.([a-z]{3}(\.[a-z]{2})?|[a-z]{2}(\.[a-z]{2})?)$/i;
	            var eValid = validFormat.test(email);
	            $('.invalidEmail').hide();
	            if (eValid) {
	                $('.instructionEmail').html("Please include an email in a valid format.");
	            } else {
	                $('.instructionEmail').html("Please include an email in a valid format.");
	                $('.instructionEmail').show();
	            }
	        }
	        checkPageForm();
	    });

		// EMAIL Blur
	    $("#formEmail").blur(function () {
	        var email = $.trim($('#formEmail').val());

	        if (email == "" || checkForDirtyWords(email)) {
	            $('.instructionEmail').css("color", "#85398C");
	            $('.instructionEmail').html("Please include an email in a valid format.");
	            $('.instructionEmail').show();
	            $('.invalidEmail').show();
	            $('.validEmail').hide();
	        }
	        else if (email != "") {
	            var validFormat = /^\w(\.?\w)*@\w(\.?[-\w])*\.([a-z]{3}(\.[a-z]{2})?|[a-z]{2}(\.[a-z]{2})?)$/i;
	            var eValid = validFormat.test(email);
	            if (!eValid) {
	                $('.instructionEmail').css("color", "#85398C");
	                $('.instructionEmail').html("Please include an email in a valid format.");
	                $('.instructionEmail').show();
	                $('.invalidEmail').show();
	                $('.validEmail').hide();
	            } else {
	                checkEmailExists();
	            }
	        }
	        checkPageForm();
	    });

		// EMAIL CHECK on Database
		function checkEmailExists() {

			emailResult('0');

			// var email = $.trim($('#formEmail').val());
			// $.ajax({
			// 	type: "Post",
			// 	url: "/scripts/handlers/emailcheck.ashx",
			// 	async: false,
			// 	data: { "email": email },
			// 	success: function (data) {
			// 	   emailResult(data);
			// 	},
			// 	error: function () {
			// 	   alert('error');
			// 	}
			// }); 
		}

		// EMAIL Result
		function emailResult(data) {
			if (data == "1") {
				$('.instructionEmail').css("color", "#85398C");
				$('.instructionEmail').html("Email already exists please enter a different email");
				$('.instructionEmail').show();
				$('.invalidEmail').show();
				$('.validEmail').hide();
			}
			else {
				$('.validEmail').show();
				$('.invalidEmail').hide();
				$('.instructionEmail').hide();
			}
		}

		// FIRST LAST NAME
		$('#firstName').focus(function () {
	        var firstName = $("#firstName").val();
	        var lastName = $("#lastName").val();

	        if (firstName.length <= 1 || lastName.length <= 1) {
	            $('.instructionFirstName').show();
	            $('.instructionFirstName').css("color", "#fff");
	            $('.validfirstName').hide();
	            // $('.invalidfirstName').show();
	        }
	        checkPageForm();
	    });

	    $('#firstName').blur(function () {
	        var firstName = $("#firstName").val();
	        var lastName = $("#lastName").val();

	        if (firstName.length <= 1 || lastName.length <= 1) {
	            $('.instructionFirstName').css("color", "#85398C");
	            $('.instructionFirstName').show();
	            $('.invalidfirstName').show();
	            $('.validfirstName').hide();
	        } else if (checkForDirtyWords(firstName)) {
	            $('.instructionFirstName').css("color", "#85398C");
	            $('.instructionFirstName').show();
	            $('.invalidfirstName').show();
	            $('.validfirstName').hide();
	        } else if (firstName.length > 1 && firstName.length < 27) {
	            $('.instructionFirstName').hide();
	            $('.invalidfirstName').hide();
	            $('.validfirstName').show();
	        } else if (firstName.length >= 27) {
	            $('.instructionFirstName').html("That's a little long! 26 characters or less, please");
	            $('.instructionFirstName').show();
	        }

	        checkPageForm();
	    });

	    $('#lastName').focus(function () {
	        var lastName = $("#lastName").val();
	        var firstName = $("#firstName").val();

	        if (firstName.length <= 1 || lastName.length <= 1) {
	            $('.instructionFirstName').show();
	            $('.instructionFirstName').css("color", "#fff");
	            $('.validfirstName').hide();
	            // $('.invalidfirstName').show();
	        }
	        checkPageForm();
	    });

	    $('#lastName').blur(function () {
	        var lastName = $("#lastName").val();
	        var firstName = $("#firstName").val();

	        if (firstName.length <= 1 || lastName.length <= 1) {
	            $('.instructionFirstName').css("color", "#85398C");
	            $('.instructionFirstName').show();
	            $('.invalidfirstName').show();
	            $('.validfirstName').hide();
	        } else if (checkForDirtyWords(lastName)) {
	            $('.instructionFirstName').css("color", "#85398C");
	            $('.instructionFirstName').show();
	            $('.invalidfirstName').show();
	            $('.validfirstName').hide();
	        } else if (firstName.length > 1 || lastName.length > 1) {
	            $('.instructionFirstName').hide();
	            $('.invalidfirstName').hide();
	            $('.validfirstName').show();

	            if (firstName.length >= 27 || lastName.length >= 27) {
		            $('.instructionFirstName').html("That's a little long! 26 characters or less, please");
		            $('.instructionFirstName').show();
		        }
	        }
	        console.log('lastName.length = '+lastName.length);
	        checkPageForm();
	    });

		// PASSWORD
		$('#password1').focus(function () {

	        var password = $('#password1').val();
	        $('.password-meter').show();

	        $.validator.passwordRating.messages = {
	            "similar-to-username": "Too similar to username",
	            "too-short": "Enter 6-18 alphanumeric characters including at least 1 number",
	            "very-weak": "Very weak",
	            "weak": "Weak",
	            "good": "Good",
	            "strong": "Strong"
	        }

	        $(this).valid();
	        $('.password-meter').show();
	        
	        if (password.length > 1 && password.length <= 18) {
	           $(this).valid();
	           $('.password-meter').show();
	        } else {
	           $('.password-meter').hide();
	        }

	        checkPageForm();
	    });

	    $('#password1').blur(function () {

	        var password = $('#password1').val();
	        //$('.password-meter').hide();

	        if (password.length >= 6 && password.length <= 18) {
	            $('.invalidPassword').hide();
	            $('.instructionPassword').hide();
	            $('.validPassword').show();
	            $('.password-meter').show();
	        } else {
	            $('.validPassword').hide();
	            $('.password-meter').hide();
	            $('.invalidPassword').show();
	            $('.instructionPassword').show();
	        }

	        checkPageForm();
	    });

	    $('#password1').keyup(function () {

	    	//console.log('#password1 keyup');
	    	$('.password-meter').show();
	        $(this).valid();
	    });

	    // RETYPE PASSWORD2
	    $('#password2').focus(function () {

	        $.validator.passwordRating.messages = {
	            "similar-to-username": "Too similar to username",
	            "too-short": "",
	            "very-weak": "Very weak",
	            "weak": "Weak",
	            "good": "Good",
	            "strong": "Strong"
	        }

	        var password1 = $('#password1').val();
	        var password2 = $('#password2').val();

	        if (password2.length > 1) {
	            if (password1.length > 1 && password1.length <= 15) {
	                if (password2 == password1) {
	                    $('.validPassword2').show();
	                    $('.instructionPassword2').hide();
	                    $('.invalidPassword2').hide();
	                }
	                else {
	                    $('.validPassword2').hide();
	                    $('.instructionPassword2').css("color", "#85398C");
	                    $('.instructionPassword2').show();
	                    $('.invalidPassword2').show();
	                }
	            }
	        }
	        checkPageForm();
	    });

	    $('#password2').blur(function () {
	        var password1 = $('#password1').val();
	        var password2 = $('#password2').val();

	        if (password2.length > 1) {
	            if (password1.length > 1 && password1.length <= 15) {
	                if (password2 == password1) {
	                    $('.validPassword2').show();
	                    $('.instructionPassword2').hide();
	                    $('.invalidPassword2').hide();
	                }
	                else {
	                    $('.validPassword2').hide();
	                    $('.instructionPassword2').css("color", "#85398C");
	                    $('.instructionPassword2').show();
	                    $('.validPassword2').hide();
	                }
	            }
	        } else {
	            $('.validPassword2').hide();
	            $('.validPassword2').hide();
	            $('.invalidPassword2').hide();
	            $('.instructionPassword2').hide();
	        }
	        checkPageForm();
	    });

		// DATE
		$('#bYear').focus(function () {
        $('.instructionDate').show();
        $('.validDate').hide();
        $('.invalidDate').hide();
	        checkPageForm();
	    });

	    $('#bDay').focus(function () {
	        $('.instructionDate').show();
	        $('.validDate').hide();
	        $('.invalidDate').hide();
	        checkPageForm();
	    });

	    $('#bMonth').focus(function () {
	        $('.instructionDate').show();
	        $('.validDate').hide();
	        $('.invalidDate').hide();
	        checkPageForm();
	    });

	    $('#bYear').blur(function () {
	        var year = $('#bYear').val();
	        var month = $('#bMonth').val();
	        var day = $('#bDay').val();
	        var birthDay = new Date(year, month, day);
	        var oldEnough = checkBirthday(birthDay);

	        if (oldEnough) {
	            $('.instructionDate').hide();
	            $('.validDate').show();
	            $('.invalidDate').hide();
	        }
	        else {
	            $('.instructionDate').css("color", "#85398C");
	            $('.instructionDate').show();
	            $('.validDate').hide();
	            $('.invalidDate').hide();
	        }
	        checkPageForm();
	    });

	    $('#bYear').blur(function () {
	        var year = $('#bYear').val();
	        var month = $('#bMonth').val();
	        var day = $('#bDay').val();
	        var birthDay = new Date(year, month, day);

	        var oldEnough = checkBirthday(birthDay);

	        if (oldEnough) {
	            $('.instructionDate').hide();
	            $('.validDate').show();
	            $('.invalidDate').hide();
	        }
	        else {
	            $('.instructionDate').css("color", "#85398C");
	            $('.instructionDate').show();
	            $('.validDate').hide();
	            $('.invalidDate').show();
	        }
	        checkPageForm();
	    });
	    
	    $('#bMonth').blur(function () {
	        var year = $('#bYear').val();
	        var month = $('#bMonth').val();
	        var day = $('#bDay').val();
	        var birthDay = new Date(year, month, day);

	        var oldEnough = checkBirthday(birthDay);

	        if (oldEnough) {
	            $('.instructionDate').hide();
	            $('.validDate').show();
	            $('.invalidDate').hide();
	        }
	        else {
	            $('.instructionDate').css("color", "#85398C");
	            $('.instructionDate').show();
	            $('.validDate').hide();
	            $('.invalidDate').show();
	        }
	        checkPageForm();
	    });
	    
	    $('#bDay').blur(function () {
	        var year = $('#bYear').val();
	        var month = $('#bMonth').val();
	        var day = $('#bDay').val();
	        var birthDay = new Date(year, month, day);

	        var oldEnough = checkBirthday(birthDay);

	        if (oldEnough) {
	            $('.instructionDate').hide();
	            $('.validDate').show();
	            $('.invalidDate').hide();
	        }
	        else {
	            $('.instructionDate').css("color", "#85398C");
	            $('.instructionDate').show();
	            $('.validDate').hide();
	            $('.invalidDate').show();
	        }
	        checkPageForm();
	    });

		function checkBirthday(bDay) {
			var today = new Date();
			today.setDate(today.getDate());
			
			var diff = today - bDay;
			diff = Math.floor(diff / 31536000000);
			if(diff >= 13) {
				return true;
			}
			else {
				return false;
			}
		}

		$(function() {
		var ysel = document.getElementsByName("year")[0],
			// msel = document.getElementsByName("month")[0],
			dsel = document.getElementsByName("day")[0];
		for (var i = 2000; i >= 1900; i--) {
			var opt = new Option();
			opt.value = opt.text = i;
			ysel.add(opt);
		}
			validate_date();
			ysel.addEventListener("change", validate_date);
			// msel.addEventListener("change", validate_date);
		});

		function validate_date() {
			//var y = + ysel.value, m = msel.value, d = dsel.value;
			var y = $('#bYear').val();
			var m = $('#bMonth').val();
			var d = $('#bDay').val();
			
			if (m === "2")
				var mlength = 28 + (!(y & 3) && ((y % 100)!==0 || !(y & 15)));
			else var mlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
			$('#bDay').empty();
			for (var i = 1; i <= mlength; i++) {
				var opt = new Option();
				opt.value = opt.text = i;
				if (i == d) opt.selected = true;
				$('#bDay').append(opt);
				var x = $('#bDay').length;
			}
		}

		// GENDER SELECTION
		$('#gender').focus(function () {
	        var gender = $('#gender').val();

	        if (gender == null) {
	            $('.instructionGender').show();
	            /*$('.validGender').show();
	            $('.invalidGender').hide();*/
	        }
	        checkPageForm();
	    });

	    $('#gender').blur(function () {
	        var gender = $('#gender').val();

	        if (gender == null) {

	            $('.instructionGender').show();
	            $('.validGender').hide();
	            $('.invalidGender').show();
	        } else {
	            $('.instructionGender').hide();
	            $('.validGender').show();
	            $('.invalidGender').hide();
	        }

	        checkPageForm();
	    });

	    // LOCATION
	    $('#location').focus(function () {
	        var location = $('#location').val();

	        if (location.length > 0) {
	            $('.instructionLocation').hide();
	        } else {
	            $('.instructionLocation').css("color", "#99999");
	            $('.instructionLocation').show();
	        }

	        checkPageForm();
	    });

	    $('#location').blur(function () {
	        var location = $('#location').val();

	        if (location.length > 0) {
	            $('.instructionLocation').hide();
	            $('.validLocation').show();
	            $('.invalidLocation').hide();
	        } else {
	            $('.instructionLocation').css("color", "#85398C")
	            $('.instructionLocation').show();
	            $('.validLocation').hide();
	            $('.invalidLocation').show();
	        }

	        checkPageForm();
	    });

	    var currentRequest = null;
	    $("#location").focus(function (e) {
	        e.preventDefault();
	    });

	    $("#location").keyup(function (e) {
	        if (e.keyCode == 8) {
	            if (currentRequest != null) {
	                currentRequest.abort();
	            }
	        }

	        if ($("#location").val().trim() != '' && e.keyCode != 8) {

	            $("#locationsList").hide();
	            $(".dLocationList").show();
	            $(".rProgress").show();

	            currentRequest = $.ajax({
	                type: "post",
	                url: "../scripts/handlers/MetroplexLocations.ashx",
	                data: { "searchLocation": $("#location").val().trim() },
	                dataType: "json",
	                beforeSend: function () {
	                    if (currentRequest != null) {
	                        currentRequest.abort();
	                        //$('#location').trigger('keyup');
	                    }
	                },
	                success: function (msg) {
	                    if (msg.locations.length > 0) {
	                        $(".rProgress").hide();
	                        $("#locationsList").html("");
	                        //$("#dLocationList").width($("#location").width() + 50);
	                        $("#locationsList").show();

	                        $.each(msg.locations, function (i) {
	                            $("#locationsList").append("<li>" + this + "</li>");
	                        });

	                        $("#locationsList li").click(function () {
	                            $('#location').val($(this).text());
	                            $('#hdLocation').val($(this).text());
	                            $(".dLocationList").hide();
	                            $("#locationsList").hide();

	                            checkPageForm();
	                        });
	                        $(".dLocationList").show();
	                    } else {
	                        $(".dLocationList").hide();
	                        $("#locationsList").hide();
	                    }
	                }
	            });
	        } else {
	            $(".dLocationList").hide();
	            $("#locationsList").hide();
	        }
	    });

		function checkPageForm() {
			var errorCount 	= 0;
			var name 		= $("#profileName").val();
			var location 	= $('#location').val();
			var email 		= $.trim($('#formEmail').val());
			var firstName 	= $("#firstName").val();
			var lastName 	= $("#lastName").val();
			var year 		= $('#bYear').val();
			var month 		= $('#bMonth').val();
			var day 		= $('#bDay').val();
			var birthDay 	= new Date(year, month, day);
			var oldEnough 	= checkBirthday(birthDay);
			var gender 		= $('#gender').val();
			var password 	= $('#password1').val();
			var password2 	= $('#password2').val();

			if (name.trim().length <= 0 || name.trim().length > 26) {
			    errorCount++;
			} else if (checkForDirtyWords(name.trim())) {
			    errorCount++;
			}

			if (email.trim() == "" || checkForDirtyWords(email.trim())) {
		        errorCount++;
		    } else if (email.trim() != "") {
				var validFormat = /^\w(\.?\w)*@\w(\.?[-\w])*\.([a-z]{3}(\.[a-z]{2})?|[a-z]{2}(\.[a-z]{2})?)$/i;
				var isValid = validFormat.test(email.trim());
				if(!isValid) {
					errorCount++;
				}
		    }
		    
			if(firstName.trim().length == 0 || checkForDirtyWords(firstName.trim())) {
				errorCount++;
			}
		    if (lastName.trim().length == 0 || checkForDirtyWords(firstName.trim())) {
				errorCount++;
			}
			if(!oldEnough) {
				errorCount++;
			}
			if(gender == null) {
			    errorCount++;
			} 
			// if(location.trim().length <= 6) {
			// 	errorCount++;
			// }

		    if (password.trim().length <= 3 || password.trim().length > 18) {
				errorCount++;
			}
		    // Leon terms Edit:
			// if(!$('#tAgree').attr('checked')) {
			// 	errorCount++;
			// }
			
			if(password2 != password) {
				errorCount++;
			}
			
			if(errorCount == 0) {
				
				// set upload image label
				$("#users_firstName").html($('#pName').val());
				
				//enable next button
				$('.inactive_next').hide();
				$('.active_next').show();
			}
			else {
				$('.inactive_next').show();
				$('.active_next').hide();
			}
			
		}

/*
__________                                          .__              
\______   \ ____   ____________   ____   ____   _____|__|__  __ ____  
 |       _// __ \ /  ___/\____ \ /  _ \ /    \ /  ___/  \  \/ // __ \ 
 |    |   \  ___/ \___ \ |  |_> >  <_> )   |  \\___ \|  |\   /\  ___/ 
 |____|_  /\___  >____  >|   __/ \____/|___|  /____  >__| \_/  \___  >
        \/     \/     \/ |__|               \/     \/              \/
*/

		// mRESPONSIVE CHECK Window size
		//...............................
		var $window = $(window);
		$(window).resize(function() {
			
			var windowsize = $window.width();
			//console.log('windowsize = '+windowsize);
			//console.log('form-wrapper width = '+$('.form-wrapper').width());

			if (windowsize > 640) {
				// Hide mobile opttions
				if (mobileOptionsBtn === 'on'){
					$('.head-wrapper .options-menu').css('display', 'none');
				}
				if (mobileSearchBtn === 'on'){
					$('.head-wrapper .options-search').css('display', 'none');
				}
			}
		});

		// Re-arrange Content
    	//...............................
    	$.fn.moveTo = function(selector) {
            return this.each(function() {
                var cl = $(this).clone();
                $(cl).appendTo(selector);
                $(this).remove();
            });
        };

        function winWidth() {
        	//console.log('winWidth');
        	var $window = $(window);
			var windowsize = $window.width();
        }

		// THE SIGN UP FORM
		//...............................
		function checkFormWidth() {

        	//var windowsize = $window.width();
        	var formWidth = $('.form-wrapper').width();

	    }

	    // THE TALENT ROLES
		//...............................
		

/*
__________        __    __                        
\______   \__ ___/  |__/  |_  ____   ____   ______
 |    |  _/  |  \   __\   __\/  _ \ /    \ /  ___/
 |    |   \  |  /|  |  |  | (  <_> )   |  \\___ \ 
 |______  /____/ |__|  |__|  \____/|___|  /____  >
        \/                              \/     \/ 
*/

		// SIGN UP USER ROLE BUTTONS: Logo, Login, SignUp, Form, search, search-mobile, photo_upload
		//...............................
    	$('.user-action').click(userActions);
    	function userActions(event) {

	        home.currentPane = $(this).data('pane');
	        home.btnClicked  = $(this).data('btn');
	        
	        // check currentPage and hide
	        switch (home.currentPane) {
        		case 'home':
        			$('#panel-home').css('display', 'none');
        			$('#panel-login').css('display', 'none');
        			break;
        		case 'login':
        			$('#panel-signup').css('display', 'none');
        			$('#panel-signup2-form').css('display', 'none');
        			break;
        		case 'signup':
        			$('#panel-login').css('display', 'none');
        			break;
        		case 'roles':
        			createCookie('signupForm','viewable',0);
        			break;
        		case 'photo_upload':
        			break;
        		//case 'form':
        		// 	$('#panel-signup').css('display', 'none');
        		// 	break;
        	}

        	// check btnClicked and show
	        if (home.btnClicked === 'home') {
	        	//console.log('home page');
	        	home.currentPane = 'home';
	        	window.location = "shabang.html";
	        	
	        } else if (home.btnClicked === 'login') {
	        	//console.log('login page');
	        	home.currentPane = 'login';
	        	$('#panel-login').css('display', 'block');

	        } else if (home.btnClicked === 'signup') {
	        	console.log('signup clicked');

	        	if (home.currentPane === 'roles') {
	        		console.log('signup clicked 2');
	        		window.location = "shabang.html";
	        	}

	        	$('#panel-signup').css('display', 'block');
	    	    home.currentPane = 'signup';

	        } else if (home.btnClicked === 'form') {
	        	//console.log('form page');
	        	$('#panel-signup2-form').css('display', 'block');
	    	    home.currentPane = 'form';
	    	    $('#shabangForm').validate();

	    	    // Adaptive Function : Execute on load
	    	    //checkFormWidth();

	        } else if (home.btnClicked === 'search') {
	    	    // Search

	        } else if (home.btnClicked === 'photo_upload') {
	    	    //console.log('photo_upload page');

	        } else if (home.btnClicked === 'mobile-user-options') {
	    	    
	    	    if (mobileOptionsBtn === 'off') {
	    	    	$('.head-wrapper .options-menu').css('display', 'block');
	    	    	mobileOptionsBtn = 'on';
	    	    } else if (mobileOptionsBtn === 'on') {
	    	    	$('.head-wrapper .options-menu').css('display', 'none');
	    	    	mobileOptionsBtn = 'off';
	    	    }

	    	    //console.log(mobileOptionsBtn);

	        } else if (home.btnClicked === 'search-mobile') {
	        	if (mobileSearchBtn === 'off') {
	        		$('.head-wrapper .options-search').css('display', 'block');
	        		mobileSearchBtn = 'on';
	        	} else if (mobileSearchBtn === 'on') {
	    	    	$('.head-wrapper .options-search').css('display', 'none');
	    	    	mobileSearchBtn = 'off';
	    	    }
	        }

	    };	//userActions

/*

__________.__            __          
\______   \  |__   _____/  |_  ____  
 |     ___/  |  \ /  _ \   __\/  _ \ 
 |    |   |   Y  (  <_> )  | (  <_> )
 |____|   |___|  /\____/|__|  \____/ 
               \/
*/

	    // Skip Button
	    $('#btnSkip').click(function () {

	    	console.log('button skip clicked');

	        if (skipButton === true) {
	            $('#cropImg').attr("src", "img/default-talent-3-big.png");
	            $('#btnSkip').removeClass('btn-purple');
	            $('#btnSkip').addClass('btn-gray');

	            // Animate in Balloon
	            $('#crop_balloon').css('display', 'block');
	            $('#crop_balloon').animate({ opacity: 0 }, 0);
	            $('#crop_balloon').animate({ opacity: 1, top: "110", right: "30%" }, 'slow');
	            skipButton = false;
	        } else {
	            // do nothing...
	        }

	    });
    	

    	// FLIP USER ROLE CARDS
    	//...............................
    	// User: Talent
	    $('.role-card-talent').hover(function(){
	        $('.hover_controls_talent').css('display', 'block');
	    }, function(){
	        $('.hover_controls_talent').css('display', 'none');
	    });

	    $('.role-card-talent').click(function(){
	    	// Save User Role Variable Here...

	    	$('#panel-signup2-form').css('display', 'block');
	    	$('#panel-signup').css('display', 'none');
	    	home.currentPane = 'form';
	    });

	
	});	//main function


	// TALENT ROLE SELECTION
	//...............................
    /* Helper functions for Registration Page 2 Roles & Fan button / Genre selection */
    
    /* ROLE BUTTON */
    $(".roleBtn").click(roleBtnClicked);

    // The Role button click function
    // Needs to be updated to dynamically create the Modal windows
    // On the reg_role_talent.html page

    function roleBtnClicked(event){
    	var $window = $(window);
		var windowsize = $window.width();

		// Normal Modal
		if (windowsize > 640) {
			$('.modal .tv-choices').show();
    		$('#modal-1').modal({ persist: true });

    	// Mobile Modal
		} else if (windowsize <= 640) {
			$('.modal-mobile .tv-choices').show();
    		$('#modal-mobile-1').modal({ persist: true });
		}

    }

    // ROLE - Done buttons clicked, save checkbox data into Arrays
    $(".doneButton").click(doneBtnClicked);

    function doneBtnClicked(event){
    	$.modal.close();
    };


	/* PANEL FORM Validation */
	

}); // document ready
