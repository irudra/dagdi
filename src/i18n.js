import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEng from "locales/en/translation.json";
import translationHindi from "locales/hin/translation";
i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        hin: {
            translations: translationHindi
        },
        en: {
            translations: translationEng
        },
        fre: {
            translations: {
                Introduction: "Introduction",
                "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
                    "est un cadre d'internationalisation qui offre une solution complète pour localiser votre produit du Web au mobile et au bureau",
                "Plugins to detect the user language":
                    "Plugins pour détecter la langue de l'utilisateur",
                "Plugins to load translations": "Plugins pour charger les traductions",
                "Optionally cache the translations":
                    "Cachez éventuellement les traductions",
                Advantages: "Les avantages",
                "Flexibility to use other packages":
                    "Flexibilité d'utiliser d'autres packages"
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;
