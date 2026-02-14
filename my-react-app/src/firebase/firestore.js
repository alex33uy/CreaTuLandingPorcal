import { collection, addDoc, getDocs, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";


export const createOrder = async (orderData) => {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, {
    ...orderData,
    date: serverTimestamp()
  });

  return docRef.id;
};

export const getProducts = async () => {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};
