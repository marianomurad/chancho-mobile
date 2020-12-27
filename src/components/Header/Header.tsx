import React from 'react';
import {Body, Button, Header, Icon} from "native-base";
import {styles} from '../../App.styles'

const HeaderComponent = () => {
    return (
        <Header style={[styles.layoutBackground]}>
            <Body><Button transparent><Icon type='FontAwesome5' name='chart-bar' style={{color: '#ffcc00'}}/></Button></Body>
        </Header>
    );
};

export default HeaderComponent;
