jQuery(document).ready(function($){
    $('.enew-logo').fadeOut(4000, function(){
        $('.main').fadeIn(2000);
    });
    //simulation des liens vers les potentiels pages
    $('#btn_continu').on("click",function(){
        $('.main, #container-accueil').fadeOut()
        $('.home').fadeIn(2000);
    });
    //iterface de voyage
    $('#btn1').on("click",function(){
        $('#container-navig').fadeOut();
        $('#container-voyage-body, #container-voyage-lieu').css('opacity', '0');
        $('#container-voyage').fadeIn(1000, function(){
            $(this).addClass('container-voyage');
            $('#container-voyage-body, #container-voyage-lieu').css('opacity', '1');
        });
        //script du formulaire de recherche dans la page "voyager"
        $('#submit_make_voyage, #submit_valide_back').on("click",function(){
            //traitement du formulaire côté client
            //traitement du formulaire côté serveur
            $('#container-valide-commande').hide();//retour d'interface
            //si tout les traitement sont ok nous sommes redirigés vers la page des detail du voyage
            $('#container-voyage-body, #container-voyage-lieu')
                .css('opacity', '0').fadeOut(function() {
                    $('#voyage2').css('background-color','#ef0072').html('\
                        <div class="detail_head">\
                            <span>Libreville</span>\
                            <svg width="15" height="20" fill="currentColor">\
                                <use xlink:href="bootstrap-icons.svg#arrow-left-right" />\
                            </svg>\
                            <span>Franceville</span><br>\
                            <span>Sam 27 - Dim 28, 2 Adultes, classe eco</span>\
                        </div>\
                        <svg class="svg-train" enable-background="new 0 0 512.07 512.07" height="512" fill="currentColor" viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m300.784 90.813c7.932 0 14.384-6.453 14.384-14.385v-24.587c0-7.932-6.453-14.385-14.384-14.385h-89.499c-7.932 0-14.384 6.453-14.384 14.385v24.587c0 7.932 6.453 14.385 14.384 14.385zm-88.883-38.357h88.268v23.357h-88.268z"/><path d="m98.551 130.27v100.973c0 13.354 10.865 24.219 24.22 24.219h266.528c13.355 0 24.22-10.865 24.22-24.219v-100.973c0-13.355-10.865-24.22-24.22-24.22h-13.775c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h13.775c5.084 0 9.22 4.136 9.22 9.22v100.973c0 5.083-4.136 9.219-9.22 9.219h-266.528c-5.084 0-9.22-4.136-9.22-9.219v-100.973c0-5.084 4.136-9.22 9.22-9.22h217.753c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-217.753c-13.355 0-24.22 10.865-24.22 24.22z"/><path d="m457.221 478.31-36.955-64.008c18.928-6.418 32.593-24.343 32.593-45.412v-39.129c0-.003 0-.006 0-.01v-248.488c0-44.632-36.103-81.263-81.263-81.263h-231.123c-44.808 0-81.262 36.454-81.262 81.263v173.94c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-173.94c0-36.537 29.725-66.263 66.262-66.263h231.123c36.64 0 66.262 29.706 66.262 66.263v240.998h-27.848c-3.515-18.23-19.582-32.046-38.823-32.046h-231.695s0 0-.001 0-.001 0-.002 0c-19.241 0-35.308 13.816-38.823 32.046h-26.455v-32.058c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v39.548.01c0 43.584-.193 41.888.663 47.028 2.887 17.415 15.334 31.924 31.925 37.522l-36.95 63.999c-6.203 10.744-2.509 24.532 8.235 30.735 10.753 6.21 24.508 2.552 30.736-8.235l10.657-18.458h303.117l10.657 18.458c6.204 10.746 19.938 14.47 30.735 8.235 10.744-6.203 14.438-19.991 8.235-30.735zm-61.489-148.549c0 13.531-11.008 24.544-24.548 24.545-13.533-.001-24.543-11.012-24.543-24.545 0-13.535 11.011-24.546 24.545-24.546 13.535 0 24.546 11.011 24.546 24.546zm-55.531-24.546c-11.411 14.379-11.405 34.724 0 49.091h-169.726c11.399-14.36 11.406-34.726 0-49.091zm-200.711 0c13.444 0 24.546 10.932 24.546 24.546 0 13.527-11.02 24.545-24.546 24.545-13.535 0-24.546-11.011-24.546-24.545 0-13.535 11.011-24.546 24.546-24.546zm-38.832 32.046c3.557 18.415 19.789 32.026 38.796 32.044.012 0 .024.001.036.001h.002.003 231.691c19.149 0 35.301-13.759 38.833-32.045h27.84v31.629c0 18.22-14.847 32.949-32.948 32.949h-30.811c-11.882 0-243.765 0-266.94 0-16.862 0-30.878-12.749-32.734-29.237-.289-2.585-.215-.812-.215-35.34h26.447zm-19.829 156.05c-2.072 3.589-6.655 4.817-10.245 2.745-3.589-2.072-4.818-6.655-2.745-10.245l39.821-68.972h17.32zm32.308-25.959 8.66-15h268.476l8.66 15zm17.32-30 11.843-20.513h227.469l11.843 20.513zm311.028 58.703c-3.58 2.068-8.167.853-10.245-2.745l-44.151-76.472h17.32l39.821 68.972c2.073 3.589.846 8.173-2.745 10.245z"/></g></svg>\
                    ');
            });
            $('#container-detail-voyage').fadeIn();
            $('#submit_detail_voyage').on("click",function(){
                $('#container-detail-voyage').hide();
                $('#container-valide-commande').fadeIn();
                //interface de finalisation de paiement
                $('.insc-div-submit button').addClass('suite_pay');
                $('.suite_pay').on("click",function(){
                    $('#container-valide-commande').fadeOut();
                    $('#interface_auth').removeClass('interface_auth').css('opacity', '0').fadeOut();
                    $('#container-pay-commande').fadeIn(800);
                    return false;
                });

            });
            /* alert('tout est ok'); */
            return false;
        });
    });
    //interface d'authentification
    $('#submit_valide_next, .div-link-cnx a').on("click",function(){
        $('#interface_auth').css('opacity', '0').fadeIn(function(){
            //interface d'inscription
            $(this).addClass('interface_auth').css('opacity', '1');

            //script pour afficher l'interface de connexion
            $('#check_interface_cnx span').on("click",function(){
                $('#interface_insc').fadeOut(function(){
                    $('#interface_cnx').fadeIn();
                });
            });
            //script pour afficher l'interface d'inscription
            $('#check_interface_insc span').on("click",function(){
                $('#interface_cnx').fadeOut(function(){
                    $('#interface_insc').fadeIn();
                });
            });
        });
        return false;
    });
    //script pour la prévisualisation de la pièce d'identité
    $('.piece_identity').on('click', function(){
        $('#imgUpload, .sizeIMg').fadeIn();
    });
    //interface de payement électronique
    $('#submit_payment_card').on('click', function(){
        //$('#container-pay-commande').fadeOut();
        $('#interface_paymentOnline').css('opacity', '0').fadeIn(function(){
            //interface d'inscription
            $(this).addClass('interface_auth').css('opacity', '1');
        });
    });
    //interface du billet de train
    var donne_voyageur = "MBONGO ESSINGONE|Ghandy Steeve|Adulte|Libreville-Franceville|Economique|02-04-2020|payer|en attente";
    var hach_infos = hex_md5(donne_voyageur);
    /* var hach_infos1 = '16785fa399a484c37a0f57cb1f5162d4';
    var taille_hach_infos = hach_infos1.length; */
    //découpage de la chaine hachée
    var decoup1 = hach_infos.substring(0, 20);
    var decoup2 = hach_infos.substring(20, 26);
    var decoup3 = hach_infos.substring(26, 32);
    //conversion des données du voyageur et la chaine de hachage en tableau
    donne_voyageur += '|'+hach_infos;
    var convDonneesTableau = donne_voyageur.split('|');
    $('#confirm_payment_airtel, #testtt').on('click', function () {
        $('#interface_paymentOnline').removeClass('interface_auth').fadeOut()
        /* $('#container-voyage').removeClass('container-voyage').fadeOut() */
        $('#container-pay-commande, #container-voyage-head, #container-voyage-footer').fadeOut(function(){
            $('#container-ticket-billet').fadeIn().addClass('container-ticket-billet')
            //creation du qr code 
        });
        //console.log(hach_infos,  convDonneesTableau);
        return false;
    })
    $('#qrcode').qrcode(decoup2);
    $('.seppp').html('<span>'+decoup3+'</span>')


});