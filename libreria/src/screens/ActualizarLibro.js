import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

const ActualizarLibro = ({ visible, onClose, onUpdate, item }) => {
  const [libroActualizado, setLibroActualizado] = useState({ ...item });

  const actualizarInfo = () => {
    onUpdate(libroActualizado);
    onClose();
  };

  const cambiarTexto = (key, value) => {
    setLibroActualizado((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Título"
            value={libroActualizado.titulo}
            onChangeText={(text) => cambiarTexto("titulo", text)}
            style={{ marginBottom: 10, borderBottomWidth: 1 }}
          />
          <TextInput
            placeholder="Autor"
            value={libroActualizado.autor}
            onChangeText={(text) => cambiarTexto("autor", text)}
            style={{ marginBottom: 10, borderBottomWidth: 1 }}
          />
          <TextInput
            placeholder="Precio"
            value={libroActualizado.precio}
            onChangeText={(text) => cambiarTexto("precio", text)}
            keyboardType="numeric"
            style={{ marginBottom: 10, borderBottomWidth: 1 }}
          />
          <Button title="Actualizar" onPress={actualizarInfo} />
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text style={{ color: "black" }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ActualizarLibro;
