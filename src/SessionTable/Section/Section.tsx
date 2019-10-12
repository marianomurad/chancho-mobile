import React , { useState, useEffect } from 'react';
import {Container} from "native-base";
import {styles} from '../../../src/App.styles'
import CardTitleComponent from "./CardTitle";



const SectionComponent = ({children}) => {
    return (
        <Container style={[styles.generalBackgroundColor,{marginVertical:40}]}>
            <CardTitleComponent/>
            {children}
        </Container>
    );
};

export default SectionComponent;
