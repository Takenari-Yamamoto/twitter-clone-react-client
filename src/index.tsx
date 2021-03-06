import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { About } from './components/4_pages/About';
import { NotFound } from './components/4_pages/error/NotFound';
import { MyPage } from './components/4_pages/MyPage';
import { AppHeader } from './components/0_atoms/AppHeader';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // 参考: https://reffect.co.jp/react/react-router-6#Not_Found_Routes
  <AuthProvider>
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
