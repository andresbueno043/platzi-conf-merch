import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Layout from '@/components/Layout';
import Checkout from '@/pages/Checkout';
import Information from '@/pages/Information';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <Layout>
        <App />
      </Layout>
    </HashRouter>
  );
}
