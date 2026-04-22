```markdown
---
title: erpya-3.9.4-001-4.1.4
icon: podcast
category: Actualizaciones
tag:
  - Actualizaciones
  - erpya-3.9.4-001-4.1.4
  - 2026-04-22
article: true
---

# Fecha de Liberación: 2026-04-22

## Novedades
Optimización del Importador Avanzado y Gestión de Extractos Bancarios.

## Contexto
Esta actualización se enfoca en mejorar la robustez y funcionalidad de componentes clave del sistema, abordando tanto la integración de pagos como la eficiencia en la importación masiva de datos y la lógica de programas de asistencia.

### Gestión de Customizaciones de Pago
Se ha realizado una actualización crítica en la integración de extractos bancarios de Banplus. Anteriormente, el sistema experimentaba cargas incompletas y una interpretación errónea de montos debido a variaciones en el formato de los extractos. Para resolver esto sin impactar a los usuarios existentes, se implementó una estrategia dual:
1.  Se restauró y mantuvo el formato "base/original" (CSV/TXT/XLS) de Banplus, asegurando que los extractos que históricamente se cargaban sigan funcionando sin alteraciones.
2.  Se incorporaron nuevos "loaders" con sufijos `(custom)` diseñados específicamente para manejar los formatos más recientes de Banplus. Estos nuevos loaders incluyen ajustes en la interpretación de datos, como el manejo de montos/decimales y la lectura de líneas, adaptándose a las particularidades de los nuevos extractos. Este enfoque garantiza la compatibilidad con formatos antiguos y nuevos, mejorando la fiabilidad de la carga de extractos.

### Mejoras en el Importador Avanzado
Esta versión introduce mejoras significativas en la robustez y usabilidad del Importador Avanzado, facilitando la carga de archivos masivos con estructuras de datos complejas y anidadas, y reduciendo la necesidad de configuraciones manuales en las plantillas.

*   **Aislamiento de Caché por Tabla (Multi-Anidación):** Se ha reescrito el motor de caché en memoria de la sesión para limitar su alcance por "Nivel y Tabla". Esta mejora clave resuelve problemas de inserciones omitidas que ocurrían al procesar estructuras complejas con tablas hermanas de segundo nivel. Por ejemplo, ahora es posible cargar simultáneamente una cabecera de lista de precios (`M_PriceList`), su versión (`M_PriceList_Version`), y múltiples precios de producto (`M_ProductPrice`) desde un único documento sin conflictos ni pérdida de datos.
*   **Auto-resolución Flexible de Modelos (Pestañas Opcionales):** La herramienta ahora puede iniciar procesos de importación incluso si el usuario omite la selección de una "Pestaña" (Tab) en la Plantilla de Importación. El sistema resolverá de manera inteligente la tabla raíz, utilizando la Primera Pestaña de la Ventana o recurriendo directamente al Nombre de la Plantilla, mientras permite que la sintaxis `Tabla>Columna` guíe la estructura del archivo de forma autónoma.
*   **Tolerancia Activa para Fechas (Timestamps):** Se ha implementado una capa de conversión universal para la resolución de valores en campos de base de datos de tipo fecha. Esto significa que entradas de texto o de utilería (como `ValidFrom`) se transformarán de manera transparente y automática en objetos estandarizados `java.sql.Timestamp`, evitando bloqueos o rechazos durante el mapeo de los Modelos (PO).
*   **Reportes de Resumen Detallados:** El reporte final de éxito ha sido mejorado para ofrecer un desglose detallado de la operación. Ahora se confirma con precisión en qué tablas trabajó el sistema y cuántos registros reales se crearon en cada una de ellas de forma independiente. Por ejemplo, un resumen podría mostrar: `(M_PriceList: 1, M_PriceList_Version: 1, M_ProductPrice: 250)`.

### Corrección en el Programa de Asistencia para Agricultor
Se ha corregido la lógica de asignación del campo `FM_Account_ID` (CUENTA) para garantizar la integridad de los datos. La validación ahora asegura que el condicionamiento tenga un acuerdo/cuenta válido (valor mayor a 0) antes de su asignación. Esta corrección previene que se establezca un valor 0 al evaluar productores autofinanciados, eliminando así posibles errores de clave foránea en la base de datos.

## Requerimientos
- No se requieren procesos adicionales por aplicar.
```