import React, { useEffect } from 'react';
import './App.css';
import Page from './Page';
import Sidebar from './Sidebar';
import Login from './Login'

import { selectUser } from './features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from './firebase';
//Acitons
import { login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is longed in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        )
      } else {
        dispatch(logout())
      }

    })

  }, [dispatch])

  return (
    <div className="App">
      {user ? (
        <>
          {/*Sieebar*/ }
          < Sidebar />
          {/* Chat */ }
          < Page />
        </>
      ) : (
          <Login />

        )
      }

    </div>
  );
}

export default App;
