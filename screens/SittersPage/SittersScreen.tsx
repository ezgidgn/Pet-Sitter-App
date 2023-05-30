import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import SittersCard from "../../src/components/Card/SittersCard";
import { moderateScale } from "../../style/Metrics";
import SearchBar from "../../src/components/SearchBar/SearchBar";

// FAKE DATA TANIMI
type SitterData = {
    id: string;
    name: string;
    age: number;
    description: string;
    location: string;
    job: string;
};
  
const DATA: SitterData[] = [
{
    id: '1',
    name: 'Melike Kızılcık',
    age: 22,
    description: '3 yaşında bir kedim var, kedi bakımında tecrübeliyim',
    location: 'Büyükçekmece/İstanbul',
    job: "Bilgisayar mühendisi"
},
{
    id: '2',
    name: 'Berke Yamaner',
    age: 23,
    description: 'Kedi, köpek ve kuş bakımında tecrübeliyim',
    location: 'Merkez/Bolu',
    job: "Makine mühendisi"
},
{
    id: '3',
    name: 'Ezgi Doğan',
    age: 23,
    description: 'Sevilmekten hoşlanmaz, mutlaka günde 2 defa yaş mama yer, oyun oynamayı ve uyumayı sever',
    location: 'Merkez/Kırklareli',
    job: "Bilgisayar mühendisi"
},
{
    id: '4',
    name: 'Doğa Ünal',
    age: 28,
    description: 'Köpek bakımında tecrübeliyim, hayvanları çok seviyorum',
    location: 'Sarıyer/İstanbul',
    job: "Öğrenci"
},
{
    id: '5',
    name: 'Alev Arslan',
    age: 3,
    description: 'Hayvanları çok severim, her türden hayvan bakımını sağlayabilirim',
    location: 'Beşiktaş/İstanbul',
    job: "Serbest meslek"
},

];

const SitterScreen = ({navigation}: any) => {

    const renderSitter = ({item}: any) => <SittersCard sitter={item}/>;

    return(
        <SafeAreaView>
            <SearchBar />
            <Text style={styles.title}>Sevimli dostunuz bakıcısı olabilirim</Text>
            <FlatList 
            keyExtractor={(item, index)=> item.id.toString()}
            data={DATA}
            renderItem={renderSitter}
            numColumns={1}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: moderateScale(17),
        marginLeft: moderateScale(30),
        marginTop: moderateScale(20)
    }
});

export default SitterScreen;