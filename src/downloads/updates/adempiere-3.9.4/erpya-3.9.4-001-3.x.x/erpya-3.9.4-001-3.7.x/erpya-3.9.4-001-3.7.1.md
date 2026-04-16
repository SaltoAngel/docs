---
title: erpya-3.9.4-001-3.7.1
icon: podcast
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.1"
  - "2026-01-12"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-01-12

## Novedades

- **Generación automática de tasas de cambio faltantes**

## Contexto

Se incorpora un **Model Validator** que genera automáticamente los registros faltantes en la tabla `C_Conversion_Rate` cuando el flag **`IsRateGenerated`** está activo. El validador detecta saltos de fechas entre tipos de cambio existentes y completa los días faltantes según la configuración del sistema.

### Configuración del Sistema:
- **`ECA13_MODE_RATE_GENERATE`**:
  - `last`: usa el último tipo de cambio existente.
  - `next`: usa el nuevo tipo de cambio ingresado.
- **`ECA13_ITERATION_NUMBER`**: Define el límite máximo de días que pueden generarse automáticamente por operación (evita creaciones masivas accidentales).

## Requerimientos

- Es necesario aplicar el script de migración: [020_ECA13_Automate_missing_currency_conversion_rates_generation.xml](https://github.com/erpya/currency-convert-documents/blob/master/xml/migration/020_ECA13_Automate_missing_currency_conversion_rates_generation.xml)
