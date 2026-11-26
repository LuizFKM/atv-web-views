import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PageHome from "../pages/PageHome";
import PagePoliticometro from "../pages/PagePoliticometro";
import PageConstituicao from "../pages/PageConstituicao";
import PageIBGE from "../pages/PageIBGE";


const Tabs = createBottomTabNavigator()

function TabsNavigator() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={PageHome} options={{ tabBarIcon: () => <Ionicons name="home" size={24} color="black" /> }} />
            <Tabs.Screen name="Politicometro" component={PagePoliticometro} options={{ tabBarIcon: () => <Ionicons name="open-outline" size={24} color="black" /> }} />
            <Tabs.Screen name="Constituição" component={PageConstituicao} options={{ tabBarIcon: () => <Ionicons name="book-outline" size={24} color="black" /> }} />
            <Tabs.Screen name="IBGE" component={PageIBGE} options={{ tabBarIcon: () => <Ionicons name="stats-chart-outline" size={24} /> }} />
        </Tabs.Navigator>
    )
}

export default TabsNavigator;