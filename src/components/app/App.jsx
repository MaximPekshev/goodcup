import { Layout } from '../layout/Layout';
import { HomePage } from '../../pages/homePage';
import { AboutPage } from '../../pages/aboutPage';
import { PaymentDeliveryPage } from '../../pages/paymentDeliveryPage';
import { ContactsPage } from '../../pages/contactsPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ConfigProvider } from 'antd';
import './main.css';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#28a745',
        },
        components: {
          Carousel: {
            dotActiveWidth: 60,
            dotWidth: 35,
            dotGap: 6,
            dotHeight: 6,

          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/delivery" element={<PaymentDeliveryPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}