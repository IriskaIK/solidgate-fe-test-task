import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


export type Languages = "ua" | "eng";

i18n
    .use(LanguageDetector) // Detects browser language
    .use(initReactI18next) // Initializes react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    offerTitle : '5 days free',
                    offerSubtitle : 'then 299.99 UAH per 14 days',
                    orderTitle : 'Order info <= 100 char.',
                    orderDescription : 'Description <= 400 char.',
                    payBtn : 'Pay',
                    checkoutTitle : 'Checkout',
                    checkoutBackBtn : 'Back',
                    payWithCard : 'or pay with card'
                },
            },
            ua: {
                translation: {
                    offerTitle : '5 днів безкоштовно',
                    offerSubtitle : 'потім 299.99 UAH кожні 14 днів',
                    orderTitle : 'Order info <= 100 char.',
                    orderDescription : 'Description <= 400 char.',
                    payBtn : 'Оплатити',
                    checkoutTitle : 'Оплата',
                    checkoutBackBtn : 'Назад',
                    payWithCard : 'або оплатити карткою'
                },
            },
        },
        fallbackLng: 'en', // Default language
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: { escapeValue: false },
    });

export default i18n;
