---
title: erpya-3.9.4-001-3.7.6
icon: podcast
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.6"
  - "2026-01-15"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-01-15

## Novedades

- **Ajustes en flujo de eventos para Pesaje y Análisis de Calidad**

## Contexto

Se ha reorganizado la ejecución de eventos en procesos críticos para mejorar la integridad de los datos:
- **Record Weight**: La validación de peso incompleto se movió al evento `Completed`, antes de los validadores del modelo.
- **Análisis de Calidad**: El evento de creación de la orden de salida se trasladó al estado `Completed` del proceso de Record Weight.
- **FAP**: El método de creación del peso de acondicionamiento se movió del evento `Before Prepare` al evento `Before Completed`.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
