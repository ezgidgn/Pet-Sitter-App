
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import {getFirestore} from 'firebase/firestore';

import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar,Text, List, Provider, Divider, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper'
import 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { collection } from 'firebase/firestore';
import { createStackNavigator } from '@react-navigation/stack';
import { db } from '../../src/config/firebase';
import NavigationConstants from '../../navigation/NavigationConstants';

const MessageScreen:React.FC = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [email, setEmail] = useState<string>('');

  const navigation = useNavigation<any>();

  return (
   

  <Provider>
    <View style={{ flex: 1 }}>
        <List.Item title="User Name"
            description="Hi"
            left={() => <Avatar.Text label="UN" size={50} />}
            onPress={() => navigation.navigate(NavigationConstants.messaging)}
        //onPress={() => navigation.navigate("MessagingPage" )}
        />
        <Divider />
        <Portal>
            <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
                <Dialog.Title>New Chat</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        label="Enter user email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => setIsDialogVisible(false)}>CANCEL</Button>
                    <Button>SAVE</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
        <FAB icon="plus"
            
            onPress={() => setIsDialogVisible(true)}
            
        />
    </View>
</Provider>
  )
  
}

export default MessageScreen