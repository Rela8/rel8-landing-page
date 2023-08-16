import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PricingAdministrator from "./pages/PricingAdministrator";
import PricingMembership from "./pages/PricingMembership";
import ProductsAdministrator from "./pages/ProductsAdministrator";
import ProductsMembership from "./pages/ProductsMembership";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products-admin" element={<ProductsAdministrator />}/>
        <Route path="/products-member" element={<ProductsMembership />}/>
        <Route path="/pricing-admin" element={<PricingAdministrator />}/>
        <Route path="/pricing-member" element={<PricingMembership />}/>
      </Routes>

      <TawkMessengerReact
                propertyId={process.env.REACT_APP_PUBLIC_PROPERTY_ID}
                widgetId={process.env.REACT_APP_PUBLIC_WIDTH_ID}/>
    </BrowserRouter>
  );
}

export default App;
