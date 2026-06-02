jQuery(document).ready(function ($) {

  $("#form_newsletter").on("submit", function (e) {
    e.preventDefault();

    const $form = $(this);
    const $btn = $("#submitNewsletter");
    const $loader = $("#newsletter-loader");
    const correo = $("#correonewsletter").val();

    if (!correo.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }

    $.ajax({
      url: bdtheme_ajax.url,
      type: "post",
      data: {
        action: "guardar_suscriptor",
        nonce: bdtheme_ajax.nonce,
        id_correo: correo
      },
      beforeSend: function () {
        $btn.prop("disabled", true);
        $form.hide();
        $loader.show();
      },
      success: function (resultado) {
        $loader.hide();
        $form.remove();
        $loader.after(resultado);
      },
      error: function () {
        $loader.hide();
        $form.show();
        alert("Ocurrió un error al enviar tu correo.");
      },
      complete: function () {
        $btn.prop("disabled", false);
      }
    });
  });
	

});

