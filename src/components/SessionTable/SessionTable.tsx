import React from 'react';
import SectionComponent from "./Section/Section";
import CardComponent from "./Section/Card/Card";
import { Content } from "native-base";
import {styles} from '../../App.styles'
import {ImageBackground} from "react-native";
import {useGetExercises} from "../../hooks/hooks";


const SessionTableComponent = ({sessionUrl, sessionTitle}) => {
    const exercises = useGetExercises(sessionUrl); //this gets the excersizes for the session... which could be gotten out of the context.
    const backGroundImg = require('../../../assets/images/lu.jpg');
    return (
        <Content style={[styles.generalBackgroundColor]}>
            <ImageBackground source={backGroundImg} style={{width: '100%', height: '100%'}}>
            <SectionComponent sessionTitle={sessionTitle}>
                {
                    exercises.map(
                        exercise => {
                            return <CardComponent color={exercise.color} order={exercise.order} compound={exercise.compound} estimated={exercise.estimate} key={exercise.order}/>
                        })
                }
            </SectionComponent>
            </ImageBackground>
        </Content>)
};

export default SessionTableComponent;
