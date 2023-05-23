import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import React from 'react'
import SearchBar from '../src/components/SearchBar/SearchBar'
import NavigatePetsButton from '../src/components/NavigateButtons/NavigatePetsButton'
import NavigateSittersButton from '../src/components/NavigateButtons/NavigateSittersButton'


const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView >
      <SearchBar />
       <View>
          <NavigatePetsButton />
          <NavigateSittersButton />
       </View>
        
      </SafeAreaView>
  );
}
 

export default HomeScreen;