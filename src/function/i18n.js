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
                vidguk: "Blog",
                cabinet: "Account",
                contact: "Contact",
                aboutTit: "About Us",
                aboutDexc:
                  "'Newton's Apples' is a fun and creative company specializing in creating engaging and educational lessons for children. Our mission is to make learning fun and accessible for young learners. We combine science and entertainment to create unique educational programs that foster not only knowledge but also a love for learning. With 'Newton's Apples,' every day is an opportunity to discover the wonders of the world through fun and educational adventures. Let your child explore the most interesting things with 'Newton's Apples'.",
                abotBut: "Read More",
                news: "Our Latest News",
                goTo: "Go to Course",
                whyChouseTitle: "Why Parents Choose Newton's Apples?",
                whyChouseBut: "Learn More",
                whyChouseDesc:
                  "Parents choose Newton's Apples because of our unwavering dedication to children's education. Our company offers the best lessons and educational programs that help children gain the knowledge, skills, and values they need for their future success. We believe that learning should be exciting and inspiring, and that is exactly what we provide to your children every day.",
                newton: "Newton's Apples",
                webUI: "WebUi-Studio Development and Support",
                blockOneTitle: "Pencil Drawing Lessons",
                blockOneDesc: "Drawing lessons for all ages",
                buttonBlockOne: "Learn More",
                bigAbFirspP: "Awaken the Genius in Your Child",
                pPidH:
                  "The teacher builds lessons considering the individual features of each student. Lessons are aimed at unlocking the child's potential. It is crucial for the child to be interested. We only select interesting and useful programs.",
                whyUsTitle: "Why Us?",
                wyUsDesc: "Our Advantages",
                prof: "Professionalism",
                profDesc:
                  "We offer an endless selection of video lessons for children of all interests. Our lessons cover various topics to make learning engaging and exciting.",
                profTwo: "Quality",
                profDescTwo:
                  "Our video lessons feature bright images and clear sound to ensure the highest quality learning experience. Children will be amazed by the excellent content quality.",
                profThre: "Flexible Schedule",
                profDescThre:
                  "Children can learn at a time that suits them best. Our flexible learning schedule allows them to adapt their education to their daily routine.",
                profFour: "Experienced Team",
                profDescFour:
                  "Our team consists of professionals in children's education. They have extensive experience and knowledge to make learning engaging and effective.",
                profFive: "Interactivity",
                profDescFive:
                  "Learning becomes exciting with interactive video lessons for children. Our lessons engage children and make learning interesting and educational.",
                profSix: "Safety",
                profDescSix:
                  "We prioritize your child's safety during their learning journey. Our content complies with the highest safety standards for young learners.",
                ourNews: "Latest Additions",
                ourNewsH: "Check out our newest lessons",
                courseName: "Pencil Drawing Course",
                courseDesc:
                  "This course will teach you various exciting drawing styles",
                wakeH: "Wake a Genius in a Child",
                wakeDesc:
                  "Engaging and valuable programs, individualized approach to each student, and stimulating learning will help uncover your child's talents.",
                butWake: "Check out our lessons",
                firstBST: "Courses for Boys",
                descFirstBst: "Courses for boys of any age",
                secondBST: "Courses for Girls",
                descSecondBst: "Courses for girls of any age",
                threBST: "Drawing Courses",
                descThreBst: "Drawing courses for children of any age",
                fourBST: "Sculpting Courses",
                descFourBst: "Sculpting courses for children of any age",
                all: "All",
                viewMore: "Show More",
                viewNoMore: "No More Articles",
                haveQue: "Have Questions?",
                writeUs: "Write to us on Telegram",
                write: "Write",
              },
              contact: {
                howFind: "How to Find Us",
                comName: "Newton's Apples",
                ukAdress: "Lviv, Lvivska 3A",
                engAdress: "NY, Lvivska 3A",
                phone: "Phone",
                form: "Contact Form",
                name: "Name",
                mes: "Message",
                buttonSend: "Send a message",
                titleFirst: "Contact Us",
                titleFirstBig: "Do you have any questions?",
                descFirst:
                  "If you feel the need to get more detailed information about our online lessons, feel free to write to us!",
                blockEmailUsT: "Email us",
                blockEmailUsDesc:
                  "Email us for general queries and partnership opportunitiesі",
                blockPhoneUsT: "Call us",
                blockPhoneUsDesc: "Always happy to help.",
                blockFormT: "Send a message",
                bloclFOrmTB: "Leave us a message",
                blockFormDesc:
                  "Whether you want to write a message to us or leave us a review, don’t hesitate and fill up the contact form below!",
              },
              cabinet: {
                title: "Personal Cabinet",
                hi: "Hello,",
                quit: "Log Out",
                name: "Name",
                myCourse: "My Courses",
                subs: "My Subscriptions",
                message: "Messages",
                not: "You have no active purchases",
                regH: "Registration",
                ifReg: "If You're Registered",
                ifNotReg: "If You're Not Registered",
                vhid: "Login",
                registration: "",
                pasww: "Password",
                regP: "Register",
                regGoo: "Log in with Google",
                en: "Log In",
                myInformation: "Personal Information",
                phone: "Phone",
                foto: "Photo",
                upData: "Update Data",
                work: "My works",
                yourH1W: "Your work",
                lesName: "Lesson Name",
                statusCHe: "Status check",
                ches: "checked",
                chesNo: "not checked",
                star: "Rating",
                rewi: "Teacher's review",
                mesa: "Your messages",
                adm: "Newton's Apple Administration",
                ref: "Referral System",

                refLink: "Your referral link",
              },
              modal: {
                title:
                  "To access the video lesson, you need to pay for the course",

                promo:
                  "If you have a discount promo code, enter it and press Apply",
                button: "Pay",
                cur: "usd",
                kra: "Your balance",
                kraAf: "coins",
                cn: "Apply",
                cnM: "Use",
                tarifT: "Tariff",
                nameOne: "Minimum",
                tarifDesOne: "One month",
                standart: "Standard",
                twoM: "Three Months",
                syp: "Advanced",
                pivY: "Six Months",
                maks: "Maximum",
                year: "One Year",
                courS: "This course can be accessed through a subscription.",
                courD:
                  "By subscribing to one of the options, you can access this course and other courses in the subscription category for the duration of your paid term.",
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
                lesson: "Number of lessons",
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
                smalFotoDesc:
                  "You can share the result of each lesson with us. We are very interested in what you've achieved! Just send us a photo of your work.",
                whotNeed: "What you will need",
                coment: "Comments",
                addCom: "Leave a comment",
                send: "Send",
                nextLes: "Наступний урок",

                nextLes: "Next lesson",
                cate: "Categories",
                age: "Age Group",
                payC: "Course cost",
                freeC: "Free",
                notFre: "Paid",
                subscription: "Subscription",
              },
              aboutPage: {
                title: "Welcome to Newton's Apples",
                description:
                  "Newton's Apples is a fun and creative enterprise specializing in creating engaging and educational lessons for children. Our mission is to make learning interesting and accessible for young scholars. We blend science and entertainment to craft unique educational programs that foster knowledge development and inspire children to learn with passion. With 'Newton's Apples,' every day is an opportunity to discover the wonders of the world through exciting and educational adventures. Allow your child to explore the most fascinating aspects with 'Newton's Apples.'",
                but: "Check out our lessons",
                aboutTeacher: "Our Staff",
                abotTitleTeacher: "Our Teachers",
                teacherDesc:
                  "Talented teachers who inspire and guide us to knowledge and achievements. Get to know our team!",
                teacherFirstName: "Katerina",
                teacherFirstSmallDesc:
                  "Artist, graphic designer, professional in decorative art",
                teacherFirstBidDesc:
                  "Will paint with your child using various painting techniques. Uses sketches and ideas to create unique drawings. Easily connects with children.",
                ownerTitle:
                  "«We understand how important it is for children to grow up healthy, smart and happy. We develop programs that will be interesting and useful for the future generation»",
                ownerDesc: "Viktoria Chepovetska",
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
                vidguk: "Блог",
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
                  "Ми пропонуємо безмежний вибір відеоуроків для дітей на будь-який смак. Наші уроки охоплюють різні теми, щоб навчання завжди було захоплюючим та цікавим.",
                profTwo: "Якість",
                profDescTwo:
                  "Наші відеоуроки мають яскраве зображення та чіткий звук, щоб навчання було максимально якісним. Діти будуть в захваті від нашої відмінної якості контенту.",
                profThre: "Графік",
                profDescThre:
                  "Діти можуть навчатися в той час, коли це для них зручно. Наш гнучкий графік навчання дозволяє підлаштовувати навчання під життєвий розклад кожного маленького вчня.",
                profFour: "Команда",
                profDescFour:
                  "Наша команда - це професіонали в навчанні дітей. Вони мають великий досвід та знання, щоб робити навчання цікавим та ефективним.",
                profFive: "Інтерактивність",
                profDescFive:
                  "Навчання стає захоплюючим завдяки інтерактивним відеоурокам для дітей. Наші уроки залучають дітей та роблять навчання цікавим та пізнавальним.",
                profSix: "Безпека",
                profDescSix:
                  "Ми дбаємо про безпеку вашої дитини під час навчання. Наш вміст відповідає найвищим стандартам безпеки для маленьких вчнів.",
                ourNews: "Новинки",
                ourNewsH: "Встигни переглянути наші нові уроки",
                courseName: "Урок малювання олівцем",
                courseDesc:
                  "Цей урок навчить Вас використовувати багато цікавих стилів малювання",
                wakeH: "Пробудити в дитині генія",
                wakeDesc:
                  "Цікаві та корисні програми, індивідуальний підхід до кожного учня та стимулююче навчання допоможуть розкрити талант Вашої дитини.",
                butWake: "Перегляньте наші уроки",
                firstBST: "Курс для хлопчиків",
                descFirstBst: "Курси для хлопчиків будь-якого віку",
                secondBST: "Курс для дівчаток",
                descSecondBst: "Курси для дівчаток будь-якого віку",
                threBST: "Курси малювання",
                descThreBst: "Курси малювання для дітей будь-якого віку",
                fourBST: "Курси ліпнини",
                descFourBst: "Курси ліпнини для дітей будь-якого віку",
                all: "Усі",
                viewMore: "Показати ще",
                viewNoMore: "Немає більше статей",
                haveQue: "Є запитання?",
                writeUs: "Напиши нам в телеграм",
                write: "Написати",
                prom: "Реферальне посилання не існує",
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
                buttonSend: "Відправити повідомлення",
                titleFirst: "Зв'яжіться з нами",
                titleFirstBig: "У вас є питання?",
                descFirst:
                  "Якщо ви відчуваєте потребу отримати більш детальну інформацію про наші онлайн уроки, сміливо пишіть нам!",
                blockEmailUsT: "Напишіть нам",
                blockEmailUsDesc:
                  "Пишіть нам електронною поштою для загальних запитів і можливостей партнерства",
                blockPhoneUsT: "Телефонуйте нам",
                blockPhoneUsDesc: "Завжди раді допомогти.",
                blockFormT: "Відправити повідомлення",
                bloclFOrmTB: "Залиште нам повідомлення",
                blockFormDesc:
                  "Якщо ви хочете написати нам повідомлення або залишити відгук, не зволікайте та заповніть контактну форму нижче!",
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
                work: "Мої роботи",
                yourH1W: "Ваші роботи",
                lesName: "Назва уроку",
                statusCHe: "Статус перевірки",
                ches: "перевірено",
                chesNo: "не перевірено",
                star: "Оцінка",
                rewi: "Відгук викладача",
                mesa: "Ваші повідомлення",
                adm: "Адміністрація Ньютонових яблучок",
                ref: "Реферальна система",
                refLink: "Ваше реферальне посилання",
              },
              modal: {
                title: "Для перегляду відео уроку потрібно оплатити курс",
                promo:
                  "Якщо у Вас є промоком на знажку введіть його та натисніть застосувати",
                button: "Оплатити",
                cur: "грн",
                kra: "Ваш баланс",
                kraAf: "монет",
                cn: "Застосувати",
                cnM: "Використати",
                tarifT: "Тариф",
                nameOne: "Мінімальний",
                tarifDesOne: "Один місяць",
                standart: "Стандарт",
                twoM: "Три місяці",
                syp: "Просунутий",
                pivY: "Шість місяців",
                maks: "Максимальний",
                year: "Один рік",
                courS: "Цей курс, можна отримати за допомогою підписки.",
                courD:
                  "Підписавшись на один із варіантів, ви матимете доступ до цього курсу та інших курсів у категорії підписки на протязі оплаченого терміну.",
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
                lesson: "Кількість уроків",
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
                smalFotoDesc:
                  "Ви можете поділитись з нами результатом кожного уроку. Нам дуже цікаво, що у Вас вийшло! Просто відправте нам фото Вашої роботи.",
                whotNeed: "Що буде потрібно",
                coment: "Коментарі",
                addCom: "Залишити коментар",
                send: "Відправити",
                nextLes: "Наступний урок",
                cate: "Категорії",
                age: "Вікова група",
                payC: "Вартість курсу",
                freeC: "Безкоштовні",
                notFre: "Платні",
                subscription: "Підписка",
              },
              aboutPage: {
                title: "Ласкаво просимо до Ньютонових яблучок",
                description:
                  "Ньютонові яблучка - це веселе та креативне підприємство, яке спеціалізується на створенні захоплюючих та освітніх уроків для дітей. Наша місія полягає в тому, щоб зробити навчання цікавим та доступним для маленьких вчених. Ми поєднуємо науку та розваги, створюючи унікальні навчальні програми, які сприяють розвитку знань та підталкуванню дітей до вивчення з любов'ю. З 'Ньютоновими яблучками' кожен день - це нова можливість відкривати дива навколишнього світу через захоплюючі та пізнавальні пригоди. Дозвольте вашій дитині відкрити найцікавіше з 'Ньютоновими яблучками'.",
                but: "Переглянути наші уроки",
                aboutTeacher: "Наш персонал",
                abotTitleTeacher: "Наші вчителі",
                teacherDesc:
                  "Талановиті вчителі, які надихають та ведуть нас до знань та досягнень. Познайомтеся із нашою командою!",
                teacherFirstName: "Катерина",
                teacherFirstSmallDesc:
                  " Художник, графічний дизайнер, професіонал декоративного мистецтва",
                teacherFirstBidDesc:
                  " Буде малювати фарбами разом з Вашою дитиною. Володіє багатьма техніками малювання. В роботі використовує ескізи і ідеї для створення індивідуальних малюнків. Легко знаходить спільну мову з дітьми",
                ownerTitle:
                  "«Ми розуміємо, як важливо, щоб діти росли здоровими, розумними та щасливими. Розробляємо програми, які будуть цікаві та корисні для майбутнього покоління»",
                ownerDesc: "Вікторія Чеповецька",
              },
            },
            seo: {},
          },
        },
      },
    },
  });

export default i18n;
