import React, {useState , useEffect} from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, useAnimatedValue, TouchableOpacity, Image } from "react-native";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import SittersCard from "../../src/components/UserCards/SittersCard";
import { db } from "../../src/config/firebase";
import { addDoc, collection, onSnapshot, getDoc, doc} from "firebase/firestore";
import {horizontalScale, verticalScale, moderateScale} from "../../style/Metrics";
import Colors from "../../style/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

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
    description: 'Köpek bakımında tecrübeliyim, hayvanları çok seviyorum',
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
    age: 35,
    description: 'Hayvanları çok severim, her türden hayvan bakımını sağlayabilirim',
    location: 'Beşiktaş/İstanbul',
    job: "Serbest meslek"
},

];

type RootStackParamList = {
    ProfileC: undefined;
    ProfileD: undefined;
};


const SitterScreen: React.FC = ()  => {
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

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateProfileC = () =>{
        navigation.navigate("ProfileC");
    }

    const navigateProfileD = () =>{
        navigation.navigate("ProfileD");
    }

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
            <TouchableOpacity onPress={navigateProfileC}>
                <View style={styles.sitterContainer}>
                <Image source={require("../../assets/images/icon.png")} style={styles.imageContainer}/>
                    <View style={styles.textView}>
                        <Text style={styles.sitterText}>Zeynep Yılmaz</Text> 
                        <Text style={styles.sitterText}>28</Text>
                        <Text style={styles.sitterText}>Sarıyer, İstanbul</Text>
                    </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateProfileD}>
                <View style={styles.sitterContainer}>
                <Image source={require("../../assets/images/icon.png")} style={styles.imageContainer}/>
                    <View style={styles.textView}>
                        <Text style={styles.sitterText}>Ali Bulut</Text> 
                        <Text style={styles.sitterText}>35</Text>
                        <Text style={styles.sitterText}>Beşiktaş, İstanbul</Text>
                    </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateProfileD}>
                <View style={styles.sitterContainer}>
                <Image source={require("../../assets/images/icon.png")} style={styles.imageContainer}/>
                    <View style={styles.textView}>
                        <Text style={styles.sitterText}>Ezgi Doğan</Text> 
                        <Text style={styles.sitterText}>24</Text>
                        <Text style={styles.sitterText}>Merkez, Kırklareli</Text>
                    </View>
                    </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: moderateScale(17),
        marginLeft: moderateScale(30),
        marginTop: moderateScale(20),
        fontFamily: "Inter_500Medium",
    },
    sitterContainer:{
        backgroundColor: Colors.flatListPurple,
        height: verticalScale(100),
        width: horizontalScale(330),
        borderRadius: moderateScale(20),
        flexDirection: "row",
        marginTop: moderateScale(15),
        marginHorizontal: moderateScale(20),
        alignSelf: "center"
    },
    imageContainer:{
        backgroundColor: Colors.grey,
        width: horizontalScale(70),
        height: verticalScale(70),
        borderRadius: moderateScale(35),
        marginLeft: horizontalScale(10),
        marginTop: horizontalScale(10)
    },
    textView: {
        marginLeft: horizontalScale(10),
        marginTop: horizontalScale(15),
    },
    sitterText: {
        color: Colors.white,
        fontSize: moderateScale(17),
        fontFamily: "Inter_400Regular",
    },
});

export default SitterScreen;