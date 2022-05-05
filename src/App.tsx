import { useState } from 'react';
import styled from 'styled-components';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isDisplayLogin, switchModal] = useState(false);

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
              clickButton={() => console.log('ログイン')}
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
            <AppButton text={'登録'} clickButton={() => console.log('登録')} />
            <button onClick={() => switchModal(true)}>ログインする</button>
          </AuthModal>
        )}
      </Container>
    </div>
  );
}

export default App;
