import './App.css';
import Login from './Components/Login';
// import Password from './Components/Password';
import Profile from './Components/Profile';
import PassContextProvider from './Context/PassContextProvider';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <>
      <UserContextProvider>
        <PassContextProvider>
          <Login />
          <Profile />
        </PassContextProvider>
      </UserContextProvider>
      {/* <Password /> */}
    </>
  );
}

export default App;
