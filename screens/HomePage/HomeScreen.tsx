import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../../src/components/SearchBar/SearchBar'
import { verticalScale } from '../../style/Metrics'
import NewsBCard from '../StaticPages/NewsCard/NewsBCard'
import NewsCCard from '../StaticPages/NewsCard/NewsCCard'
import NewsDCard from '../StaticPages/NewsCard/NewsDCard'
import NewsECard from '../StaticPages/NewsCard/NewsECard'
import NewsACard from '../StaticPages/NewsCard/NewsACard'



const HomeScreen = ({navigation}:any) => {
  
  return (
    <SafeAreaView >
      <SearchBar />
      <View style={styles.page}>
        <ScrollView style={{marginTop: verticalScale(20)}}>
          <NewsACard/>
          <NewsBCard />
          <NewsCCard />
          <NewsDCard />
          <NewsECard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page:{},
})
 

export default HomeScreen;