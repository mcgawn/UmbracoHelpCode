jQuery(function () {
  jQuery.noConflict();
  jQuery("#validationError").hide();
  jQuery("#submitError").hide();

  jQuery('.cc-number').payment('formatCardNumber');
  jQuery('.cc-exp').payment('formatCardExpiry');
  jQuery('.cc-cvc').payment('formatCardCVC');

  jQuery('#cardDetailsForm').submit(function (event) {

    var jQueryform = jQuery(this);

    jQuery("#cardDetailsForm").validate({

      email: {
        required: true,
        email: true
      },

      expmonth: {
        required: true,
        maxlength: 2
      },

      CardholdersName: {
        required: true
      },

      CardNumber: {
        required: true
      },

      CardExpiryDate: {
        required: true
      },

      CardCCV: {
        required: true
      },
      errorPlacement: function (error, element) {
      },
      invalidHandler: function (event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          var message = "<h3>Form error!</h3><p>We're sorry, there was a problem submitting your form. Please check the fields highlighted below to resolve any errors.</p>";
          jQuery("#validationError").html(message);
          jQuery("#validationError").show();
        }
        else {
          jQuery("#validationError").hide();
        }
      },
      submitHandler: function () {
        jQuery(window).spin();
      }

    });
    jQuery("#confirmorder").hide();
    jQuery("#merchant").show();
    return false;
  });
});
