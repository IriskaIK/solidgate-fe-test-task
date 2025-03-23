import CheckoutFormLayout from "layouts/checkout-form-layout/CheckoutFormLayout.tsx";
import './i18n';
import { useTranslation } from 'react-i18next';





function App() {
    const { t } = useTranslation();


    const mockedFormData = {
        offerTitle: t('offerTitle'),
        offerSubtitle: t('offerSubtitle'),
        price: 299.99,
        currency: "UAH",

        orderTitle: t('orderTitle'),
        orderDescription: t('orderDescription'),
        items: [
            {
                id: 1,
                title: "Lamel Professional Smart Skin Compact Powder",
                subtitle: "Пудра для обличчя"
            }
        ]
    }

    return (
    <>
        <CheckoutFormLayout {...mockedFormData}/>
    </>
  )
}

export default App
