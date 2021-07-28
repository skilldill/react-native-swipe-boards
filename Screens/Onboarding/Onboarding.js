import React, { useState } from "react";
import {View, Text, Button} from "react-native";

import {onboardingStyle} from "./style";
import {ScrollBoards, Board} from "../../core/ScrollBoards";

export const Onboarding = ({onFinish}) => {
    const [activeBoard, setActiveBoard] = useState(0);

    return (
        <View style={onboardingStyle.container}>
            <ScrollBoards onScroll={(active) => console.log(active)} active={activeBoard}>
                <Board>
                    <View style={onboardingStyle.board}>
                        <Text style={onboardingStyle.boardText}>FIRST</Text>
                        <Button title="Next" onPress={() => setActiveBoard(1)}/>
                    </View>
                </Board>

                <Board>
                    <View style={onboardingStyle.board}>
                        <Text style={onboardingStyle.boardText}>SECONDS</Text>
                        <Button title="Next" onPress={() => setActiveBoard(2)}/>
                    </View>
                </Board>

                <Board>
                    <View style={onboardingStyle.board}>
                        <Text style={onboardingStyle.boardText}>THRID</Text>
                        <Button title="Finish" onPress={onFinish}/>
                    </View>
                </Board>
            </ScrollBoards>
        </View>
    )
}