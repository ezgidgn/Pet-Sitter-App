import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

import { moderateScale, verticalScale } from "../../style/Metrics";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import PetsCard from "../../src/components/UserCards/PetsCard";
import { petSitter } from "../SittersPage/SittersScreen";
import { db } from "../../src/config/firebase";
import { addDoc, collection, onSnapshot, getDoc, doc} from "firebase/firestore";

export interface pet{
  id: String;
  name: String;
  age: number;
  disaese: boolean;
  description: String;
  parent: petSitter;
  location: String;
}

// FAKE DATA TANIMI
type PetData = {
  id: string;
  name: string;
  type: string;
  gender: string;
  age: number;
  disease: string;
  description: string;
  location: string;
};

const DATA: PetData[] = [
  {
    id: "1",
    name: "Karamel",
    type: "Tekir",
    gender: "dişi",
    age: 3,
    disease: "Yok",
    description:
      "Sevilmekten hoşlanmaz, mutlaka günde 2 defa yaş mama yer, oyun oynamayı ve uyumayı sever",
    location: "Büyükçekmece/İstanbul",
  },
  {
    id: "2",
    name: "Kivi",
    type: "Shitzu",
    gender: "erkek",
    age: 7,
    disease: "Yok",
    description: "Uysal, oyuncu, günde 3 defa tuvalete çıkar",
    location: "Büyükçekmece/İstanbul",
  },
  {
    id: "3",
    name: "Çilek",
    type: "Shitzu",
    gender: "dişi",
    age: 2,
    disease: "Yok",
    description: "Yaramaz, saldırgan, tuvalet eğitimi yok",
    location: "Büyükçekmece/İstanbul",
  },
  {
    id: "4",
    name: "Maviş",
    type: "Muhabbet kuşu",
    gender: "erkek",
    age: 4,
    disease: "Yok",
    description: "Konuşmayı sever",
    location: "Merkez/Bolu",
  },
  {
    id: "5",
    name: "Gölge",
    type: "Mavi rus kedisi",
    gender: "dişi",
    age: 1,
    disease: "Yok",
    description: "Oyuncu, sevilmeyi, uyumayı ve yaş mamayı sever",
    location: "Merkez/Bolu",
  },
];

//EKRAN
const PetsScreen = ({ navigation }: any) => {
  const [pets, setPets ] = useState<any[]>([]);

   
  // FETCH SITTERS
  useEffect(() => {
   const petsRef = collection(db, 'pets');

   const pet = onSnapshot(petsRef, {
       next: (snapshot) => {
           const pets: any[] = [];
           snapshot.docs.forEach((doc) => {
               console.log(doc.data());
               pets.push({
                   id: doc.id,
                   ...doc.data(),
               } as unknown as pet);
           });
           setPets(pets);
       }
   })
  }, []) 

  const renderPet = ({ item }: any) => <PetsCard pet={item} />;

  return (
    <SafeAreaView style={styles.screen}>
      <SearchBar />
      <Text style={styles.title}>Sevimli dostlarımız bakıcı arıyor!</Text>
      <FlatList
        keyExtractor={(pet: pet) => pet.id.toString()}
        data={pets}
        renderItem={renderPet}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(17),
    marginLeft: moderateScale(30),
    marginTop: moderateScale(20),
    fontFamily: "Inter_500Medium",
  },
  screen: {
    flex: 1,
  },
});

export default PetsScreen;
