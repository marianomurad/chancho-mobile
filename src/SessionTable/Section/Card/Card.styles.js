import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        height:120,
        width:400,
        marginLeft: 5,
        marginTop: 10,
        borderRadius: 30 ,
        backgroundColor:'grey',
        flexDirection: 'row',
        borderColor:'black',
    },
    cardItemTitle: {
        width: 360,
        borderBottomEndRadius:20,
        borderTopEndRadius:20,
        justifyContent: 'center',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        },
});
