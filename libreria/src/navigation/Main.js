import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Listalibros from "../screens/Listalibros";


import Agregar from "../screens/Agregar";

import { View, Text, Button, FlatList, ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

function Inicio({navigation}) {
  return (
    <ScrollView>
      <View>
        <Text>Lista de Libros</Text>
      </View>
      <View>
          <Listalibros></Listalibros>
      </View>
      <View>
        
      <Button
          title="Agregar Libro"
          onPress={() => {
            navigation.navigate("Agregar");
          }}
        />

      </View>
    </ScrollView>
  );
}

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}  />
        <Stack.Screen name="Agregar" component={Agregar} options={{ title: 'Agregar Libro' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
