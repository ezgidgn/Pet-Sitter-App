import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserCard from '../src/components/UserCard/UserCard';
import UserInfoCard from '../src/components/InfoCards/UserInfoCard';
import PetInfoCard from '../src/components/InfoCards/PetInfoCard';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <UserCard />
      <UserInfoCard />
      <PetInfoCard />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,    
        //backgroundColor: 'red'  
    }

});