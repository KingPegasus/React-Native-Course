import { StyleSheet, View } from 'react-native';
import { COLORS } from './constants/colors';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.text,
        sceneContainerStyle: { backgroundColor: COLORS.background },
        drawerContentStyle: { backgroundColor: COLORS.primary },
        drawerActiveTintColor: COLORS.primary,
        drawerActiveBackgroundColor: COLORS.accent,
        drawerInactiveTintColor: COLORS.text,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <View style={styles.appContainer}>
          <StatusBar style="light" />
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: COLORS.primary },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: COLORS.background },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
              // options={({ route }) => ({ title: route.params.categoryTitle })}
            />
            <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
