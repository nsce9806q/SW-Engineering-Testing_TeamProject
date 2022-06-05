import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import StockInfo from './pages/StockInfo'

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="stockinfo" element={<StockInfo />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
