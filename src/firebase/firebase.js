import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQvfUt1BE94QKTnNfx60V_FaiBuziZeqA",
    authDomain: "react-proyecto-final-5985f.firebaseapp.com",
    projectId: "react-proyecto-final-5985f",
    storageBucket: "react-proyecto-final-5985f.appspot.com",
    messagingSenderId: "855982864091",
    appId: "1:855982864091:web:f2813c6e9d9631ecd93efe"
};

const app = initializeApp(firebaseConfig);

//Consultar a la BDD
const bdd = getFirestore()

/*
    Create
    Read
    Update
    Delete
*/

//Crear productos

const prods = [
    {
        "name": "Amazon Echo Dot",
        "capacity": "",
        "price": 65,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/amazon-echo-dot-5.png?alt=media&token=696c266f-fe44-433d-b5fc-cfa7bab05ab0",
        "category": "amazon"
    },
    {
        "name": "Amazon Firestick 4K MAX",
        "capacity": "",
        "price": 45,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/amazon-firestick-max.png?alt=media&token=bf0995f0-709f-4fbf-a3ff-e1afca1643e5",
        "category": "amazon"
    },
    {
        "name": "Amazon Firestick Lite",
        "capacity": "",
        "price": 35,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/firestick-lite.jpg?alt=media&token=5a82d276-67b7-4814-a6ad-9713c4543bca",
        "category": "amazon"
    },
    {
        "name": "Amazon Tablet Fire 8",
        "capacity": "",
        "price": 250,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/amazon-fire-8.jpg?alt=media&token=f6369869-344c-4bce-89ca-b25368a9420d",
        "category": "amazon"
    },
    {
        "name": "Apple TV 4K",
        "capacity": "",
        "price": 140,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/apple-tv-4k.jpg?alt=media&token=1810f5cb-30dd-441e-b83f-6ec943d25bb7",
        "category": "apple"
    },
    {
        "name": "iPhone 15 Pro Max",
        "capacity": "256 GB",
        "price": 1400,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/iphone-14-pro-max.png?alt=media&token=227ac378-d42f-40a6-9e7a-68a6314faad1",
        "category": "apple"
    },
    {
        "name": "Samsung S23 Ultra",
        "capacity": "512 GB",
        "price": 1100,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/samsung-s23-ultra.png?alt=media&token=b451429b-3c4f-4ec9-ac63-f560a66ed00e",
        "category": "samsung"
    },
    {
        "name": "Samsung Galaxy Watch 6",
        "capacity": "32 Gb",
        "price": 450,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/galaxy-watch-6.jpg?alt=media&token=73c26a6d-f067-49c6-b70b-81d1351a65b0",
        "category": "samsung"
    },
    {
        "name": "Amazon Kindle 8",
        "capacity": "16 Gb",
        "price": 250,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/amazon-kindle-8.jpg?alt=media&token=21082a4c-b32f-4dfb-8a01-457a51c83bfa",
        "category": "amazon"
    },
    {
        "name": "Apple Watch Ultra 2",
        "capacity": "16 Gb",
        "price": 850,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/apple-watch-ultra-2.jpg?alt=media&token=fc286027-3011-49a4-9791-0737cf486cae",
        "category": "apple"
    },
    {
        "name": "Samsung Galaxy Buds 2 pro",
        "capacity": "",
        "price": 250,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/galaxy-buds-2-pro.jpg?alt=media&token=69011ad6-53af-4ef0-a53d-8f9521ee8437",
        "category": "samsung"
    },
    {
        "name": "Samsung Galaxy Flip 4",
        "capacity": "1 Tb",
        "price": 950,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/galaxy-flip-4.jpg?alt=media&token=18325fab-5a4d-428f-bd0f-a3a9e679668c",
        "category": "samsung"
    },
    {
        "name": "Samsung Galaxy Fold 4",
        "capacity": "512 Gb",
        "price": 1050,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/galaxy-fold-4.jpg?alt=media&token=4db1f18f-512c-4900-b8cc-2b0274e3e053",
        "category": "samsung"
    },
    {
        "name": "Apple Airpods pro 2",
        "capacity": "",
        "price": 260,
        "stock": 13,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-proyecto-final-5985f.appspot.com/o/apple-airpods-pro-2.jpg?alt=media&token=57c92eef-8df6-47db-ba5f-e951543e8782",
        "category": "apple"
    }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}