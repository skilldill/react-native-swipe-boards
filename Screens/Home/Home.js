import React from "react";
import {View, Text} from "react-native";

import { homeStyle } from "./style";

export const Home = () => {
    return (
        <View style={homeStyle.container}>
            <Text style={homeStyle.title}>HOME</Text>
        </View>
    )
}