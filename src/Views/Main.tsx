import React from 'react';
import { Container } from "native-base";
import HeaderComponent from "../components/Header/Header";
import SessionsComponent from "../components/Sessions/Sessions";
import FooterComponent from "../components/Footer/Footer";
import {styles} from '../App.styles';

const MainView: React.FC = () => {
    return (
        <Container  style={[styles.generalBackgroundColor]}>
            <HeaderComponent/>
                    <SessionsComponent/>
            <FooterComponent/>
        </Container>
    );
};

export default MainView;
