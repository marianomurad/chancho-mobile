export const useGetExercises = (sessionUrl) => {
    if(sessionUrl === 1)
        return [
        {
            order: 'A',
            color: '#B54731',
            estimate: '800',
            compound : {
                name: 'ARRANQUE',
                reps: '2',
                series: '5',
                percentage: '80',
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
                percentage: '85',
            }
        },
        {
            order: 'C',
            color: '#6B8E23',
            estimate: '800',
            compound: {
                name: 'TIRON ENV',
                reps: '3',
                series: '3',
                percentage: '85',
            }
        },
        {
            order: 'D',
            color: '#4169E1',
            estimate: '800',
            compound: {
                name: 'SENT ADEL',
                reps: '3',
                series: '6',
                percentage: '85',
            }
        },
    ];
    if(sessionUrl === 2)
        return [
            {
                order: 'A',
                color: '#BD923E',
                estimate: '800',
                compound : {
                    name: 'SENT ADEL',
                    reps: '2',
                    series: '5',
                    percentage: '90',
                }
            },
            {
                order: 'B',
                color: '#B54731',
                estimate: '1000',
                compound: {
                    name: 'ENVION',
                    reps: '1+2',
                    series: '3',
                    percentage: '85',
                }
            },
            {
                order: 'C',
                color: '#6B8E23',
                estimate: '800',
                compound: {
                    name: 'TIRON ENV',
                    reps: '6',
                    series: '6',
                    percentage: '85',
                }
            },
        ];
    else {
        return [
            {
                order: 'A',
                color: '#B54731',
                estimate: '800',
                compound : {
                    name: 'SENT',
                    reps: '2',
                    series: '5',
                    percentage: '80',
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
                    percentage: '85',
                }
            },
            {
                order: 'C',
                color: '#6B8E23',
                estimate: '800',
                compound: {
                    name: 'TIRON ENV',
                    reps: '3',
                    series: '3',
                    percentage: '85',
                }
            },
            {
                order: 'D',
                color: '#4169E1',
                estimate: '800',
                compound: {
                    name: 'SENT ADEL',
                    reps: '3',
                    series: '6',
                    percentage: '85',
                }
            },
        ];
    } //replace 4 database call
};
