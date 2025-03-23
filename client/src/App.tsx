import CheckoutFormLayout from "layouts/checkout-form-layout/CheckoutFormLayout.tsx";



const mockedFormData = {
    offerTitle: "5 days free",
    offerSubtitle: "then 299.99 UAH per 14 days",
    price: 299.99,
    currency: "UAH",

    orderTitle: "Order info <= 100 char.",
    orderDescription: "Description <= 400 char.",
    items: [
        {
            id: 1,
            title: "Lamel Professional Smart Skin Compact Powder",
            subtitle: "Пудра для обличчя"
        }
    ]
}

function App() {

  return (
    <>
        <CheckoutFormLayout {...mockedFormData}/>
    </>
  )
}

export default App
