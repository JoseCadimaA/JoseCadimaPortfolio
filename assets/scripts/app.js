const Portfolio = function() {

    var language;

    function getLanguage() {
        (localStorage.getItem('language') == null) ? setLanguage('en'): false;
        console.log('hola');
        $.ajax({
            url: 'assets/scripts/language/' + localStorage.getItem('language') + '.json',
            dataType: 'json',
            async: false,
            dataType: 'json',
            success: function(lang) { language = lang }

        });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    function LoadElements() {
        getLanguage();
        console.log(language);
        $('#saludo_text').text(language.saludo);
        $('#lenguaje_text').text(language.lenguaje);
        $('#contactame_text').text(language.contactame);
        $('#ExperienceTitle').text(language.experiencia_titulo);
        $('#ExperienceDet').text(language.experiencia_detalle);

        $('#worksectiontitle').text(language.worksectiontitle);
        $('#worksectionDet').text(language.worksectionDet);
        $('.visitar_website').text(language.visitar_website);

        $('#artexacta_desc').text(language.artexacta_desc);
        $('#artexacta_1').text(language.artexacta_1);
        $('#artexacta_2').text(language.artexacta_2);
        $('#artexacta_3').text(language.artexacta_3);
        $('#artexacta_4').text(language.artexacta_4);
        $('#megasystem_desc').text(language.megasystem_desc);
        $('#megasystem_1').text(language.megasystem_1);
        $('#megasystem_2').text(language.megasystem_2);
        $('#networking_desc').text(language.networking_desc);
        $('#networking_1').text(language.networking_1);

        $('#objetivo_title').text(language.objetivo_title);
        $('#objetivo_desc').text(language.objetivo_desc);
        $('#trabajar_title').text(language.trabajar_title);
        $('#trabajar_desc').text(language.trabajar_desc);
        $('#comenzar').text(language.comenzar);


    }

    function makeWords() {
        var words = [{
            text: "Angular",
            weight: 11
        }, {
            text: "CSS",
            weight: 8
        }, {
            text: "Javascript",
            weight: 12
        }, {
            text: "Jquery",
            weight: 3
        }, {
            text: "C#",
            weight: 10
        }, {
            text: "Java",
            weight: 9
        }, {
            text: "J.Cadima",
            weight: 15
        }, {
            text: "Full Stack",
            weight: 7
        }, {
            text: ".Net Core",
            weight: 6
        }, {
            text: "SQL",
            weight: 8
        }];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 120 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: language.about,
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 1,
            contentType: 'text',
            callback: function() {
                $("#writing-text").css({ "color": "#fff", "background-color": "#0d9a07" });
            },
            preStringTyped: function() {},
            onStringTyped: function() {}
        });
    }

    return {
        LoadElements: LoadElements,
        setLanguage: setLanguage,
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();

Portfolio.LoadElements();
Portfolio.displayWordCloud();
Portfolio.typeAnimation();