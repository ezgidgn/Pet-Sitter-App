import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {horizontalScale, verticalScale, moderateScale} from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const SearchBar = () =>{
    return(
        <TextInput placeholder="Search............" style={styles.searchBar}/>
        //on press özelliğine search bar fonksiyonu eklenebilir
    );
}

const styles = StyleSheet.create({
    searchBar: {
        height: verticalScale(30),
        width: horizontalScale(350),
        marginTop: verticalScale(30),
        backgroundColor: Colors.grey,
        borderRadius: moderateScale(30),
        alignItems: "baseline",
        alignSelf: "center",
    },
});

export default SearchBar;