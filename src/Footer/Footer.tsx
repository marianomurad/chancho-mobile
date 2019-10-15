import React from 'react';
import {Button, Footer, FooterTab, Icon} from "native-base";
import {styles} from '../../src/App.styles'
const FooterComponent = () => {
    return (
        <Footer style={[styles.layoutBackground]}>
            <FooterTab><Button><Icon type='FontAwesome5' name={'bars'} style={{color: '#ffcc00', }}/></Button></FooterTab>
            <FooterTab><Button><Icon type='FontAwesome5' name={'calendar'} style={{color: '#ffcc00', }}/></Button></FooterTab>
            <FooterTab><Button><Icon type='FontAwesome5' name={'weight'} style={{color: '#ffcc00', }}/></Button></FooterTab>
        </Footer>
    );
};

export default FooterComponent;
