(function ($) {
    'use strict';
    /*=============================================
	=              Preloader       =
    =============================================*/
    function preloader() {
        $('#preloader').delay(2200).fadeOut(350);
    }
    function initI18n() {
        const phrasePairs = [
            ['Registro Git', 'Git Log'],
            ['Serviços', 'Services'],
            ['Criando soluções', 'Creating solutions'],
            ['personalizadas', 'tailored'],
            ['para atender seus requisitos', 'to meet your requirements'],
            ['Desenvolvimento Web & App', 'Web & App Development'],
            [
                'Criando interfaces visualmente atraentes e amigáveis ao usuário usando',
                'Building visually appealing and user-friendly interfaces using',
            ],
            ['e frameworks modernos como React e Angular.', 'and modern frameworks such as React and Angular.'],
            ['Gestão de Banco de Dados', 'Database Management'],
            ['Projetando e gerenciando bancos de dados com tecnologias SQL e NoSQL como', 'Designing and managing databases with SQL and NoSQL technologies such as'],
            ['e', 'and'],
            ['Desenvolvimento de API', 'API Development'],
            ['Criando e integrando', 'Creating and integrating'],
            ['para permitir comunicação suave entre sistemas front-end e back-end.', 'to enable smooth communication between front-end and back-end systems.'],
            ['Otimização de Desempenho', 'Performance Optimization'],
            [
                'Melhorando a velocidade e o desempenho de aplicações web para fornecer uma melhor experiência do usuário. Trabalho com',
                'Improving the speed and performance of web applications to deliver a better user experience. I work with',
            ],
            ['Soluções de E-commerce', 'E-commerce Solutions'],
            ['Desenvolvendo soluções de pagamento escaláveis e seguras para', 'Developing scalable and secure payment solutions for'],
            ['plataformas de e-commerce', 'e-commerce platforms'],
            ['adaptadas às suas necessidades de negócio.', 'tailored to your business needs.'],
            ['Integrando IA', 'AI Integration'],
            [
                'Potencialize suas aplicações com IA para eficiência aprimorada, automação e experiência de usuário melhorada',
                'Empower your applications with AI for improved efficiency, automation, and user experience',
            ],
            ['Entusiasmado para pegar', 'Excited to take on'],
            ['novos projetos', 'new projects'],
            ['e colaborar.', 'and collaborate.'],
            ['Vamos conversar sobre suas ideias.', "Let's talk about your ideas."],
            ['Entre em contato!', 'Get in touch!'],
            ['Experiência', 'Experience'],
            ['anos de', 'years of'],
            ['paixão', 'passion'],
            ['por', 'for'],
            ['técnicas de programação', 'programming techniques'],
            ['Framework Frontend', 'Frontend Framework'],
            ['Educação', 'Education'],
            ['Cursando Cybersegurança', 'Studying Cybersecurity'],
            ['Graduando em Análise e Desenvolvimento de Sistemas', 'Undergraduate in Systems Analysis and Development'],
            ['Desenvolvimento Full Stack', 'Full Stack Development'],
            ['Habilidades & Especialidades', 'Skills & Expertise'],
            ['Desenvolvimento Web Completo', 'Complete Web Development'],
            ['React, Node.js, TypeScript, JavaScript e frameworks modernos para aplicações web robustas.', 'React, Node.js, TypeScript, JavaScript and modern frameworks for robust web applications.'],
            ['Infraestrutura e Automação', 'Infrastructure and Automation'],
            ['Google Cloud Platform, AWS, Vercel e práticas de DevOps para deploy e escalabilidade.', 'Google Cloud Platform, AWS, Vercel and DevOps practices for deployment and scalability.'],
            ['Cybersegurança & Boas Práticas', 'Cybersecurity & Best Practices'],
            ['Implementação de segurança em aplicações, proteção de dados e práticas de desenvolvimento seguro.', 'Security implementation in applications, data protection and secure development practices.'],
            ['Projetos', 'Projects'],
            ['Meus Trabalhos Recentes', 'My Recent Works'],
            ['Montado dentro da plataforma Shopify, o site Xopu é um e-commerce. O site foi desenvolvido para atender as necessidades do cliente, com foco em uma navegação fluida e intuitiva.', 'Built on Shopify, the Xopu website is an e-commerce store developed to meet the client needs, with focus on smooth and intuitive navigation.'],
            ['Informações do Projeto', 'Project Information'],
            ['Cliente', 'Client'],
            ['Plataforma', 'Platform'],
            ['Tecnologias', 'Technologies'],
            ['Montado dentro da plataforma Shopify, desenvolvido para o mercado italiano com foco em experiência do usuário e conversões.', 'Built on Shopify for the Italian market with focus on user experience and conversions.'],
            ['Sistema de Sorteios', 'Giveaway Management System'],
            ['Sistema completo de gerenciamento com simulador de sorteios, autenticação de usuários, dashboards interativos e geração de relatórios PDF. Desenvolvido com tecnologias modernas.', 'Complete management system with giveaway simulator, user authentication, interactive dashboards and PDF report generation. Built with modern technologies.'],
            ['Tipo', 'Type'],
            ['Sistema Web Completo', 'Complete Web System'],
            ['Plataforma de Pagamentos', 'Payment Platform'],
            ['Plataforma de pagamentos e sorteios desenvolvida com tecnologias web fundamentais. Interface intuitiva e funcionalidades robustas para gerenciamento de transações.', 'Payment and giveaway platform built with core web technologies. Intuitive interface and robust transaction management features.'],
            ['Projetos Sociais', 'Social Projects'],
            ['O IAVI é uma OSCIP dedicada a promover inclusão social através de programas especializados em acessibilidade, saúde e crédito orientado.', 'IAVI is a nonprofit organization dedicated to promoting social inclusion through programs focused on accessibility, health, and guided credit.'],
            ['Site Institucional', 'Institutional Website'],
            ['Categoria', 'Category'],
            ['Inclusão Social', 'Social Inclusion'],
            ['JavaScript, HTML, Design Gráfico', 'JavaScript, HTML, Graphic Design'],
            ['Plataforma de Saúde', 'Health Platform'],
            ['Transforme seu corpo e sua saúde. Treinos personalizados e planos nutricionais sob medida para você alcançar seus objetivos de forma saudável e sustentável.', 'Transform your body and health. Personalized workouts and nutrition plans to help you achieve your goals in a healthy and sustainable way.'],
            ['Plataforma Web', 'Web Platform'],
            ['Saúde e Fitness', 'Health and Fitness'],
            ['Cardápio Digital', 'Digital Menu'],
            ['Sistema para Restaurantes', 'System for Restaurants'],
            ['Solução moderna de cardápio digital para restaurantes. Interface intuitiva e responsiva para melhor experiência dos clientes.', 'Modern digital menu solution for restaurants. Intuitive and responsive interface for a better customer experience.'],
            ['Aplicação Web', 'Web Application'],
            ['Gastronomia Digital', 'Digital Gastronomy'],
            ['Minhas Habilidades', 'My Skills'],
            ['Início', 'Home'],
            ['Preços', 'Pricing'],
            ['Contato', 'Contact'],
            ['Sobre mim', 'About'],
            ['Currículo', 'Resume'],
            ['Portfólio', 'Portfolio'],
        ];

        const replaceTextKeepingSpaces = (originalText, newText) => {
            const leading = originalText.match(/^\s*/)?.[0] ?? '';
            const trailing = originalText.match(/\s*$/)?.[0] ?? '';
            return `${leading}${newText}${trailing}`;
        };

        const applyPhraseTranslation = (lang) => {
            const toEn = lang === 'en-US';
            const dictionary = {};
            phrasePairs.forEach(([pt, en]) => {
                dictionary[pt] = toEn ? en : pt;
                dictionary[en] = toEn ? en : pt;
            });

            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            const blockedTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT']);
            const nodes = [];
            while (walker.nextNode()) {
                nodes.push(walker.currentNode);
            }

            nodes.forEach((node) => {
                const parentTag = node.parentElement?.tagName;
                if (parentTag && blockedTags.has(parentTag)) return;

                const raw = node.nodeValue ?? '';
                const trimmed = raw.trim();
                if (!trimmed) return;

                const replacement = dictionary[trimmed];
                if (!replacement) return;
                node.nodeValue = replaceTextKeepingSpaces(raw, replacement);
            });
        };

        const translations = {
            'pt-BR': {
                pageTitle: 'Victor - Desenvolvedor Full Stack',
                'nav.about': 'Sobre mim',
                'nav.resume': 'Currículo',
                'nav.services': 'Serviços',
                'nav.portfolio': 'Portfólio',
                'nav.contact': 'Contato',
                'offcanvas.title': 'Entre em contato',
                'offcanvas.description': 'Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de tecnologia.',
                'offcanvas.email': 'Email',
                'offcanvas.location': 'Localização',
                'offcanvas.education': 'Formação',
                'offcanvas.locationValue': 'Santa Catarina, Brasil',
                'offcanvas.educationValue': 'Análise e Desenvolvimento de Sistemas - UNOPAR',
                'offcanvas.social': 'Redes Sociais',
                'hero.greeting': 'Opa, Eu sou Victor',
                'hero.title': 'Desenvolvedor <span class="text-linear-4">{Full Stack}</span> Web & App<span class="flicker">_</span>',
                'hero.description':
                    '&lt;p&gt;<span class="text-dark">Com conhecimentos em tecnologias como</span> <span class="text-secondary-2">JavaScript</span>, <span class="text-secondary-2">React</span>, <span class="text-secondary-2">HTML</span>, e <span class="text-secondary-2">CSS</span><span class="text-dark">... Entrego soluções web e Sistemas inovadoras e robustas.</span>&lt;/p&gt;',
                'hero.more': '...e mais',
                'hero.downloadCv': 'Baixar meu CV',
                'tools.tag': 'Tecnologias',
                'tools.title': 'Ferramentas e <span class="text-300">tecnologias <br /></span> que utilizo <span class="text-300">diariamente_</span>',
                'card.status': 'Online',
                'card.contact': 'Fale comigo',
                'card.title': 'Engenheiro de Software',
                'contact.connectTitle': 'Vamos Conectar',
                'contact.send': 'Enviar Mensagem',
                'contact.placeholder.name': 'Seu nome',
                'contact.placeholder.phone': 'Telefone',
                'contact.placeholder.subject': 'Assunto',
                'contact.placeholder.message': 'Mensagem',
                'project.robot.title': 'Robot <br />Assistente Inteligente',
                'project.robot.description':
                    'O Robot e um assistente inteligente que entende linguagem natural. Voce conversa com ele como se fosse uma pessoa, e ele executa acoes no sistema automaticamente.',
                'project.robot.type': 'Assistente com IA',
                'project.robot.tech': 'NLP, Automacao, Integracao de Sistema',
                'mobile.home': 'Início',
                'mobile.services': 'Serviços',
                'mobile.portfolio': 'Portfólio',
                'mobile.pricing': 'Preços',
                'mobile.blog': 'Blog',
                'mobile.contact': 'Contato',
            },
            'en-US': {
                pageTitle: 'Victor - Full Stack Developer',
                'nav.about': 'About',
                'nav.resume': 'Resume',
                'nav.services': 'Services',
                'nav.portfolio': 'Portfolio',
                'nav.contact': 'Contact',
                'offcanvas.title': 'Get in touch',
                'offcanvas.description': 'I am always looking for new challenges and opportunities to learn and grow in technology.',
                'offcanvas.email': 'Email',
                'offcanvas.location': 'Location',
                'offcanvas.education': 'Education',
                'offcanvas.locationValue': 'Santa Catarina, Brazil',
                'offcanvas.educationValue': 'Systems Analysis and Development - UNOPAR',
                'offcanvas.social': 'Social Media',
                'hero.greeting': 'Hey, I am Victor',
                'hero.title': 'Developer <span class="text-linear-4">{Full Stack}</span> Web & App<span class="flicker">_</span>',
                'hero.description':
                    '&lt;p&gt;<span class="text-dark">With knowledge in technologies like</span> <span class="text-secondary-2">JavaScript</span>, <span class="text-secondary-2">React</span>, <span class="text-secondary-2">HTML</span>, and <span class="text-secondary-2">CSS</span><span class="text-dark">... I deliver innovative and robust web and system solutions.</span>&lt;/p&gt;',
                'hero.more': '...and more',
                'hero.downloadCv': 'Download my Resume',
                'tools.tag': 'Technologies',
                'tools.title': 'Tools and <span class="text-300">technologies <br /></span> that I use <span class="text-300">daily_</span>',
                'card.status': 'Online',
                'card.contact': 'Contact me',
                'card.title': 'Software Engineer',
                'contact.connectTitle': "Let's Connect",
                'contact.send': 'Send Message',
                'contact.placeholder.name': 'Your name',
                'contact.placeholder.phone': 'Phone',
                'contact.placeholder.subject': 'Subject',
                'contact.placeholder.message': 'Message',
                'project.robot.title': 'Robot <br />Intelligent Assistant',
                'project.robot.description':
                    'Robot is an intelligent assistant that understands natural language. You can talk to it like a real person, and it executes actions in the system automatically.',
                'project.robot.type': 'AI Assistant',
                'project.robot.tech': 'NLP, Automation, System Integration',
                'mobile.home': 'Home',
                'mobile.services': 'Services',
                'mobile.portfolio': 'Portfolio',
                'mobile.pricing': 'Pricing',
                'mobile.blog': 'Blog',
                'mobile.contact': 'Contact',
            },
        };

        const fallbackLang = 'en-US';
        const getPreferredLanguage = () => {
            const saved = localStorage.getItem('siteLanguage');
            if (saved && translations[saved]) return saved;
            const browserLang = navigator.language && navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
            return translations[browserLang] ? browserLang : fallbackLang;
        };

        const setActiveButtons = (lang) => {
            document.querySelectorAll('.lang-btn').forEach((button) => {
                button.classList.toggle('active', button.dataset.lang === lang);
            });
        };

        const applyLanguage = (lang) => {
            const dict = translations[lang] || translations[fallbackLang];
            document.documentElement.lang = lang === 'pt-BR' ? 'pt-br' : 'en';
            document.title = dict.pageTitle;

            document.querySelectorAll('[data-i18n]').forEach((node) => {
                const key = node.getAttribute('data-i18n');
                if (!dict[key]) return;
                node.textContent = dict[key];
            });
            document.querySelectorAll('[data-i18n-html]').forEach((node) => {
                const key = node.getAttribute('data-i18n-html');
                if (!dict[key]) return;
                node.innerHTML = dict[key];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
                const key = node.getAttribute('data-i18n-placeholder');
                if (!dict[key]) return;
                node.setAttribute('placeholder', dict[key]);
            });

            applyPhraseTranslation(lang);
            setActiveButtons(lang);
            localStorage.setItem('siteLanguage', lang);
        };

        document.querySelectorAll('.lang-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const lang = button.dataset.lang;
                if (!lang) return;
                applyLanguage(lang);
            });
        });

        applyLanguage(getPreferredLanguage());
    }
    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    function offcanvasMenu() {
        $('.menu-tigger').on('click', function () {
            $('.offCanvas__info, .offCanvas__overly').addClass('active');
            return false;
        });
        $('.menu-close, .offCanvas__overly').on('click', function () {
            $('.offCanvas__info, .offCanvas__overly').removeClass('active');
        });
    }
    /*=============================================
	=          Data Background      =
    =============================================*/
    function dataBackground() {
        $('[data-background]').each(function () {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        });
    }
    /*=============================================
	=           Go to top       =
    =============================================*/
    function progressPageLoad() {
        var progressWrap = document.querySelector('.btn-scroll-top');
        if (progressWrap != null) {
            var progressPath = document.querySelector('.btn-scroll-top path');
            var pathLength = progressPath.getTotalLength();
            var offset = 50;
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            window.addEventListener('scroll', function (event) {
                var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
                var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollElementPos >= offset) {
                    progressWrap.classList.add('active-progress');
                } else {
                    progressWrap.classList.remove('active-progress');
                }
            });
            progressWrap.addEventListener('click', function (e) {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            });
        }
    }
    /*=============================================
	=           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }
    /*=============================================
	=           counterState       =
    =============================================*/
    function counterState() {
        var counters = document.querySelectorAll('.counter');
        counters.forEach(function (counter) {
            var countTo = counter.getAttribute('data-count');
            var countNum = parseInt(counter.textContent);
            var duration = 4000;
            var stepDuration = duration / Math.abs(countTo - countNum);
            var increment = countTo > countNum ? 1 : -1;
            var timer = setInterval(function () {
                countNum += increment;
                counter.textContent = countNum;
                if (countNum == countTo) {
                    clearInterval(timer);
                    //alert('finished');
                }
            }, stepDuration);
        });
    }
    /*=============================================
	=    		Magnific Popup		      =
    =============================================*/
    function magnificPopup() {
        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
            type: 'iframe',
        });
    }
    /*=============================================
	=    		 Wow Active  	         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }
    /*=============================================
	=           masonry Active       =
    =============================================*/
    function masonryFillter() {
        $('.masonry-active').imagesLoaded(function () {
            var $filter = '.masonry-active',
                $filterItem = '.filter-item',
                $filterMenu = '.filter-menu-active';
            if ($($filter).length > 0) {
                var $grid = $($filter).isotope({
                    itemSelector: $filterItem,
                    filter: '*',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        // columnWidth: 1,
                        columnWidth: '.grid-sizer',
                    },
                });
                // filter items on button click
                $($filterMenu).on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue,
                    });
                });
                // Menu Active Class
                $($filterMenu).on('click', 'button', function (event) {
                    event.preventDefault();
                    $(this).addClass('active');
                    $(this).siblings('.active').removeClass('active');
                });
            }
        });
    }
    function customSwiper() {
        const sliderone = new Swiper('.slider-one', {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        const slidertwo = new Swiper('.slider-two', {
            slidesPerView: 1,
            // spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        const slider1 = new Swiper('.slider-1', {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        const slider2 = new Swiper('.slider-2', {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    function carauselScroll() {
        $('.carouselTicker-left').each(function () {
            $(this).carouselTicker({
                direction: 'prev',
                speed: 1,
                delay: 30,
            });
        });
        $('.carouselTicker-right').each(function () {
            $(this).carouselTicker({
                direction: 'next',
                speed: 1,
                delay: 30,
            });
        });
    }
    function odometerCounter() {
        if ($('.odometer').length > 0) {
            $('.odometer').appear(function (e) {
                var odo = $('.odometer');
                odo.each(function () {
                    var countNumber = $(this).attr('data-count');
                    $(this).html(countNumber);
                });
            });
        }
    }
    $('.change-price-plan li a').on('click', function (e) {
        e.preventDefault();
        $('.change-price-plan li a').removeClass('active');
        $(this).addClass('active');
        var type = $(this).attr('data-type');
        if (type == 'monthly') {
            $('.text-price-standard').html('49');
            $('.text-type-standard').html('/ month');
            $('.text-price-business').html('69');
            $('.text-type-business').html('/ month');
            $('.text-price-enterprise').html('99');
            $('.text-type-enterprise').html('/ month');
        } else {
            $('.text-price-standard').html('441');
            $('.text-type-standard').html('/ year');
            $('.text-price-business').html('621');
            $('.text-type-business').html('/ year');
            $('.text-price-enterprise').html('891');
            $('.text-type-enterprise').html('/ year');
        }
    });
    function inputFocus() {
        $('input')
            .focus(function () {
                $(this).closest('div.input-group').addClass('focus');
            })
            .blur(function () {
                $(this).closest('div.input-group').removeClass('focus');
            });
        $('textarea')
            .focus(function () {
                $(this).closest('div.input-group').addClass('focus');
            })
            .blur(function () {
                $(this).closest('div.input-group').removeClass('focus');
            });
        $('select')
            .focus(function () {
                $(this).closest('div.input-group').addClass('focus');
            })
            .blur(function () {
                $(this).closest('div.input-group').removeClass('focus');
            });
    }
    function mobileHeaderActive() {
        var navbarTrigger = $('.burger-icon'),
            navCanvas = $('.burger-icon-2'),
            closeCanvas = $('.close-canvas'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.mobile-header-active'),
            containerCanvas = $('.sidebar-canvas-wrapper'),
            wrapper4 = $('body');
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        var overlay = $('.body-overlay-1');
        const closeMobileMenu = () => {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
            navbarTrigger.removeClass('burger-close');
        };
        navbarTrigger.on('click', function (e) {
            navbarTrigger.toggleClass('burger-close');
            e.preventDefault();
            container.toggleClass('sidebar-visible');
            wrapper4.toggleClass('mobile-menu-active');
        });
        endTrigger.on('click', function () {
            closeMobileMenu();
        });
        overlay.on('click', function () {
            closeMobileMenu();
        });
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
        $(document).on('click', function (e) {
            if (!container.hasClass('sidebar-visible')) return;
            if ($(e.target).closest('.mobile-header-active, .burger-icon').length === 0) {
                closeMobileMenu();
            }
        });
        var $offCanvasNav = $('.mobile-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="arrow-small-down"></i></span>');
        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp();
        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(this);
            if (
                $this
                    .parent()
                    .attr('class')
                    .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
                ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
            ) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    function cardScroll() {
        if ($('.cards').length > 0) {
            const { ScrollObserver, valueAtPercentage } = aat;
            const cardsContainer = document.querySelector('.cards');
            const cards = document.querySelectorAll('.card-custom');
            cardsContainer.style.setProperty('--cards-count', cards.length);
            cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
            Array.from(cards).forEach((card, index) => {
                const offsetTop = 20 + index * 20;
                card.style.paddingTop = `${offsetTop}px`;
                if (index === cards.length - 1) {
                    return;
                }
                const toScale = 1 - (cards.length - 1 - index) * 0.1;
                const nextCard = cards[index + 1];
                const cardInner = card.querySelector('.card__inner');
                ScrollObserver.Element(nextCard, {
                    offsetTop,
                    offsetBottom: window.innerHeight - card.clientHeight,
                }).onScroll(({ percentageY }) => {
                    cardInner.style.scale = valueAtPercentage({
                        from: 1,
                        to: toScale,
                        percentage: percentageY,
                    });
                    cardInner.style.filter = `brightness(${valueAtPercentage({
                        from: 1,
                        to: 0.6,
                        percentage: percentageY,
                    })})`;
                });
            });
        }
    }
    function profileCardFx() {
        const wrappers = document.querySelectorAll('.pc-card-wrapper');
        if (!wrappers.length) return;
        const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
        const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
        const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
        const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

        wrappers.forEach((wrap) => {
            const shell = wrap.querySelector('.pc-card-shell');
            if (!shell) return;
            let rafId = null;
            let running = false;
            let lastTs = 0;
            let currentX = 0;
            let currentY = 0;
            let targetX = 0;
            let targetY = 0;

            const setVarsFromXY = (x, y) => {
                const width = shell.clientWidth || 1;
                const height = shell.clientHeight || 1;
                const percentX = clamp((100 / width) * x);
                const percentY = clamp((100 / height) * y);
                const centerX = percentX - 50;
                const centerY = percentY - 50;
                wrap.style.setProperty('--pointer-x', `${percentX}%`);
                wrap.style.setProperty('--pointer-y', `${percentY}%`);
                wrap.style.setProperty('--background-x', `${adjust(percentX, 0, 100, 35, 65)}%`);
                wrap.style.setProperty('--background-y', `${adjust(percentY, 0, 100, 35, 65)}%`);
                wrap.style.setProperty('--pointer-from-center', `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`);
                wrap.style.setProperty('--pointer-from-top', `${percentY / 100}`);
                wrap.style.setProperty('--pointer-from-left', `${percentX / 100}`);
                wrap.style.setProperty('--rotate-x', `${round(-(centerX / 5))}deg`);
                wrap.style.setProperty('--rotate-y', `${round(centerY / 4)}deg`);
            };

            const step = (ts) => {
                if (!running) return;
                if (lastTs === 0) lastTs = ts;
                const dt = (ts - lastTs) / 1000;
                lastTs = ts;
                const k = 1 - Math.exp(-dt / 0.14);
                currentX += (targetX - currentX) * k;
                currentY += (targetY - currentY) * k;
                setVarsFromXY(currentX, currentY);
                const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
                if (stillFar || document.hasFocus()) {
                    rafId = requestAnimationFrame(step);
                } else {
                    running = false;
                    lastTs = 0;
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                }
            };

            const setTarget = (x, y) => {
                targetX = x;
                targetY = y;
                if (!running) {
                    running = true;
                    lastTs = 0;
                    rafId = requestAnimationFrame(step);
                }
            };

            const toCenter = () => {
                setTarget((shell.clientWidth || 0) / 2, (shell.clientHeight || 0) / 2);
            };

            if (isTouchDevice) {
                wrap.classList.add('pc-card-static');
                currentX = (shell.clientWidth || 0) / 2;
                currentY = (shell.clientHeight || 0) / 2;
                targetX = currentX;
                targetY = currentY;
                setVarsFromXY(currentX, currentY);
                return;
            }

            shell.addEventListener('pointerenter', (event) => {
                shell.classList.add('active', 'entering');
                wrap.classList.add('active');
                const rect = shell.getBoundingClientRect();
                setTarget(event.clientX - rect.left, event.clientY - rect.top);
                setTimeout(() => shell.classList.remove('entering'), 180);
            });

            shell.addEventListener('pointermove', (event) => {
                const rect = shell.getBoundingClientRect();
                setTarget(event.clientX - rect.left, event.clientY - rect.top);
            });

            shell.addEventListener('pointerleave', () => {
                toCenter();
                setTimeout(() => {
                    shell.classList.remove('active');
                    wrap.classList.remove('active');
                }, 220);
            });

            currentX = (shell.clientWidth || 0) - 70;
            currentY = 60;
            setVarsFromXY(currentX, currentY);
            toCenter();
        });

        const whatsappUrl = 'https://wa.me/5546991042045';
        const openWhatsapp = () => window.open(whatsappUrl, '_blank');

        document.querySelectorAll('.pc-contact-btn').forEach((button) => {
            button.addEventListener('click', openWhatsapp);
        });
        document.querySelectorAll('.pc-user-info').forEach((field) => {
            field.addEventListener('click', openWhatsapp);
        });
    }
    /*=============================================
	=           Page Load       =
    =============================================*/
    $(window).on('load', function () {
        initI18n();
        preloader();
        progressPageLoad();
        offcanvasMenu();
        dataBackground();
        aosAnimation();
        counterState();
        customSwiper();
        magnificPopup();
        wowAnimation();
        carauselScroll();
        odometerCounter();
        masonryFillter();
        inputFocus();
        mobileHeaderActive();
        cardScroll();
        profileCardFx();
    });
})(jQuery);
