---
title: erpya-4.0.0-001-1.0.0
icon: podcast
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-4.0.0-001-1.0.0"
  - "2026-04-15"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-04-15

## Novedades

- **Nueva Funcionalidad**

## Contexto

El sistema ahora **bloquea las siguientes acciones**:
  - Anular (Void)
  - Reversar (Reverse)
  - Reversar Causación
  - Reversar Corrección

* **Condiciones de Bloqueo:** La restricción se aplica cuando la factura cumple con:
  - Estado: **Completado**
  - Transacción: **Venta (`IsSOTrx = 'Y'`)**
  - Documento fiscal: **`IsFiscalDocument = 'Y'`**

* **Resultado:** Se evita la manipulación indebida de documentos fiscales ya consolidados, garantizando integridad contable.

La restricción se aplica cuando la factura cumple con:
  - Estado: **Completado**
  - Transacción: **Venta (`IsSOTrx = 'Y'`)**
  - Documento fiscal: **`IsFiscalDocument = 'Y'`**

* **Resultado:** Se evita la manipulación indebida de documentos fiscales ya consolidados, garantizando integridad contable.

### Beneficios Principales

- **Resultado:** Se evita la manipulación indebida de documentos fiscales ya consolidados, garantizando integridad contable.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
