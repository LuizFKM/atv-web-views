import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

function PageHome() {
    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>

                    <View style={styles.iconContainer}>
                        <Ionicons name="compass-outline" size={48} color="#6200ee" />
                    </View>


                    <Text variant="headlineSmall" style={styles.titulo}>
                        Guia do Cidadão
                    </Text>


                    <Text variant="bodyLarge" style={styles.texto}>
                        Navegue entre as abas abaixo para conferir as páginas essenciais para o cidadão brasileiro.
                    </Text>
                </Card.Content>
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    card: {
        paddingVertical: 16,
    },
    cardContent: {
        alignItems: "center",
    },
    iconContainer: {
        backgroundColor: "#ede7f6",
        padding: 16,
        borderRadius: 50,
        marginBottom: 16,
    },
    titulo: {
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    texto: {
        textAlign: "center",
        lineHeight: 24,
        color: "#444",
    },
});

export default PageHome;