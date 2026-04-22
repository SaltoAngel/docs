---
title: erpya-3.9.4-001-4.1.4
icon: podcast
category: Actualizaciones
tag:
  - Actualizaciones
  - erpya-394.001-4.1.4
  - 2026-04-22
article: true
---

# Fecha de Liberación: 2026-04-22

## Novedades

```# 📦 Nota de Liberación ERP-394.001-4.1.2

## 💳  Customizaciones de Pago

- Se actualizó la integración de **extractos Banplus** para manejar correctamente **variantes de formato** que estaban provocando cargas incompletas y montos mal interpretados. Para evitar afectar a usuarios que ya cargaban con el formato anterior, se hizo lo siguiente:
1. Se **restauró el formato “base/original”** de Banplus (CSV/TXT/XLS) para que los extractos que históricamente cargaban sigan funcionando igual, sin cambios en su comportamiento.
2. Se incorporaron **nuevos loaders con sufijoss (custom) para el formato más reciente, manteniendo el ajuste de interpretación de datos (por ejemplo, manejo de montos/decimales y lectura de líneas según el extracto).

| Banco | Formato | Loader (clase) |
|---|---|---|
| Banplus | CSV (base) | `org.spin.pc.bank.imp.Banplus_CSV_Loader` |
| Banplus | TXT (base) | `org.spin.pc.bank.imp.Banplus_TXT_Loader` |
| Banplus | XLS Summary (base) | `org.spin.pc.bank.imp.BanplusSummary_XLS_Loader` |
| Banplus | XLS Detailed (base) | `org.spin.pc.bank.imp.BanplusDetailed_XLS_Loader` |

---

## Importador Avanzado

Esta versión incluye importantes mejoras de robustez y usabilidad para facilitar la carga de archivos masivos con múltiples estructuras anidadas profundas, eliminando la necesidad de configuraciones redundantes en la plantilla.

### ✨ Nuevas Funcionalidades y Mejoras:

- **Aislamiento de Caché por Tabla (Multi-Anidación)**: Se reescribió el motor de caché en memoria de la sesión limitándolo por "Nivel y Tabla". Esto soluciona problemas de inserciones omitidas al crear estructuras complejas de tablas hermanas de segundo nivel (Ej. cargar Cabecera M_PriceList + Versión M_PriceList_Version + Precios M_ProductPrice desde un mismo documento sin choques).

- **Auto-resolución Flexible de Modelos (Pestañas Opcionales)**: Ahora la Herramienta puede iniciar procesos de importación incluso si el usuario olvidó seleccionar una "Pestaña" (Tab) en la Plantilla de Importación. El sistema resolverá inteligentemente la tabla raíz usando la Primera Pestaña de la Ventana, o haciendo un fallback directo al Nombre de la Plantilla, mientras permite que la sintaxis Tabla>Columna guíe libremente todo el archivo.

- **Tolerancia Activa para Fechas (Timestamps)**: Se implementó una capa de conversión universal en la resolución de valores para campos de base de datos tipo fecha. Ahora, registros como ValidFrom transformarán transparente y automáticamente entradas de utilería o de texto en objetos estandarizados java.sql.Timestamp, evitando bloqueos o rechazos durante el mapeo de los Modelos (PO).

- **Reportes de Resumen Detallados**: El reporte final de éxito ahora despliega un desglose detallado confirmando exactamente en qué tablas trabajó el sistema y cuántos registros reales se crearon en cada una de ellas independientemente (`Ej. Summary: (M_PriceList: 1, M_PriceList_Version: 1, M_ProductPrice: 250)`).

---

## Programa de Asistencia para Agricultor

- Corrección en la lógica de asignación de `FM_Account_ID` (CUENTA): ahora se valida que el condicionamiento tenga un acuerdo/cuenta válido (> 0) antes de asignarlo. Esto evita que se establezca el valor 0 al evaluar productores autofinanciados, previniendo errores de clave foránea.
 


## Requerimientos

- No se requieren.
