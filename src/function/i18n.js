import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: {
              header: {
                log: "Log In",
                main: "Home",
                about: "About Us",
                course: "Courses",
                vidguk: "Reviews",
                cabinet: "Account",
                contact: "Contact",
                aboutTit: "About Us",
                aboutDesc:
                  "'Newton's Apples' is a fun and creative company specializing in creating engaging and educational lessons for children. Our mission is to make learning interesting and accessible for young scholars. We combine science and entertainment to create unique educational programs that develop not only knowledge but also a love for learning. With 'Newton's Apples,' every day is a new opportunity to discover the wonders of the world through fun and educational adventures. Allow your child to explore the most exciting with 'Newton's Apples'.",
                aboutBut: "Read More",
                news: "Our News",
                goTo: "Go to Course",
                whyChooseTitle: "Why Parents Choose Newton's Apples?",
                whyChouseBut: "Learn More",
                whyChooseDesc:
                  "Parents choose \"Newton's Apples\" because of our unwavering commitment to children's education. Our company offers the best lessons and educational programs to help children gain the knowledge, skills, and values necessary for their future success. We believe that learning should be exciting and inspiring, and that is exactly what we provide to your children every day.",
                newton: "Newton's Apples",
                webUI: " WebUi-Studio Development and Support",
                blockOneTitle: "Pencil Drawing Lessons",
                blockOneDesc: "Drawing lessons for any age",
                buttonBlockOne: "Learn More",
                bigAbFirspP: "Awaken the Genius in Your Child",
                pPidH:
                  "The teacher builds lessons taking into account the individual characteristics of each student. The lessons are aimed at revealing the child's potential. It is very important that the child finds it interesting. We select only interesting and useful programs.",
                whyUsTitle: "Why Us?",
                wyUsDesc: "Our Advantages",
                prof: "Professionalism",
                profDesc:
                  "Lessons for preschoolers from 8 months to 7 years. Small groups - up to 8 children",
                ourNews: "New Arrivals",
                ourNewsH: "Check out our new lessons",
                courseName: "Pencil Drawing Lesson",
                courseDesc:
                  "This lesson will teach you to use various interesting drawing styles",
              },
              courses: {
                title: "Online Courses for Children by Newton's Apples",
                descTitle:
                  "Explore a world of creativity with our online courses for children by Newton's Apples. Join us for courses in drawing, sculpting, and more – where imagination knows no bounds!",
                descUlFirst: "HD Quality Videos",
                descUlSecond: "24/7 Video Access",
                descULThre: "Online Support",
                descULFour: "Convenient Payment Methods",
                year: "years",
                price: "Course price",
                lesson: "lessons",
                secondBlockTitle:
                  "Engaging in the Newton's Apples proprietary methodology, your child:",
                secFirst: "Learn to work with various creative materials",
                secTwo: "Expand horizons",
                secThre: "Develop creative thinking",
                secFour: "Cultivate imagination",
                secFive: "Enhance concentration and perseverance",
                secSix: "Boost self-esteem and self-confidence",
                secSeven: "Enjoy quality time with engaging activities",
                titBlockOur: "Advantages of Our Online Courses",
                advFirstTitle: "Very cost-effective",
                advSecondTitle: "Flexible schedule",
                advThreTitle: "Accessibility",
                advFourTitle: "Result",
                advFiveTitle: "Benefit",
                advSixTitle: "Methodologies",
                advDescFirst:
                  "The cost of one lesson in the course is much cheaper than with an average teacher.",
                advDescSecond:
                  "You choose the learning schedule yourself, everything happens on a closed online platform at a convenient time for you.",
                advDescThre:
                  "Lessons are available from anywhere in the world 24/7, from any device. Don't waste your time on anything other than painting.",
                advDescFour:
                  "If it doesn't work out for you, we'll get results or give your money back.",
                advDescFive:
                  "Drawing develops: motor skills, spatial and hemispheric thinking, concentration, and your child's patience.",
                advDescSix:
                  "All methodologies are author's and tested on our own children and thousands of satisfied customers.",
              },
            },
            seo: {},
          },
        },
      },
      ua: {
        translation: {
          description: {
            part1: {
              header: {
                log: "Увійти",
                main: "Головна",
                about: "Про нас",
                course: "Курси",
                vidguk: "Відгуки",
                cabinet: "Кабінет",
                contact: "Контакти",
                aboutTit: "Про нас",
                aboutDexc:
                  "'Ньютонові яблучка' - це весела та креативна компанія, яка спеціалізується на створенні захопливих та освітніх уроків для дітей. Наша місія - робити навчання цікавим та доступним для маленьких вчених. Ми поєднуємо науку та розваги, щоб створити унікальні навчальні програми, які розвивають не лише знання, але і любов до вивчення. З 'Ньютоновими яблучками' кожен день - це нова можливість відкривати дива навколишнього світу через веселі та пізнавальні пригоди. Дозвольте вашій дитині відкрити для себе найцікавіше з 'Ньютоновими яблучками'.",
                abotBut: "Читати більше",
                news: "Наші новинки",
                goTo: "Перейти до курсу",
                whyChouseTitle: "Чому батьки обирають Ньютонові яблучка?",
                whyChouseBut: "Детальніше",
                whyChouseDesc:
                  'Батьки обирають "Ньютонові яблучка" через нашу неперевершену відданість освіті дітей. Наша компанія пропонує найкращі уроки та навчальні програми, які допомагають дітям здобути знання, навички та цінності, необхідні для їхнього майбутнього успіху. Ми віримо, що навчання повинно бути захоплюючим та надихаючим, і саме це ми надаємо вашим дітям кожен день.',
                newtom: "Ньютонові яблучка",
                webUI: " Розробка та підтримка WebUi-Studio",
                blockOneTitle: "Уроки малювання олівцем",
                blockOneDesc: "Уроки малювання на будь який вік",
                buttonBlockOne: "Детальніше",
                bigAbFirspP: "Розбудити в дитині генія",
                pPidH:
                  "Викладач будує заняття з урахуванням індивідуальних особливостей кожного учня. Заняття спрямовані на розкриття потенціалу дитини. Дуже важливо, щоб дитині було цікаво. Ми підбираємо тільки цікаві та корисні програми.",
                whyUsTitle: "Чому ми?",
                wyUsDesc: "Наші переваги",
                prof: "Професіоналізм",
                profDesc:
                  "Заняття для дошкільнят від 8 місяців до 7 років. Малі групи – до 8 дітей",
                ourNews: "Новинки",
                ourNewsH: "Встигни переглянути наші нові уроки",
                courseName: "Урок малювання олівцем",
                courseDesc:
                  "Цей урок навчить Вас використовувати багато цікавих стилів малювання",
              },
              contact: {
                howFind: "Як нас знайти",
                comName: "Ньютонові яблучка",
                ukAdress: "Львів, Львівська 3А",
                engAdress: "NY, Lvivska 3A",
                phone: "Телефон",
                form: "Зворотній зв'язок",
                name: "Імʼя",
                mes: "Повідомлення",
                buttonSend: "Відправити",
              },
              cabinet: {
                title: "Особистий кабінет",
                hi: "Привіт,",
                quit: "Вийти",
                name: "Імʼя",
                myCourse: "Мої курси",
                subs: "Мої підписки",
                message: "Повідомлення",
                not: "У Вас немає активних покупок",
                regH: "Реєстрація",
                ifReg: "Якщо зареєстровані",
                ifNotReg: "Якщо не зареєстровані",
                vhid: "Вхід",
                registration: "",
                pasww: "Пароль",
                regP: "Зареєструватись",
                regGoo: "Увійти за допомогою Google",
                en: "Увійти",
                myInformation: "Особиста інформація",
                phone: "Телефон",
                foto: "Фото",
                upData: "Обновити данні",
              },
              courses: {
                title: "Онлайн курси для дітей від Ньютонових яблучок",
                descTitle:
                  "Досліджуйте світ творчості разом з нашими онлайн-курсами для дітей від Ньютонових яблучок. Приєднуйтесь до нас на курсах з малювання, ліплення та багато інших видів мистецтва, де уява не має меж!",
                descUlFirst: "Відео в HD якості",
                descUlSecond: "Доступ до відео 24/7",
                descULThre: "Пдтримка онлайн",
                descULFour: "Зручні методи оплати",
                year: "роки",
                price: "Вартість курсу",
                lesson: "уроків",
                secondBlockTitle:
                  "Займаючись по авторській методиці від Ньютонових яблучок, Ваша дитина:",
                secFirst: "Навчиться працювати з різними творчими матеріалами",
                secTwo: "Розширить світогляд",
                secThre: "Розвиток креативного мислення",
                secFour: "Розвиток фантазії та уяви",
                secFive: "Розвине концентрацію та наполегливість",
                secSix: "Збільшить самооцінку та впевненість в собі",
                secSeven: "Чудово проведе час за цікавим заняттям",
                titBlockOur: "Переваги наших онлайн курсів",
                advFirstTitle: "Дуже вигідно",
                advSecondTitle: "Вільний графік",
                advThreTitle: "Доступність",
                advFourTitle: "Гарантія",
                advFiveTitle: "Користь",
                advSixTitle: "Методики",
                advDescFirst:
                  "Вартість одного уроку в курсі набагато дешевша, ніж заняття із середньостатистичним викладачем",
                advDescSecond:
                  "Графік навчання ви вибираєте самі, все відбувається на закритій онлайн платформі, у зручний для вас час.",
                advDescThre:
                  "Уроки доступні з будь-якої точки планети 24/7 з будь-якого пристрою. Не витрачайте свій час ні на що, окрім малювання.",
                advDescFour:
                  "Якщо у вас не вийде – ми доведемо до результату чи повернемо гроші.",
                advDescFive:
                  "Малювання розвиває: моторику, просторове і півкульне мислення, зосередженість та посидючість вашого малюка.",
                advDescSix:
                  "Всі методики авторські та перевірені на власних дітях і тисячах задоволених клієнтів.",
              },
            },
            seo: {},
          },
        },
      },
    },
  });

export default i18n;
