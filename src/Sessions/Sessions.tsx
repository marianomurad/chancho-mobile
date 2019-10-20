import React from 'react';
import {Button, Container, Tab, Tabs, Text} from "native-base";
import CardTitleComponent from "../SessionTable/Section/CardTitle";
import {styles} from '../../src/App.styles'
import {Session} from '../models/Session.model'
import SessionTableComponent from "../SessionTable/SessionTable";
const SessionsComponent = () => {
    const session1 = Session('1º Turno', 1);
    const session2 = Session('2º Turno',2);
    const session3 = Session('3º Turno',3);
    const sessions= [
        session1,
        session2,
        session3,
    ]; //replace for useGetSessionsForDay ->
    return (
        <Container style={[styles.generalBackgroundColor]}>
                <Tabs
                      tabBarUnderlineStyle={{backgroundColor: '#fff'}}
                      tabContainerStyle={{borderWidth: 0}}
                >
                    {sessions.map(
                        session =>{
                                     return <Tab
                                         key={session.order}
                                         heading={session.name}
                                         tabStyle={[styles.generalBackgroundColor]}
                                         activeTabStyle={{backgroundColor: 'black'}}
                                         activeTextStyle={{color: '#fff'}}
                                     >
                                         <SessionTableComponent
                                         sessionTitle={session.name}
                                         sessionUrl={session.order}
                                         />
                                     </Tab>
                    })}
                </Tabs>
        </Container>
    );
};

export default SessionsComponent;
