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
Mejoras en Integraciones Bancarias y Robustez del Importador Avanzado.

## Contexto
Esta versión introduce mejoras significativas centradas en la robustez de las integraciones bancarias y la eficiencia del Importador Avanzado, además de una corrección crítica en la gestión de programas de asistencia.

Se ha actualizado la integración de **extractos Banplus** para abordar las variantes de formato que causaban cargas incompletas y errores en la interpretación de montos. Para asegurar la compatibilidad con los flujos de trabajo existentes, se ha restaurado el formato "base/original" (CSV/TXT/XLS), permitiendo que los extractos históricos sigan funcionando sin interrupciones. Complementariamente, se han incorporado **nuevos loaders con sufijos (custom)** específicamente diseñados para el formato más reciente, los cuales incluyen ajustes precisos para la interpretación de datos, como el manejo de decimales y la lectura de líneas según la estructura del extracto.

En el **Importador Avanzado**, se han implementado importantes mejoras de robustez y usabilidad, facilitando la carga de archivos masivos con estructuras anidadas profundas y reduciendo la necesidad de configuraciones redundantes en la plantilla. Entre las principales novedades destacan:

*   **Aislamiento de Caché por Tabla (Multi-Anidación):** El motor de caché en memoria ha sido reescrito para limitar su alcance por "Nivel y Tabla". Esta optimización resuelve problemas de inserciones omitidas al procesar estructuras complejas con tablas hermanas de segundo nivel, como la carga simultánea de listas de precios, versiones y precios de productos desde un único documento.
*   **Auto-resolución Flexible de Modelos:** La herramienta ahora puede iniciar procesos de importación incluso si el usuario omite seleccionar una "Pestaña" (Tab) en la Plantilla de Importación. El sistema resuelve inteligentemente la tabla raíz, utilizando la Primera Pestaña de la Ventana o recurriendo directamente al Nombre de la Plantilla, mientras la sintaxis `Tabla>Columna` sigue guiando el mapeo de todo el archivo.
*   **Tolerancia Activa para Fechas (Timestamps):** Se ha añadido una capa de conversión universal para la resolución de valores en campos de base de datos tipo fecha. Esto permite que entradas de utilería o de texto se transformen de manera transparente y automática en objetos `java.sql.Timestamp` estandarizados, evitando bloqueos o rechazos durante el mapeo de los Modelos (PO).
*   **Reportes de Resumen Detallados:** El reporte final de éxito ahora proporciona un desglose exhaustivo, confirmando con precisión en qué tablas trabajó el sistema y cuántos registros reales se crearon en cada una de ellas de forma independiente (Ej. `Summary: (M_PriceList: 1, M_PriceList_Version: 1, M_ProductPrice: 250)`).

Finalmente, se ha corregido una lógica en el **Programa de Asistencia para Agricultor** relacionada con la asignación de `FM_Account_ID`. Ahora se valida que el condicionamiento tenga un acuerdo/cuenta válido (mayor que 0) antes de su asignación, lo que previene que se establezca un valor de 0 al evaluar productores autofinanciados y, consecuentemente, evita errores de clave foránea.

## Requerimientos
- No se requieren procesos adicionales por aplicar.
```