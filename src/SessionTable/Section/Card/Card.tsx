import React from 'react';
import {Body, Card, CardItem, Left, Right, Text, View} from "native-base";
import {styles} from './Card.styles'

const CardComponent = ({color, order,estimated, compound}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardItem style={{ width:45,borderTopStartRadius:20, borderBottomStartRadius:20, alignContent: 'center',backgroundColor: color}}>
                <Text style={{color:'#fff', fontWeight: 'bold', fontFamily: 'Oxigen-Regular'}}>{order}</Text>
            </CardItem>
            <CardItem style={{flexDirection: 'column',flex: 1, borderBottomEndRadius:20, borderTopEndRadius:20}}>
                <CardItem header style={styles.cardItemTitle}>
                    <Text style={{fontFamily: 'Oxigen-Bold'}}>{compound.name}</Text>
                </CardItem>
                <CardItem style={{maxHeight:50}}>
                    <Left>
                        <View>
                            <View style={{alignSelf: 'center', borderBottomColor:'orange', borderBottomWidth: 1}}>
                            <Text style={{fontFamily: 'Oxigen-Regular'}}>{compound.percentaje} %</Text>
                            </View>
                            <Text style={{alignSelf: 'center', fontFamily: 'Oxigen-Regular'}}>{compound.reps}</Text>
                        </View>
                        <Text style={{fontFamily: 'Oxigen-Regular'}}>x {compound.series}</Text>
                    </Left>
                    <Body><Text style={{color: 'grey',marginLeft:20, fontFamily: 'Oxigen-Regular'}}>Estimado: {estimated}</Text></Body>
                </CardItem>
            </CardItem>
        </Card>
    );
};

export default CardComponent;
