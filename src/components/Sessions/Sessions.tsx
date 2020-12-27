import React from 'react';
import {Container, Tab, Tabs} from "native-base";
import { styles } from '../../App.styles'
import { Session } from '../../models/Session.model'
import SessionTableComponent from "../SessionTable/SessionTable";
const SessionsComponent = () => {
    const session1 = Session( 1);
    const session2 = Session(2);
    const session3 = Session(3);
    const sessions= [
        session1,
        session2,
        session3, session1,
        session2,
        session3,
    ];
    return (
        <Container style={[styles.generalBackgroundColor]}>
                <Tabs
                      tabBarUnderlineStyle={{backgroundColor: '#fff'}}
                      tabContainerStyle={{borderWidth: 0}}
                >
                    {sessions.map(
                        (session,i) => {
                            const name = `${session.order} /08`
                                     return <Tab
                                         key={i}
                                         heading={name}
                                         tabStyle={[styles.generalBackgroundColor]}
                                         activeTabStyle={{backgroundColor: 'black'}}
                                         activeTextStyle={{color: '#fff'}}
                                     >
                                         <SessionTableComponent
                                         sessionTitle={name}
                                         sessionUrl={i}
                                         />
                                     </Tab>
                    })}
                </Tabs>
        </Container>
    );
};

export default SessionsComponent;
