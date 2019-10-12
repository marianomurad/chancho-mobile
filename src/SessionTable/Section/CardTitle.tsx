import React from 'react';
import {Body, Card, CardItem, H3, Left, Right, Text} from "native-base";

const CardTitleComponent = () => {
    return (
        <Card style={{backgroundColor: '#364B5E',marginLeft:5,width:400, borderRadius: 20,borderColor:'black',height:120}}>
            <CardItem style={{flexDirection: 'column', marginVertical:30,backgroundColor: '#364B5E', borderRadius: 20, justifyContent: 'center'}}>
                    <H3 style={{color: '#fff'}}>PRIMER TURNO</H3>
            </CardItem>
        </Card>
    );
};

export default CardTitleComponent;
