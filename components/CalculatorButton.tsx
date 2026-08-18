import { Colors } from '@/constants/Colors';
import { Text, Pressable } from 'react-native'
import { StyleSheet } from "react-native"

interface Props {
    onPress?: () => void;
    label: string;
    color?: 'orange' | 'darkGray' | 'lightGray';
    textColor?: 'textPrimary' | 'background'
}

export const CalculatorButton = ({ label, color = 'darkGray', textColor = 'textPrimary', onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.buttonCalculator,
                { backgroundColor: Colors[color] },
            ]}>

            <Text style={[
                styles.textButton,
                { color: Colors[textColor] },
            ]}>
                {label}
            </Text>

        </Pressable>
    )
}

export const styles = StyleSheet.create({
    buttonCalculator: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        fontSize: 25,
        fontWeight: '300',
        includeFontPadding: false,
        fontFamily: 'SpaceMono',
    }
}
)