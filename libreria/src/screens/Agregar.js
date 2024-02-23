import axios from "axios";
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { v4 as uuidv4, v4 } from "uuid";
import ActualizarLibro from "./ActualizarLibro";

const Agregar = () => {
  const [titulo, SetTitulo] = useState("");
  const [autor, SetAutor] = useState("");
  const [precio, SetPrecio] = useState("");

  const agregarLibro = () => {
    const id = uuidv4();

    axios.post(
      "http://localhost:5000/prueba-sergio-santurde-mota/us-central1/app/libreria",
      { id: id, titulo: titulo, autor: autor, precio: precio }
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={SetTitulo}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Autor"
        value={autor}
        onChangeText={SetAutor}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={SetPrecio}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title="Agregar" onPress={agregarLibro} />
    </View>
  );
};

export default Agregar;
