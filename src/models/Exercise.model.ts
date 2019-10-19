export const Exercise = (
    order: string,
    color: string,
    estimate: string,
    compound : {
        name: string,
        reps: string,
        series: string,
        percentage: string,
    }) => ({
    order,
    color,
    estimate,
    compound
});
