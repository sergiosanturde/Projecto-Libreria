/*const { Router } = require("express");
const router = Router();

const cors = require('cors')
app.use(cors())

const admin = require("firebase-admin");

const db = admin.firestore();

router.post("/api/libreria", async (request, response) => {
  try {
    await db
      .collection("libreria")
      .doc("/" + request.body.id + "/")
      .create({
        titulo: request.body.titulo,
        autor: request.body.autor,
        precio: request.body.precio,
      });
    return response.status(200).json();
  } catch (error) {
    console.log(error);
    return response.status(500).json();
  }
});

router.get("/api/libreria/:libros_id", (request, response) => {
  (async () => {
    try {
      const doc = db.collection("libreria").doc(request.params.libros_id);

      const item = await doc.get();
      const items = item.data();
      return response.status(200).json(items);
    } catch (error) {
      return response.status(500).json();
    }
  })();
});

router.get("/api/libreria", async (request, response) => {
  try {

    const snapshot = await db.collection('libreria').get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return response.status(200).json(items);
  } catch (error) {
    return response.status(500).json();
  }
});

router.delete("/api/libreria/:libros_id", async (request, response) => {
  try {
    const document = db.collection("libreria").doc(request.params.libros_id);
    await document.delete();
    return response.status(200).json();
  } catch (error) {
    return response.status(500).json();
  }
});

router.put("/api/libreria/:libros_id", async (request, response) => {
  try {
    const document = db.collection("libreria").doc(request.params.libros_id);
    await document.update({
      titulo: request.body.titulo,
      autor: request.body.autor,
      precio: request.body.precio,
    });
    return response.status(200).json();
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;*/
