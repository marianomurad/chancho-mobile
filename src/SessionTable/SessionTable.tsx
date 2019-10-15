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
            estimate: '800',
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
            estimate: '1000',
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
            estimate: '800',
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
                            return <CardComponent color={exercise.color} order={exercise.order} compound={exercise.compound} estimated={exercise.estimate} key={exercise.order}/>
                        })
                }
            </SectionComponent>
        </Content>)
};

export default SessionTableComponent;
