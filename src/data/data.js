const productos = [
    {
        id: "paru1",
        nombre: "FURAI MAKI",
        descripcion: "Palta, queso crema y salmón; todo crocante por fuera y salsa dulce",
        stock: 5,
        categoria: "Sushi",
        imagen: "../public/img/furai.jpg",
        precio: 18600
    },
    {
        id: "paru2",
        nombre: "TEMPURA",
        descripcion: "Tempura de langostino, queso crema, palta por fuera y salsa dulce",
        stock: 10,
        categoria: "Sushi",
        imagen: "../public/img/tempura.jpg",
        precio: 18600
    },
    {
        id: "paru3",
        nombre: "DOS SAKES",
        descripcion: "Tartare de salmón y palta, por fuera láminas de salmón con aliño oriental",
        stock: 2,
        categoria: "Sushi",
        imagen: "../public/img/dossakes.jpg",
        precio: 18800
    },
    {
        id: "paru4",
        nombre: "SALMON PHILI",
        descripcion: "Salmón y palta. Por fuera queso y aderezo nikkei con hilos crocantes.",
        stock: 3,
        categoria: "Sushi",
        imagen: "../public/img/salmonphili.jpg",
        precio: 18800
    },
    {
        id: "inkas1",
        nombre: "PICANTE DE MARISCOS",
        descripcion: "Mariscos cocidos en ajíes peruanos, crema y crutones de mandioca",
        stock: 1,
        categoria: "Grill",
        imagen: "../public/img/picantemariscos.jpg",
        precio: 26000
    },
    {
        id: "inkas2",
        nombre: "CHAUFA NIKKEI",
        descripcion: "Arroz saltado con verduras y huevo. Con chicharrones de pescado",
        stock: 3,
        categoria: "Grill",
        imagen: "../public/img/chaufanikkei.jpg",
        precio: 18400
    },
    {
        id: "inkas3",
        nombre: "LOMO SALTADO",
        descripcion: "Clásico peruano acompañado de arroz e inkas fries",
        stock: 3,
        categoria: "Grill",
        imagen: "../public/img/lomosaltado.jpg",
        precio: 18000
    },
    {
        id: "inkas4",
        nombre: "TAI RICE POLLO",
        descripcion: "Arroz oriental salteado con cebollas, primientos y chauchas.",
        stock: 5,
        categoria: "Grill",
        imagen: "../public/img/tairicepollo.jpg",
        precio: 13200
    },
    {
        id: "deli1",
        nombre: "SEMIFREDDO DE DULCE DE LECHE",
        descripcion: "Base de coco y salsa de dulce de leche y pisco.",
        stock: 7,
        categoria: "Postre",
        imagen: "../public/img/semifreddo.jpg",
        precio: 7900
    },
    {
        id: "deli2",
        nombre: "SOUFFLE DE MARACUYÁ",
        descripcion: "Souffle helado de maracuyá",
        stock: 30,
        categoria: "Postre",
        imagen: "../public/img/soufflemaracuja.jpg",
        precio: 7500
    },
];

const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

export { obtenerProductos };
