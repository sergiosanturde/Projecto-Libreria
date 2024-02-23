import React, { useEffect, useState } from "react";
import { View, Modal, Text, TouchableOpacity, Button } from "react-native";
import ActualizarLibro from "./ActualizarLibro";

const DetallesLibro = ({ visible, onClose, onDelete, onUpdate, item }) => {
  const [actualizado, setActualizado] = useState(false);

  const Actualizacion = () => {
    setActualizado(true);
  };

  const libroModificado = (libroActualizado) => {
    onUpdate(libroActualizado)
    setActualizado(false)
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {item?.titulo}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {item?.autor}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {item?.precio}$
          </Text>
          <Button title="Actualizar" onPress={Actualizacion} />
          <TouchableOpacity onPress={onDelete} style={{ marginTop: 20 }}>
            <Text style={{ color: "red" }}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text style={{ color: "black" }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ActualizarLibro
        visible={actualizado}
        onClose={() => {
          setActualizado(false);
        }}
        onUpdate={libroModificado}
        item={item}
      />
    </Modal>
  );
};

export default DetallesLibro;
