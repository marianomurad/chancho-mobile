import React from 'react';
import {Body, Card, CardItem, Left, Right, Text, View} from "native-base";
import {styles} from './Card.styles'

const CardComponent = ({color, order, compound}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardItem style={{ width:40,borderTopStartRadius:20, borderBottomStartRadius:20, alignContent: 'center',backgroundColor: color}}>
                <Text style={{color:'#fff', fontWeight: 'bold'}}>{order}</Text>
            </CardItem>
            <CardItem style={{flexDirection: 'column',flex: 1, width: 360, borderBottomEndRadius:20, borderTopEndRadius:20}}>
                <CardItem header style={styles.cardItemTitle}>
                    <Text>{compound.name}</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <View>
                            <View style={{alignSelf: 'center', borderBottomColor:'orange', borderBottomWidth: 1}}>
                            <Text>{compound.percentaje} %</Text>
                            </View>
                            <Text style={{alignSelf: 'center'}}>{compound.reps}</Text>
                        </View>
                        <Text>x {compound.series}</Text>
                    </Left>
                </CardItem>
            </CardItem>
        </Card>
    );
};

export default CardComponent;
