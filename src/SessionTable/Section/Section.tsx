import React , { useState, useEffect } from 'react';
import {Container} from "native-base";
import {styles} from '../../../src/App.styles'
import CardTitleComponent from "./CardTitle";



const SectionComponent = ({children,sessionTitle}) => {
    return (
        <Container style={[{backgroundColor: 'transparent',marginVertical:40}]}>
            <CardTitleComponent title={sessionTitle}/>
            {children}
        </Container>
    );
};

export default SectionComponent;
