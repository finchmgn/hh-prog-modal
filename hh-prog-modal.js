$(function() {
    $(document).ready(function() {
        let hhpModal = $('.hhp-modal');

        // Добавляю после блока с изображением дополнительные блоки 
        hhpModal.after('<div class="hhp-modal__blackout-js"><div class="hhp-modal__window-js"></div></div>');

        // При нажатие на блок с фоновым изображением  --
        hhpModal.click(function() {
            let $hhpModalImageThis = $(this);

            // -- показываю затемнение --
            $(this).next('.hhp-modal__blackout-js').fadeIn('fast', function() {

                // -- и ищу внутри этого блока div с окном
                let $hhpModalWindowThis = $(this).find('.hhp-modal__window-js');

                // получаю background-image из блока, по которому нажал --
                let hhpModalBackground = $hhpModalImageThis.css('background-image');

                // -- извлекаю путь -- 
                hhpModalBackground = hhpModalBackground.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')

                // и добавляю этот путь в тег img
                $hhpModalWindowThis.append('<img src="' + hhpModalBackground + '">');

            });
        });


        $('.hhp-modal__blackout-js').click(function() {
            $(this).fadeOut(function(){});
            $(this).find('img').remove();
        });
    });
});
