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
Importación de Datos Simplificada y Pagos Bancarios Más Precisos

## Contexto
Esta actualización se enfoca en hacer tu trabajo diario más fácil y preciso, especialmente al manejar grandes volúmenes de información y al conciliar tus movimientos bancarios. Antes, la importación de datos complejos podía ser un desafío, y los extractos bancarios a veces generaban errores. Con estas mejoras, hemos eliminado esas fricciones para que puedas concentrarte en lo importante: la gestión eficiente de tu negocio.

*   **Importaciones Masivas Sin Complicaciones**: La herramienta de importación ahora es mucho más robusta e inteligente. Ya no tendrás que preocuparte por configuraciones repetitivas ni por errores al cargar archivos con información detallada y relacionada (como listas de precios y sus productos asociados). El sistema lo maneja por ti, ahorrándote tiempo y esfuerzo.
*   **Conciliación Bancaria Perfecta con Banplus**: Hemos mejorado la forma en que el sistema lee los extractos bancarios de Banplus. Si antes tenías problemas con formatos que no se cargaban bien o con montos incorrectos, ahora esos inconvenientes son cosa del pasado. El sistema reconoce todas las variaciones de formato, asegurando que cada movimiento se registre con total exactitud.
*   **Reportes Claros de Importación**: Al finalizar una importación, obtendrás un reporte que te dice exactamente qué se cargó y cuántos elementos se crearon en cada categoría, dándote una visión completa y sin ambigüedades.
*   **Gestión Agrícola Más Segura**: Se ha fortalecido la asignación de cuentas en el Programa de Asistencia para Agricultor, evitando errores al guardar información, especialmente para productores autofinanciados.

## Requerimientos
- No se requieren procesos adicionales por aplicar.

---

## 💳 Personalizaciones para Pagos y Bancos

Hemos actualizado la forma en que el sistema maneja la importación de **extractos bancarios de Banplus** para que se adapte mejor a las diferentes presentaciones que el banco pueda tener. Antes, algunas variaciones en el formato podían causar que los movimientos se cargaran de forma incompleta o que los montos se interpretaran mal.

Para asegurar una transición suave y mantener la funcionalidad para todos los usuarios:
1.  Hemos garantizado que los formatos tradicionales de Banplus (CSV, TXT, XLS) sigan funcionando exactamente como antes, sin ningún cambio en su comportamiento.
2.  Hemos añadido **nuevas herramientas de lectura** diseñadas específicamente para los formatos más recientes de Banplus. Estas herramientas aseguran que el sistema interprete correctamente todos los datos, incluyendo montos y decimales, sin importar la complejidad del extracto.

El sistema ahora soporta diferentes opciones para importar tus extractos, incluyendo formatos CSV, TXT y XLS, tanto en versiones resumidas como detalladas.

---

## Importador Avanzado

Esta versión trae mejoras significativas a nuestra herramienta de importación masiva, haciéndola más fácil de usar y mucho más potente. Ahora puedes cargar grandes volúmenes de información compleja de una sola vez, sin necesidad de configuraciones repetitivas en tu plantilla.

### ✨ Nuevas Funcionalidades y Mejoras:

*   **Mayor fiabilidad en la importación de datos relacionados**: Hemos mejorado la **memoria del sistema** para que, al importar información compleja (como Listas de Precios, sus versiones y los precios de los productos asociados), cada parte se guarde correctamente sin que una interfiera con la otra. Antes, a veces se omitían datos al importar estructuras muy detalladas. Ahora, todo se procesa de forma independiente y segura.

*   **Importación más inteligente y flexible**: Si olvidas especificar una "pestaña" en tu plantilla de importación, el sistema ahora es lo suficientemente inteligente como para identificar la información principal y comenzar la importación automáticamente. Esto significa menos pasos manuales y más facilidad para cargar tus datos, ya que el sistema puede interpretar la estructura de tu archivo por sí mismo.

*   **Manejo automático de fechas**: Ya no tendrás problemas al importar fechas. El sistema ahora convierte automáticamente cualquier formato de fecha que uses (ya sea en texto o numérico) a un formato estándar, evitando que tus importaciones se detengan o rechacen por errores en las fechas.

*   **Reportes de Resumen Detallados**: Al finalizar una importación, recibirás un reporte mucho más detallado que te mostrará exactamente qué tipo de información se cargó y cuántos elementos reales se crearon en cada categoría (por ejemplo, cuántas Listas de Precios nuevas, cuántas versiones de esas listas y cuántos precios de productos se añadieron). Esto te da una visión completa y clara de tu importación.

---

## Programa de Asistencia para Agricultor

Hemos corregido un problema en el **Programa de Asistencia para Agricultor** relacionado con la asignación de cuentas. Ahora, el sistema verifica que siempre se asigne un acuerdo o cuenta válida antes de registrar la información. Esto es crucial para evitar **errores de guardado**, especialmente cuando se manejan productores que se autofinancian, asegurando que toda la información se registre correctamente y sin interrupciones.