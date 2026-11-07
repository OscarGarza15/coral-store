/**
 * Modelo de catálogo de Coral Store.
 *
 * El código de producto (SKU) sigue el formato de 7 dígitos que definieron
 * Oscar y la dueña: D C MM NNN → Departamento · Categoría · Marca · Consecutivo.
 * Es el mismo código que nombra la carpeta/archivo de fotos de cada pieza.
 */

export type DepartamentoId = 1 | 2 | 3;

export interface Departamento {
  id: DepartamentoId;
  nombre: string;
}

export const DEPARTAMENTOS: Departamento[] = [
  { id: 1, nombre: "Dama" },
  { id: 2, nombre: "Caballero" },
  { id: 3, nombre: "Bebé" },
];

export interface Categoria {
  /** Dígito C del código (1-9), único dentro de su departamento. */
  digito: number;
  nombre: string;
}

/** Categorías por departamento, en el orden que se muestran en la navegación. */
export const CATEGORIAS: Record<DepartamentoId, Categoria[]> = {
  1: [
    { digito: 1, nombre: "Bolsas" },
    { digito: 2, nombre: "Carteras" },
    { digito: 3, nombre: "Tenis" },
    { digito: 4, nombre: "Perfumes y Body's" },
    { digito: 5, nombre: "Velas" },
    { digito: 6, nombre: "Pijamas y ropa interior" },
    { digito: 7, nombre: "Sudaderas / Sweaters" },
    { digito: 8, nombre: "Chaquetas" },
    { digito: 9, nombre: "Joyería" },
  ],
  2: [
    { digito: 1, nombre: "Carteras" },
    { digito: 2, nombre: "Perfumes" },
    { digito: 3, nombre: "Body's" },
    { digito: 4, nombre: "Sudaderas / Sweaters" },
    { digito: 5, nombre: "Chaquetas" },
    { digito: 6, nombre: "Gorras" },
  ],
  3: [
    { digito: 1, nombre: "Recién nacido" },
    { digito: 2, nombre: "Niños" },
  ],
};

export interface Marca {
  /** Código MM del código (01-99). */
  codigo: string;
  nombre: string;
}

/**
 * Catálogo de marcas confirmado. 18-89 quedan libres para marcas nuevas
 * conforme aparezcan (regla que definió la dueña con la otra IA).
 * Juicy Couture se agrega aquí como 18 siguiendo esa misma regla: ya estaba
 * confirmada como marca de bolsas pero faltaba en la lista numerada.
 */
export const MARCAS: Marca[] = [
  { codigo: "01", nombre: "Coach" },
  { codigo: "02", nombre: "Steve Madden" },
  { codigo: "03", nombre: "Michael Kors" },
  { codigo: "04", nombre: "Kate Spade" },
  { codigo: "05", nombre: "Guess" },
  { codigo: "06", nombre: "Tommy Hilfiger" },
  { codigo: "07", nombre: "Calvin Klein" },
  { codigo: "08", nombre: "DKNY" },
  { codigo: "09", nombre: "Hugo Boss" },
  { codigo: "10", nombre: "Armani" },
  { codigo: "11", nombre: "Nike" },
  { codigo: "12", nombre: "Adidas" },
  { codigo: "13", nombre: "Puma" },
  { codigo: "14", nombre: "Reebok" },
  { codigo: "15", nombre: "Asics" },
  { codigo: "16", nombre: "Champion" },
  { codigo: "17", nombre: "Disney" },
  { codigo: "18", nombre: "Juicy Couture" },
  { codigo: "90", nombre: "Sin marca" },
  { codigo: "99", nombre: "Otra" },
];

/** Las 4 marcas con franja dedicada en Bolsas, confirmadas por la dueña. */
export const MARCAS_BOLSAS_DESTACADAS = [
  "Guess",
  "Steve Madden",
  "Tommy Hilfiger",
  "Juicy Couture",
];

export function marcaPorCodigo(codigo: string): Marca | undefined {
  return MARCAS.find((m) => m.codigo === codigo);
}

export function categoriaPorDigito(
  departamento: DepartamentoId,
  digito: number
): Categoria | undefined {
  return CATEGORIAS[departamento].find((c) => c.digito === digito);
}

export function nombreDepartamento(id: DepartamentoId): string {
  return DEPARTAMENTOS.find((d) => d.id === id)?.nombre ?? "";
}

/** Arma el código de 7 dígitos D-C-MM-NNN a partir de sus partes. */
export function construirSku(
  departamento: DepartamentoId,
  categoriaDigito: number,
  marcaCodigo: string,
  consecutivo: number
): string {
  const nnn = String(consecutivo).padStart(3, "0");
  return `${departamento}${categoriaDigito}${marcaCodigo}${nnn}`;
}

export interface SkuPartes {
  departamento: DepartamentoId;
  categoriaDigito: number;
  marcaCodigo: string;
  consecutivo: number;
}

/** Lee un código de 7 dígitos y regresa sus partes. */
export function leerSku(sku: string): SkuPartes | null {
  if (!/^\d{7}$/.test(sku)) return null;
  return {
    departamento: Number(sku[0]) as DepartamentoId,
    categoriaDigito: Number(sku[1]),
    marcaCodigo: sku.slice(2, 4),
    consecutivo: Number(sku.slice(4, 7)),
  };
}

export type Condicion =
  | "Nuevo con etiqueta"
  | "Nuevo sin etiqueta"
  | "Exhibición"
  | "Con detalle";

export interface Producto {
  sku: string;
  departamento: DepartamentoId;
  categoriaDigito: number;
  marcaCodigo: string;
  /** Nombre de marca a mostrar; para piezas de ejemplo es "Marca Demo", nunca una marca real. */
  marcaNombre: string;
  nombre: string;
  /** Ruta dentro de /public, nombrada por SKU. Si no hay foto, la tarjeta muestra el marcador genérico. */
  foto?: string;
  variante?: string;
  talla?: string;
  color?: string;
  condicion: Condicion;
  notasCondicion?: string;
  descripcion: string;
  precio: number;
  precioOriginal?: number;
  piezaUnica?: boolean;
  fechaIngreso: string;
  fotos: number;
  existencia: number;
  estado: "disponible" | "apartado" | "vendido";
}

export function enOferta(p: Producto): boolean {
  return !!p.precioOriginal && p.precioOriginal > p.precio;
}
