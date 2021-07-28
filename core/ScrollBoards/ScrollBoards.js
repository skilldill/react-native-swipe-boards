import React, { useEffect, useRef, useState } from "react";
import {View, Animated, Dimensions} from "react-native";

import {scrollboardsStyle} from './style';

const DISPLAY_WIDTH = Dimensions.get('window').width;

export const ScrollBoards = ({children, onScroll, active}) => {
    const tarnslateAnimation = useRef(new Animated.Value(0)).current;

    const startAimation = (value) => {
        Animated.timing(tarnslateAnimation, {
            toValue: value,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    const [activeBoardId, setActiveBoardId] = useState(0);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);

    const handleTouchStart = (event) => {
        const {pageX} = event.nativeEvent.changedTouches[0];
        setStartX(pageX - startX);
    }

    const handleTouchMove = (event) => {
        const {pageX} = event.nativeEvent.changedTouches[0];
        setCurrentX(pageX);

        const diff = pageX - startX;
        tarnslateAnimation.setValue(diff);
    }

    const handleTouchEnd = () => {
        const diff = (currentX - startX) + (activeBoardId * DISPLAY_WIDTH);

        if (currentX === 0) {
            return;
        }

        if (diff < 0) {
            // right
            const updatedBoardId = activeBoardId + 1;

            if (updatedBoardId < children.length) {
                setActiveBoardId(updatedBoardId);
                startAimation(-updatedBoardId * DISPLAY_WIDTH);
                setStartX(-updatedBoardId * DISPLAY_WIDTH);
                !!onScroll && onScroll(updatedBoardId);
            } else {
                startAimation(-activeBoardId * DISPLAY_WIDTH);
                setStartX(-activeBoardId * DISPLAY_WIDTH);
            }
        } else {
            // left
            const updatedBoardId = activeBoardId - 1;

            if (updatedBoardId >= 0) {
                setActiveBoardId(updatedBoardId);
                startAimation(-updatedBoardId * DISPLAY_WIDTH);
                setStartX(-updatedBoardId * DISPLAY_WIDTH);
                !!onScroll && onScroll(updatedBoardId);
            } else {
                startAimation(0);
                setStartX(0);
            }
        }

        setCurrentX(0);
    }

    useEffect(() => {
        if (active !== undefined) {
            if (active >= 0 && active < children.length) {
                setActiveBoardId(active);
                startAimation(-active * DISPLAY_WIDTH);
                setStartX(-active * DISPLAY_WIDTH);
                setCurrentX(0);
            } else {
                throw new Error('active cannot be more boards count or less than 0')
            }
        }
    }, [active])

    const translateStyle = {
        transform: [{translateX: tarnslateAnimation}],
    }

    return (
        <View style={scrollboardsStyle.container}>
            <Animated.View 
                style={[scrollboardsStyle.boards, translateStyle]}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {children.map((child, i) => 
                    <View key={i} style={scrollboardsStyle.board}>
                        {child}
                    </View>
                )}
            </Animated.View>
        </View>
    )
}