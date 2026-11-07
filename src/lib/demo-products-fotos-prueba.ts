/**
 * ============================================================================
 * SOLO PARA PROBAR — Oscar mandó estas 3 fotos explícitamente para probar que
 * el catálogo pueda mostrar imágenes reales nombradas por el código de SKU
 * (el mismo sistema de carpetas/fotos que van a usar con el inventario real).
 * Él mismo pidió que se inventaran los datos de producto alrededor de las
 * fotos y dijo que ESTE ARCHIVO SE BORRA cuando lleguen las fotos reales.
 * No usar como referencia de inventario ni de precios.
 * ============================================================================
 */
import { construirSku, type Producto } from "./catalog";

export const PRODUCTOS_PRUEBA_FOTOS: Producto[] = [
  {
    sku: construirSku(1, 8, "99", 1), // 1899001
    departamento: 1,
    categoriaDigito: 8, // Chaquetas
    marcaCodigo: "99",
    marcaNombre: "Marca Demo",
    nombre: "Chaqueta corta de paño",
    foto: "/products/1899001.jpg",
    talla: "G",
    color: "Gris",
    condicion: "Nuevo con etiqueta",
    descripcion: "Chaqueta corta con bolsillos de solapa.",
    precio: 1450,
    fechaIngreso: "2026-11-01",
    fotos: 1,
    existencia: 1,
    estado: "disponible",
  },
  {
    sku: construirSku(1, 7, "99", 1), // 1799001
    departamento: 1,
    categoriaDigito: 7, // Sudaderas / Sweaters
    marcaCodigo: "99",
    marcaNombre: "Marca Demo",
    nombre: "Poncho tejido con flecos",
    foto: "/products/1799001.jpg",
    talla: "Única",
    color: "Café",
    condicion: "Nuevo con etiqueta",
    descripcion: "Poncho de punto grueso con cuello de tortuga.",
    precio: 1100,
    piezaUnica: true,
    fechaIngreso: "2026-11-01",
    fotos: 1,
    existencia: 1,
    estado: "disponible",
  },
  {
    // Esta foto sí trae la marca visible en la imagen (Calvin Klein = código 07),
    // por eso es la única de las tres con marca real — las otras dos no muestran marca.
    sku: construirSku(1, 7, "07", 2), // 1707002
    departamento: 1,
    categoriaDigito: 7, // Sudaderas / Sweaters
    marcaCodigo: "07",
    marcaNombre: "Calvin Klein",
    nombre: "Sudadera oversize",
    foto: "/products/1707002.jpg",
    talla: "L",
    color: "Café oscuro",
    condicion: "Nuevo con etiqueta",
    descripcion: "Sudadera oversize con logo bordado.",
    precio: 1350,
    fechaIngreso: "2026-11-01",
    fotos: 1,
    existencia: 1,
    estado: "disponible",
  },
];
