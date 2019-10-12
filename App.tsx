import React, {useState, useEffect} from 'react';
import {Container, Spinner } from 'native-base';
import SessionTableComponent from "./src/SessionTable/SessionTable";
import HeaderComponent from "./src/Header/Header";
import { Font } from 'expo';
import {styles} from './src/App.styles'

export default function App() {
    const [areFontsLoaded, setFontsLoaded] = useState(false);
  return (
          <Container  style={[styles.generalBackgroundColor]}>
              <HeaderComponent/>
              {
                  areFontsLoaded ?
                    <Spinner color='white' />
                    :
                    <SessionTableComponent/>
              }
          </Container>

  );
}

