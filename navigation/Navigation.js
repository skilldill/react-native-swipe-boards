import React, { useState } from "react";
import {View} from "react-native";

import {navigationStyle} from "./style";
import {Home, Onboarding} from "../Screens";

export const Navigation = () => {
    const [active, setActive] = useState(<Onboarding onFinish={() => setActive(<Home />)} />);
    return (
        <View style={navigationStyle.container}>
            {active}
        </View>
    )
}