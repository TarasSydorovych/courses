import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: {},
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
              },
            },
            seo: {},
          },
        },
      },
    },
  });

export default i18n;