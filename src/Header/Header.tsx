import React from 'react';
import {Body, H3, Header, Icon, Left, Right, Text} from "native-base";
import {styles} from '../../src/App.styles'

const HeaderComponent = () => {
    return (
        <Header style={[styles.generalBackgroundColor]}>
            <Left><Icon type="Entypo" name="chevron-thin-left" style={{color: '#fff'}}/></Left>
            <Body><H3 style={{color:'white'}}>ChanchoApp</H3></Body>
            <Right><Text> </Text></Right>
        </Header>
    );
};

export default HeaderComponent;
