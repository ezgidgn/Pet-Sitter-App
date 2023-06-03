import React, { FC } from "react";
import NavigationConstants from "./NavigationConstants";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesPage/MessageScreen";

import MessagingScreen from "../screens/MessagesPage/MessagingScreen";



const MessageNavigator: FC = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={NavigationConstants.messages}>
            <Stack.Screen name={NavigationConstants.messages} component={MessagesScreen} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name={NavigationConstants.messaging} component={MessagingScreen} />
        </Stack.Navigator >
    )
}

export default MessageNavigator