
import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
//import { Avatar,Text, List, Provider, Divider, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper'
import {Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, onSnapshot,} from 'firebase/firestore';
import { createStackNavigator } from '@react-navigation/stack';
import { db } from '../../src/config/firebase'
//import { GiftedChat, IMessage, User } from 'react-native-gifted-chat';


const MessagingScreen = () => {
 return (
    <Text>hello</Text>
 )

};




export default MessagingScreen