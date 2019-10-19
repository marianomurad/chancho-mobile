import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        // height:120,
            // width:100,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 30,
        backgroundColor:'grey',
        flexDirection: 'row',
        borderColor:'black',
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'lightgrey',
        shadowOpacity: 0.2,
    },
    cardItemTitle: {
        alignSelf: 'stretch',
        borderBottomEndRadius:20,
        borderTopEndRadius:20,
        justifyContent: 'space-between',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        },
});
