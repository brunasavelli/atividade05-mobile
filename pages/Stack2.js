import Rect from "react";
import { View, Text } from "react-native";

export default function Stack() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Página Stack</Text>
    </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    },
    title: {
        fontSize: 30,
    },
}