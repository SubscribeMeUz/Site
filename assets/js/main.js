/**
 * SubMe — Modern SaaS Landing Page
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Localization / Multi-language
    // ==========================================
    const translations = {
        en: {
            nav_home: "Home", nav_about: "About", nav_features: "Features", nav_segments: "Segments", nav_team: "Team", nav_pricing: "Pricing", nav_contact: "Contact",
            btn_account: "Personal Account", btn_get_started: "Get Started", btn_watch_video: "Watch Video",
            hero_badge: "Subscription Management Platform",
            hero_title: "Smart <span class='gradient-text'>Subscription</span> Management for Your Business",
            hero_desc: "A powerful platform for small and medium-sized businesses to manage subscriptions, track customer visits via QR codes, and deliver personalized services.",
            about_label: "About Us", about_title: "Building the future of<br>subscription management",
            about_text_1: "SubscribeMe is a passionate team of developers, designers, and entrepreneurs committed to transforming how small and medium-sized service businesses manage their customers.",
            about_text_2: "We believe in simple, smart, and scalable digital tools that empower businesses to focus on growth — not paperwork. Our platform helps fitness clubs, learning centers, and coffee shops manage subscriptions, track customer visits via QR codes, and offer personalized services.",
            stat_businesses: "Businesses", stat_subscribers: "Subscribers", stat_uptime: "Uptime",
            features_label: "Why SubMe", features_title: "Everything you need to manage subscriptions",
            features_subtitle: "A powerful platform designed to automate, track, and grow your subscription-based business.",
            f1_title: "Flexible Solution for Various Industries", f1_desc: "SubscribeMe is built to serve any business model — from gyms and coworking spaces to digital content providers and subscription boxes.",
            f2_title: "Automatic Control via QR Code", f2_desc: "Eliminate manual check-ins, paper logs and front-desk bottlenecks by issuing each subscriber a unique, scannable QR code.",
            f3_title: "Unified Control Panel for Customers", f3_desc: "Give subscribers a one-stop portal where they can manage subscriptions, view schedules, track progress, and access personalized services.",
            f4_title: "Digital Analytics & Personalized Services", f4_desc: "Turn raw subscription data into actionable insights and tailor-made offerings that increase retention and revenue.",
            problem_label: "The Problem", problem_title: "Challenges facing small & medium businesses",
            p1_title: "Lack of automation in counting customer visits", p1_desc_long: "Businesses lose up to 15% of revenue due to manual tracking errors and forgotten check-ins.",
            p2_title: "No ability to convert visitors into regular customers", p2_desc_long: "Without loyalty data, 70% of first-time visitors never return back to the service.",
            p3_title: "Use of outdated methods like Excel or no control at all", p3_desc_long: "Manual data entry wastes 10+ hours per week for business owners and staff.",
            segments_label: "Target Segments", segments_title: "Designed for businesses like yours",
            segments_subtitle: "We serve a variety of subscription-based businesses across multiple industries.",
            s1_title: "Gyms", s1_desc: "Fitness and gym centers that work with subscriptions, track attendance, and manage membership plans.",
            s2_title: "Learning Centers", s2_desc: "Educational courses, tutoring centers, and training programs with 10–12 session packages.",
            s3_title: "Coffee Shops", s3_desc: "Centers that serve customers with loyalty bonuses, punch cards, or subscription-based plans.",
            pricing_label: "Pricing", pricing_title: "Simple, transparent pricing",
            pricing_subtitle: "Choose the plan that works best for your business.",
            p1_name: "Monthly Payment", p1_period: "per month",
            p1_f1: "Monthly subscription fees from business owners, ranging from 300,000 to 500,000 UZS depending on business type",
            p1_f2: "Full access to all platform features", p1_f3: "QR code management system",
            popular: "Popular", p2_name: "Business Plan", p2_period: "per subscriber",
            p2_f1: "Pay per subscriber: 2,000 UZS per subscriber", p2_f2: "Scales with your business growth", p2_f3: "Full analytics and reporting",
            contact_label: "Contact", contact_title: "Get in touch with us",
            contact_info_h: "Let's Talk", contact_info_p: "We're here to help you revolutionize your subscription management.",
            address: "Address", address_desc: "Uzbekistan, Tashkent, Chilanzar C-34-30",
            call_us: "Call Us", email_us: "Email Us",
            form_name: "Your Name", form_email: "Your Email", form_subject: "Subject", form_message: "Message", form_submit: "Send Message",
            team_label: "Our Team", team_title: "Meet the people behind SubMe",
            role_pm: "Project Manager", role_mobile: "Mobile Developer", role_web: "Web Developer", role_backend: "Backend Developer",
            cta_text: "SUBSCRIBEME",
            footer_desc: "A subscription-based customer management platform for small and medium-sized businesses. Driven by innovation, backed by data.",
            footer_navigate: "Navigate", footer_download: "Download App", footer_scan: "Scan QR to download:", footer_follow: "Follow Us", footer_social: "Our social networks:",
            footer_copyright: "&copy; 2025 SubMe. All rights reserved. Built with ❤️ in Uzbekistan."
        },
        uz: {
            nav_home: "Asosiy", nav_about: "Biz haqimizda", nav_features: "Imkoniyatlar", nav_segments: "Sohalar", nav_team: "Jamoa", nav_pricing: "Narxlar", nav_contact: "Aloqa",
            btn_account: "Shaxsiy kabinet", btn_get_started: "Boshlash", btn_watch_video: "Videoni ko'rish",
            hero_badge: "Obunalarni boshqarish platformasi",
            hero_title: "Biznesingiz uchun aqlli <span class='gradient-text'>Obuna</span> boshqaruvi",
            hero_desc: "Kichik va o'rta biznes uchun obunalarni boshqarish, QR-kod orqali mijozlar tashrifini kuzatish va individual xizmatlar ko'rsatish uchun kuchli platforma.",
            about_label: "Biz haqimizda", about_title: "Obuna boshqaruvining<br>kelajagini quryapmiz",
            about_text_1: "SubscribeMe — bu kichik va o'rta xizmat ko'rsatish korxonalariga mijozlarini boshqarishda yordam berishga intiluvchi dasturchilar va tadbirkorlar jamoasi.",
            about_text_2: "Biz bizneslarga hujjatbozlikka emas, rivojlanishga e'tibor qaratishga yordam beruvchi oddiy va aqlli raqamli vositalarga ishonamiz. Platformamiz fitnes klublar, o'quv markazlari va kafelarga mijozlarni boshqarishda yordam beradi.",
            stat_businesses: "Bizneslar", stat_subscribers: "Obunachilar", stat_uptime: "Ish vaqti",
            features_label: "Nega SubMe", features_title: "Obunalarni boshqarish uchun barcha vositalar",
            features_subtitle: "Obunaga asoslangan biznesingizni avtomatlashtirish va rivojlantirish uchun mo'ljallangan platforma.",
            f1_title: "Turli sohalar uchun universal yechim", f1_desc: "SubMe har qanday biznes modeli — fitnesdan tortib raqamli kontent provayderlarigacha xizmat ko'rsatadi.",
            f2_title: "QR-kod orqali avtomatik nazorat", f2_desc: "Har bir obunachiga noyob QR-kod berish orqali tashriflarni qo'lda hisobga olishni bartaraf qiling.",
            f3_title: "Mijozlar uchun yagona boshqaruv paneli", f3_desc: "Obunachilarga obunalarini boshqarish, jadvalni ko'rish va natijalarini kuzatish uchun bitta portal taqdim eting.",
            f4_title: "Raqamli tahlil va individual xizmatlar", f4_desc: "Obuna ma'lumotlarini tushunish va xizmatlarni mijozlar talabiga moslashtirish orqali daromadni oshiring.",
            problem_label: "Muammo", problem_title: "Kichik va o'rta biznesdagi qiyinchiliklar",
            p1_title: "Tashriflarni hisoblashda avtomatlashtirish yetishmasligi", p1_desc_long: "Nazorat sustligi sababli korxonalar o'z daromadlarining 15 foizigacha yo'qotmoqdalar.",
            p2_title: "Tashrif buyuruvchilarni doimiy mijozga aylantira olmaslik", p2_desc_long: "Ma'lumotlar yo'qligi sababli birinchi marta kelgan mijozlarning 70 foizi qaytib kelmaydi.",
            p3_title: "Excel yoki nazoratning umuman yo'qligi", p3_desc_long: "Ma'lumotlarni qo'lda kiritish biznes egalari va xodimlar uchun haftasiga 10 soatdan ko'proq vaqt sarflashga sabab bo'ladi.",
            segments_label: "Bizning sohalar", segments_title: "Sizning biznesingiz uchun moslangan",
            segments_subtitle: "Biz turli xil obunaga asoslangan bizneslarga xizmat ko'rsatamiz.",
            s1_title: "Fitnes markazlar", s1_desc: "Obunalar bilan ishlaydigan, tashriflarni kuzatadigan va a'zolik rejalarini boshqaradigan fitnes markazlar.",
            s2_title: "O'quv markazlari", s2_desc: "O'quv kurslari, repetitorlik markazlari va 10-12 mashg'ulotlik paketlar bilan ishlovchi dasturlar.",
            s3_title: "Qahvaxonalar", s3_desc: "Mijozlarga bonuslar, punch-kartalar yoki obunaga asoslangan rejalar taqdim etuvchi markazlar.",
            pricing_label: "Narxlar", pricing_title: "Oddiy va shaffof narxlar",
            pricing_subtitle: "Biznesingiz uchun eng mos rejani tanlang.",
            p1_name: "Oylik to'lov", p1_period: "oyiga",
            p1_f1: "Biznes turiga qarab oyiga 300,000 dan 500,000 so'mgacha bo'lgan obuna to'lovi",
            p1_f2: "Barcha platforma funksiyalariga to'liq kirish", p1_f3: "QR-kod boshqaruv tizimi",
            popular: "Ommabop", p2_name: "Biznes reja", p2_period: "mijoz uchun",
            p2_f1: "Har bir obunachi uchun to'lov: 2,000 so'm", p2_f2: "Biznesingiz o'sishi bilan birga kengayadi", p2_f3: "To'liq tahlil va hisobotlar",
            contact_label: "Aloqa", contact_title: "Biz bilan bog'laning",
            contact_info_h: "Gaplashamiz", contact_info_p: "Obuna boshqaruvini inqilob qilishda sizga yordam berishga tayyormiz.",
            address: "Manzil", address_desc: "O'zbekiston, Toshkent, Chilonzor C-34-30",
            call_us: "Telefon", email_us: "Email",
            form_name: "Ismingiz", form_email: "Emailingiz", form_subject: "Mavzu", form_message: "Xabar", form_submit: "Xabarni yuborish",
            team_label: "Jamoamiz", team_title: "SubMe ortidagi insonlar bilan tanishing",
            role_pm: "Loyiha menejeri", role_mobile: "Mobil dasturchi", role_web: "Veb dasturchi", role_backend: "Backend dasturchi",
            cta_text: "SUBSCRIBEME",
            footer_desc: "Kichik va o'rta biznes uchun obunaga asoslangan mijozlarni boshqarish platformasi. Innovatsiyalar va ma'lumotlarga asoslangan.",
            footer_navigate: "Navigatsiya", footer_download: "Ilovani yuklang", footer_scan: "Yuklash uchun QR-kodni skanerlang:", footer_follow: "Bizni kuzating", footer_social: "Ijtimoiy tarmoqlarimiz:",
            footer_copyright: "&copy; 2025 SubMe. Barcha huquqlar himoyalangan. O'zbekistonda ❤️ bilan yaratilgan."
        },
        ru: {
            nav_home: "Главная", nav_about: "О нас", nav_features: "Возможности", nav_segments: "Сегменты", nav_team: "Команда", nav_pricing: "Цены", nav_contact: "Контакты",
            btn_account: "Личный кабинет", btn_get_started: "Начать работу", btn_watch_video: "Смотреть видео",
            hero_badge: "Платформа управления подписками",
            hero_title: "Умное управление <span class='gradient-text'>Подписками</span> для вашего бизнеса",
            hero_desc: "Мощная платформа для малого и среднего бизнеса для управления подписками, отслеживания посещений клиентов через QR-коды и предоставления персонализированных услуг.",
            about_label: "О нас", about_title: "Создаем будущее<br>управления подписками",
            about_text_1: "SubscribeMe — это команда увлеченных разработчиков, дизайнеров и предпринимателей, стремящихся изменить способ управления клиентами в малом и среднем сервисном бизнесе.",
            about_text_2: "Мы верим в простые, умные и масштабируемые цифровые инструменты, которые позволяют компаниям сосредоточиться на росте, а не на бумажной волоките. Наша платформа помогает фитнес-клубам, учебным центрам и кофейням управлять подписками и отслеживать посещения через QR-коды.",
            stat_businesses: "Бизнесов", stat_subscribers: "Подписчиков", stat_uptime: "Аптайм",
            features_label: "Почему SubMe", features_title: "Все необходимое для управления подписками",
            features_subtitle: "Мощная платформа, разработанная для автоматизации, отслеживания и развития вашего бизнеса на основе подписки.",
            f1_title: "Гибкое решение для различных отраслей", f1_desc: "SubscribeMe создан для любой бизнес-модели — от спортзалов и коворкингов до поставщиков цифрового контента.",
            f2_title: "Автоматический контроль по QR-коду", f2_desc: "Устраните ручную регистрацию и очереди на входе, выдавая каждому подписчику уникальный сканируемый QR-код.",
            f3_title: "Единая панель управления для клиентов", f3_desc: "Предоставьте подписчикам универсальный портал для управления подписками, просмотра расписаний и отслеживания прогресса.",
            f4_title: "Цифровая аналитика и персонализация", f4_desc: "Превратите данные о подписках в полезную информацию и индивидуальные предложения, повышающие доход.",
            problem_label: "Проблема", problem_title: "Проблемы малого и среднего бизнеса",
            p1_title: "Отсутствие автоматизации учета посещений", p1_desc_long: "Бизнес теряет до 15% дохода из-за ошибок ручного отслеживания и забытых посещений.",
            p2_title: "Невозможность превратить посетителей в постоянных клиентов", p2_desc_long: "Без данных о лояльности 70% посетителей никогда не возвращаются за услугой повторно.",
            p3_title: "Использование устаревших методов, таких как Excel", p3_desc_long: "Ручной ввод данных отнимает более 10 часов в неделю у владельцев бизнеса и персонала.",
            segments_label: "Целевые сегменты", segments_title: "Разработано для вашего бизнеса",
            segments_subtitle: "Мы обслуживаем различные виды бизнеса на основе подписки в разных отраслях.",
            s1_title: "Спортзалы", s1_desc: "Фитнес-центры, которые работают с абонементами, отслеживают посещаемость и управляют тарифными планами.",
            s2_title: "Учебные центры", s2_desc: "Образовательные курсы и центры обучения с пакетами на 10–12 занятий.",
            s3_title: "Кофейни", s3_desc: "Центры, предлагающие клиентам бонусы лояльности, карты посещений или планы на основе подписки.",
            pricing_label: "Цены", pricing_title: "Простая и прозрачная стоимость",
            pricing_subtitle: "Выберите план, который лучше всего подходит вашему бизнесу.",
            p1_name: "Ежемесячный платеж", p1_period: "в месяц",
            p1_f1: "Абонентская плата от 300,000 до 500,000 сум в месяц в зависимости от типа бизнеса",
            p1_f2: "Полный доступ ко всем функциям платформы", p1_f3: "Система управления QR-кодами",
            popular: "Популярный", p2_name: "Бизнес план", p2_period: "за подписчика",
            p2_f1: "Оплата за активного подписчика: 2,000 сум", p2_f2: "Масштабируется вместе с ростом вашего бизнеса", p2_f3: "Полная аналитика и отчетность",
            contact_label: "Контакты", contact_title: "Свяжитесь с нами",
            contact_info_h: "Давайте обсудим", contact_info_p: "Мы здесь, чтобы помочь вам революционизировать управление подписками.",
            address: "Адрес", address_desc: "Узбекистан, Ташкент, Чиланзар Ц-34-30",
            call_us: "Позвонить", email_us: "Email",
            form_name: "Ваше имя", form_email: "Ваш Email", form_subject: "Тема", form_message: "Сообщение", form_submit: "Отправить сообщение",
            team_label: "Наша команда", team_title: "Познакомьтесь с создателями SubMe",
            role_pm: "Проджект менеджер", role_mobile: "Мобильный разработчик", role_web: "Веб разработчик", role_backend: "Бэкенд разработчик",
            cta_text: "SUBSCRIBEME",
            footer_desc: "Платформа для бизнеса малого и среднего сегмента для управления клиентами по подписке. Инновации и данные.",
            footer_navigate: "Навигация", footer_download: "Скачать приложение", footer_scan: "Сканируйте QR для загрузки:", footer_follow: "Мы в соцсетях", footer_social: "Наши социальные сети:",
            footer_copyright: "&copy; 2025 SubMe. Все права защищены. Сделано с ❤️ в Узбекистане."
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update Lang Buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        localStorage.setItem('subme_lang', lang);
        document.documentElement.lang = lang;
    };

    const currentLang = localStorage.getItem('subme_lang') || 'en';
    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // ==========================================
    // 2. Theme Toggle (Light / Dark)
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const setTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
        localStorage.setItem('subme_theme', theme);
    };

    const currentTheme = localStorage.getItem('subme_theme') || 'dark';
    setTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // ==========================================
    // 3. Futuristic Hero Glow Animation
    // ==========================================
    const hero = document.getElementById('hero');
    const heroGlow = document.getElementById('heroGlow');

    if (hero && heroGlow) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = hero.getBoundingClientRect();
            const x = ((clientX - left) / width) * 100;
            const y = ((clientY - top) / height) * 100;
            heroGlow.style.left = `${x}%`;
            heroGlow.style.top = `${y}%`;
            heroGlow.style.opacity = '0.8';
        });

        hero.addEventListener('mouseleave', () => {
            heroGlow.style.left = '50%';
            heroGlow.style.top = '50%';
            heroGlow.style.opacity = '0.5';
        });
    }

    // ==========================================
    // 4. Navbar Scroll Effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) { navbar.classList.add('scrolled'); } 
        else { navbar.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ==========================================
    // 5. Mobile Navigation
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobilePanel = document.getElementById('mobilePanel');
    const mobileLinks = mobilePanel ? mobilePanel.querySelectorAll('a') : [];

    const toggleMenu = () => {
        mobileToggle.classList.toggle('active');
        mobilePanel.classList.toggle('open');
        document.body.style.overflow = mobilePanel.classList.contains('open') ? 'hidden' : '';
    };

    if (mobileToggle) { mobileToggle.addEventListener('click', toggleMenu); }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobilePanel && mobilePanel.classList.contains('open')) { toggleMenu(); }
        });
    });

    // ==========================================
    // 6. Scrollspy
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const scrollActive = () => {
        const scrollY = window.scrollY;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);
            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollActive);

    // ==========================================
    // 7. Scroll to Top
    // ==========================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) { scrollToTopBtn.classList.add('visible'); } 
            else { scrollToTopBtn.classList.remove('visible'); }
        });
        scrollToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    // ==========================================
    // 8. Intersection Observer for Reveals
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // ==========================================
    // 9. EmailJS
    // ==========================================
    if (typeof emailjs !== 'undefined') { emailjs.init("PEFgZI-4c5H3aXOhe"); }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const submitBtn = document.getElementById('submitBtn');
            const formMessage = document.getElementById('formMessage');
            const originalBtnText = submitBtn.innerText;
            const lang = localStorage.getItem('subme_lang') || 'en';

            submitBtn.innerText = lang === 'en' ? 'Sending...' : (lang === 'uz' ? 'Yuborilmoqda...' : 'Отправка...');
            submitBtn.disabled = true;

            emailjs.send("service_en118vv", "template_blevpbo", {
                name: document.getElementById('name-field')?.value || '',
                email: document.getElementById('email-field')?.value || '',
                subject: document.getElementById('subject-field')?.value || '',
                message: document.getElementById('message-field')?.value || '',
            })
            .then(() => {
                formMessage.innerText = lang === 'en' ? 'Message sent!' : (lang === 'uz' ? 'Yuborildi!' : 'Отправлено!');
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();
                setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
            }, () => {
                formMessage.innerText = 'Error!';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});