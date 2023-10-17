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
            },
            seo: {},
          },
        },
      },
    },
  });

export default i18n;
