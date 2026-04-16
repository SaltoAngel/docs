---
title: erpya-3.9.4-001-3.7.0
icon: podcast
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.0"
  - "2026-01-08"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-01-08

## Novedades

- **Estabilización del build Gradle para Adempiere ZK WebUI (Java 17)**

## Contexto

Este release consolida la migración y estabilización del build Gradle para el proyecto **Adempiere ZK WebUI**, asegurando compatibilidad con **Java 17**, control explícito de dependencias y un empaquetado WAR consistente para ejecución con **Tomcat 9**.

### Detalles Técnicos:
- **Stack**: Java 17, Gradle 7+, Tomcat 9 / Gretty 3.0.7.
- **Dependencias Actualizadas**: Apache POI 5.2.2, XMLBeans 5.0.3, Commons IO 2.11.0, Commons Compress 1.21.
- **Resolución de Conflictos**: Se han excluido dependencias legacy para evitar colisiones en el classpath durante la ejecución en Java 17.

## Requerimientos

- Se requiere Java 17 y Tomcat 9 para la ejecución del servidor de aplicaciones.
