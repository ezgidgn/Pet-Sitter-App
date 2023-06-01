import React, {useState , useEffect} from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, useAnimatedValue } from "react-native";
import { moderateScale } from "../../style/Metrics";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import SittersCard from "../../src/components/UserCards/SittersCard";
import { db } from "../../src/config/firebase";
import { addDoc, collection, onSnapshot, getDoc, doc} from "firebase/firestore";

export interface petSitter{
    id: String;
    age: number;
    description: String;
    job: String;
    location: String;
    name: String;
    surname: string;
}
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
   const [sitters, setSitters ] = useState<any[]>([]);

   
   // FETCH SITTERS
   useEffect(() => {
    const sitterRef = collection(db, 'sitters');

    const sitter = onSnapshot(sitterRef, {
        next: (snapshot) => {
            const sitters: any[] = [];
            snapshot.docs.forEach((doc) => {
                console.log(doc.data());
                sitters.push({
                    id: doc.id,
                    ...doc.data(),
                } as unknown as petSitter);
            });
            setSitters(sitters);
        }
    })
   }, []) 

    const renderSitter = ({item}: any) => <SittersCard sitter={item}/>;

    return(
        <SafeAreaView>
            <SearchBar />
            <Text style={styles.title}>Sevimli dostunuz bakıcısı olabilirim</Text>
            <FlatList 
            //keyExtractor={(item, index)=> item.id.toString()}
            keyExtractor={(sitter: petSitter) => sitter.id.toString()}
            data={sitters}
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
        marginTop: moderateScale(20),
        fontFamily: "Inter_500Medium",
    }
});

export default SitterScreen;