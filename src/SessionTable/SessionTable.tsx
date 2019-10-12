import React from 'react';
import SectionComponent from "./Section/Section";
import CardComponent from "./Section/Card/Card";
import {Content} from "native-base";
import {styles} from '../../src/App.styles'

const SessionTableComponent = () => {
    const exercises = [
        {
            order: 'A',
            color: '#B54731',
            compound : {
                name: 'ARRANQUE',
                reps: '2',
                series: '5',
                percentaje: '80',
            }
        },
        {
            order: 'B',
            color: '#BD923E',
            compound: {
                name: 'ENVION',
                reps: '1+2',
                series: '3',
                percentaje: '85',
            }
        },
        {
            order: 'C',
            color: 'green',
            compound: {
                name: 'TIRON ENV',
                reps: '3',
                series: '3',
                percentaje: '85',
            }
        },
    ];
    return (
        <Content style={[styles.generalBackgroundColor]}>
            <SectionComponent>
                {
                    exercises.map(
                        exercise => {
                            return <CardComponent color={exercise.color} order={exercise.order} compound={exercise.compound} key={exercise.order}/>
                        })
                }
            </SectionComponent>
        </Content>)
};

export default SessionTableComponent;
