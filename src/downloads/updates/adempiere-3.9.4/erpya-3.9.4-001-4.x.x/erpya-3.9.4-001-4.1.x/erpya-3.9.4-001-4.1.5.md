---
title: erpya-3.9.4-001-4.1.5
icon: podcast
category: Actualizaciones
tag:
  - Actualizaciones
  - erpya-3.9.4-001-4.1.5
  - 2026-04-22
article: true
---

# Fecha de Liberación: 2026-04-22

## Novedades
Carga de Datos Masiva y Gestión Bancaria Ahora Más Sencillas y Robustas.

## Contexto
Esta actualización se centra en hacer que la carga de información en el sistema sea más inteligente, rápida y menos propensa a errores, además de mejorar la fiabilidad en la gestión de sus transacciones bancarias. Hemos escuchado sus necesidades y hemos trabajado para que sus procesos diarios sean más fluidos y eficientes.

*   **Gestión de Extractos Bancarios Banplus Mejorada:**
    *   **Problema anterior:** Algunas variaciones en los formatos de los extractos bancarios de Banplus podían causar que la información se cargara incompleta o con montos incorrectos, generando inconsistencias en su contabilidad.
    *   **Solución ahora:** Hemos mejorado la forma en que el sistema procesa estos extractos. Ahora, el sistema es más inteligente y puede entender tanto los formatos antiguos como los más recientes, asegurando que todos sus movimientos bancarios se registren de forma precisa. Los formatos históricos seguirán funcionando como siempre, y hemos añadido compatibilidad para las nuevas versiones.
    *   **Beneficio:** Mayor precisión y flexibilidad al cargar sus extractos de Banplus, evitando errores y ahorrando tiempo.

*   **Importador Avanzado de Datos Más Robusto y Fácil de Usar:**
    *   **Problema anterior:** Cargar grandes volúmenes de datos con estructuras complejas (por ejemplo, una lista de precios, sus versiones y los precios de productos, todo desde un mismo archivo) podía ser complicado, requerir configuraciones repetitivas y, en ocasiones, omitir información. Los errores en el formato de fechas también podían detener la carga.
    *   **Solución ahora:** Hemos rediseñado el importador para que sea mucho más potente y tolerante a errores:
        *   **Gestión Inteligente de la Memoria del Sistema:** Cuando importa documentos complejos con varias secciones interconectadas (como una lista de precios principal, sus versiones y los precios de cada producto), el sistema ahora gestiona la "memoria del sistema" de forma independiente para cada una de estas secciones. Esto evita conflictos y asegura que toda la información se guarde correctamente, sin que se omitan datos.
        *   **Reconocimiento Automático de Contenido:** Si olvida seleccionar una "pestaña" específica en su plantilla de importación, el sistema ahora puede adivinar inteligentemente qué información está intentando cargar. Esto significa menos clics y una carga de datos más fluida.
        *   **Fechas Siempre Correctas:** El sistema ahora es más flexible con las fechas. No importa cómo las escriba en su archivo (por ejemplo, con o sin la hora), el sistema las interpretará correctamente y las convertirá al formato estándar, evitando "errores de guardado" por este motivo.
        *   **Informes Detallados de Éxito:** Al finalizar una importación, el sistema le mostrará un informe mucho más detallado, indicando exactamente cuántos registros se crearon en cada una de las secciones de su documento (por ejemplo, cuántas listas de precios, cuántas versiones y cuántos precios de producto).
    *   **Beneficio:** Carga de datos masiva más rápida, sencilla y confiable, especialmente para información compleja y relacionada.

*   **Programa de Asistencia para Agricultor Más Estable:**
    *   **Problema anterior:** En el programa de asistencia para agricultores, al procesar a productores que se autofinancian, a veces se intentaba asignar una cuenta financiera inválida, lo que causaba "errores de guardado".
    *   **Solución ahora:** Hemos corregido este comportamiento. El sistema ahora verifica que la cuenta financiera sea válida antes de asignarla, previniendo estos problemas y asegurando la integridad de sus registros.
    *   **Beneficio:** Mayor estabilidad y menos "errores de guardado" en la gestión de cuentas del programa de asistencia para agricultores.

## Requerimientos
- No se requieren procesos adicionales por aplicar.