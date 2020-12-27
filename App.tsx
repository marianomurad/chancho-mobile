import React, { useState, useEffect } from 'react';
import { Spinner } from 'native-base';
import * as Font from 'expo-font';

import Firebase, { FirebaseProvider } from './config/Firebase'
import LoginView from "./src/Views/Login";

export default function App() {
    const [areFontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
       await Font.loadAsync({
            'Oxigen-Bold': require('./assets/fonts/Oxygen-Bold.ttf'),
            'Oxigen-Light': require('./assets/fonts/Oxygen-Light.ttf'),
            'Oxigen-Regular': require('./assets/fonts/Oxygen-Regular.ttf'),
        });
        setFontsLoaded(true);
    };
    const useFontLoader = () => { loadFonts(); };
    useEffect(useFontLoader,[]);

  return (
      <FirebaseProvider value={Firebase}>
          {
              areFontsLoaded ?
                  <LoginView/>
                  :<Spinner color='white' />
          }
      </FirebaseProvider>
  );
}

