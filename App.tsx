import React, {useState, useEffect} from 'react';
import {Container, Spinner } from 'native-base';
import SessionTableComponent from "./src/SessionTable/SessionTable";
import HeaderComponent from "./src/Header/Header";
import * as Font from 'expo-font';
import {styles} from './src/App.styles'
import FooterComponent from "./src/Footer/Footer";
import SessionsComponent from "./src/Sessions/Sessions";

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
    const useFontLoader = () => {loadFonts();};
    useEffect(useFontLoader,[]);

  return (
          <Container  style={[styles.generalBackgroundColor]}>
              <HeaderComponent/>
              {
                  areFontsLoaded ?
                    <SessionsComponent/>
                    :<Spinner color='white' />
              }
              <FooterComponent/>
          </Container>
  );
}

