import React, { FC } from "react";
import NavigationConstants from "./NavigationConstants";
import { createStackNavigator } from "@react-navigation/stack";
import NewsA from "../screens/StaticPages/NewsA";
import NewsB from "../screens/StaticPages/NewsB";
import NewsC from "../screens/StaticPages/NewsC";
import NewsD from "../screens/StaticPages/NewsD";
import NewsE from "../screens/StaticPages/NewsE";
import HomeScreen from "../screens/HomePage/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";


const NewsNavigator: FC = () => {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={NavigationConstants.home} component={HomeScreen}/>
            <Stack.Screen name="NewsA" component={NewsA}/>
            <Stack.Screen name="NewsB" component={NewsB}/>
            <Stack.Screen name="NewsC" component={NewsC}/>
            <Stack.Screen name="NewsD" component={NewsD}/>
            <Stack.Screen name="NewsE" component={NewsE}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NewsNavigator;