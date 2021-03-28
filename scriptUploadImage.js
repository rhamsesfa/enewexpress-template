jQuery(($) => {
    $('.attachment input[type="file"]')
        .on('change', (event) => {
        let el = $(event.target).closest('.attachment').find('.btn-file');
        let size_img = event.target.files[0].size;
        let type_img = event.target.files[0].type;
        let re = new RegExp('image/*');
        let extension_img = '';
        
        if (re.test(type_img)===true) {
            extension_img = type_img.replace(re, '');
            console.log(extension_img);
            el
            .find('.btn-file__actions__item')
            .css({
                'padding': '85px'
            });
            
            el
            .find('.btn-file__preview')
            .css({
                'background-image': 'url(' + window.URL.createObjectURL(event.target.files[0]) + ')',
                'backgroun-size':'cover'
            });
            $('.sizeIMg').html('Taille : '+formatBytes(size_img)+' <br> Format : '+extension_img+'')
            
        } else {
            el
            .find('.btn-file__actions__item')
            .css({
                'padding': '12px'
            });
            
            el
            .find('.btn-file__preview')
            .css({
                'background-image': '',
                'backgroun-size':'' 
            });
            $('.sizeIMg').html('<span class="text-danger">Veillez choisir une image!</span>')
        }
    });
  });

  //convertir le poids d'un fichier
  function formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}