import React from 'react';
import { Card, CardItem, H3 } from "native-base";
import { styles } from './CardTitle.styles'
import { LinearGradient } from 'expo-linear-gradient'

const CardTitleComponent = ({title}) => {
    return (
                <Card style={[styles.cardTitle]}>
                <LinearGradient colors={[ '#ffcc00', '#FFEB3B']} style={[styles.cardTitle,{borderRadius: 20, height:70}]}>
                <CardItem style={[styles.cardTitleBody]}>
                    <H3 style={{color: 'black', marginTop: 10}}>{title}</H3>
                </CardItem>
                </LinearGradient>
                </Card>
    );
};

export default CardTitleComponent;
