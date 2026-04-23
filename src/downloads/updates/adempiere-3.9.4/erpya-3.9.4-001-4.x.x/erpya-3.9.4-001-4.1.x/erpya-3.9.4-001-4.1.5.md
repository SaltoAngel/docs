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
¡Tu sistema ahora entiende mejor tus datos y hace tus pagos bancarios más sencillos!

## Contexto
Esta actualización trae mejoras significativas para que la gestión diaria sea más fluida y precisa, especialmente al trabajar con grandes volúmenes de información o al procesar movimientos bancarios.

*   **Pagos Bancarios Más Inteligentes:** Anteriormente, algunos extractos bancarios de Banplus podían cargarse de forma incompleta o con montos incorrectos debido a pequeñas variaciones en sus archivos. Ahora, el sistema reconoce y procesa correctamente estas diferencias.
    *   Hemos asegurado que los formatos de Banplus que siempre has usado sigan funcionando sin problemas.
    *   Hemos añadido nuevas herramientas de carga que interpretan mejor los formatos más recientes de Banplus, garantizando que los montos y decimales se lean perfectamente.

*   **Importación de Datos Avanzada y Sin Esfuerzos:** Cargar archivos grandes con información detallada y relacionada (como Listas de Precios, sus versiones y los precios de cada producto) solía ser un desafío, a veces resultando en datos faltantes o conflictos. Esta versión simplifica drásticamente este proceso.
    *   **Memoria del sistema optimizada:** Hemos mejorado cómo el sistema maneja su memoria al importar, organizándola por cada tipo de información. Esto evita que se pierdan datos al guardar estructuras complejas, asegurando que toda la información se registre correctamente.
    *   **Identificación Automática de Datos:** Si olvidas seleccionar una sección específica al configurar tu plantilla de importación, el sistema ahora es lo suficientemente inteligente como para entender qué tipo de información estás importando, usando el nombre de la plantilla o la primera sección disponible como guía.
    *   **Fechas y Horas Siempre Correctas:** Ya no tendrás problemas con los formatos de fecha. El sistema ahora convierte automáticamente cualquier entrada de texto o utilería en una fecha estándar, evitando errores al guardar tu información.
    *   **Reportes de Resumen Claros:** Al finalizar una importación, recibirás un reporte detallado que te confirmará exactamente cuántos nuevos elementos se crearon en cada sección de información (por ejemplo, cuántas Listas de Precios, Versiones de Listas de Precios y Precios de Productos se añadieron).

*   **Programa de Asistencia para Agricultor Más Robusto:** Se ha corregido un detalle importante en cómo se asignan las Cuentas del Agricultor.
    *   Ahora, el sistema verifica que siempre exista un acuerdo o cuenta real antes de asignarla, evitando que se asigne un valor incorrecto (cero) a productores autofinanciados, lo que antes podía causar errores de guardado.

## Requerimientos
- No se requieren procesos adicionales por aplicar.