import { useState } from 'react';

import styled from 'styled-components';
import useAuth from './api/useAuth';
import AppButton from './components/0_atoms/AppButton';
import { AppHeader } from './components/0_atoms/AppHeader';
import { AppInput } from './components/0_atoms/AppInput';

const Container = styled.div`
  padding: 16px;
`;

const AuthModal = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
`;

function App() {
  const [email, setEmail] = useState('tktkymnr1216@gmail.com');
  const [password, setPassword] = useState('take12345');
  const [name, setName] = useState('');
  const [isDisplayLogin, switchModal] = useState(true);

  const { login, register } = useAuth();

  const clickLoginButton = () => {
    login({ email, password });
  };

  return (
    <div className="App">
      <AppHeader />
      <Container>
        {isDisplayLogin ? (
          <AuthModal>
            <h1>ログイン情報を入力してください</h1>
            <AppInput text={email} input={setEmail} placeholder={'Eメール'} />
            <AppInput
              text={password}
              input={setPassword}
              placeholder={'パスワード'}
            />
            <AppButton
              text={'ログイン'}
              clickButton={() => clickLoginButton()}
            />
            <button onClick={() => switchModal(false)}>会員登録する</button>
          </AuthModal>
        ) : (
          <AuthModal>
            <h1>会員登録</h1>
            <AppInput text={name} input={setName} placeholder={'名前'} />
            <AppInput text={email} input={setEmail} placeholder={'Eメール'} />
            <AppInput
              text={password}
              input={setPassword}
              placeholder={'パスワード'}
            />
            <AppButton
              text={'登録'}
              clickButton={() => register({ name, email, password })}
            />
            <button onClick={() => switchModal(true)}>ログインする</button>
          </AuthModal>
        )}
      </Container>
    </div>
  );
}

export default App;
