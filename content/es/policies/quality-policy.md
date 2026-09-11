---
title: "Política de Calidad"
description: "Qué significa 'terminado' en INNOVATS: estándares, pruebas, aceptación y mejora continua."
lastUpdated: "10-09-2026"
version: "v1.0"
---

> Resumen público de `POL-11`. Nuestro estándar: nada llega a producción sin estar probado, revisado y aceptado.

## 1. Compromiso

Entregamos software que funciona, es seguro y se puede mantener. La calidad se construye desde el diseño —no se inspecciona al final— y se demuestra con evidencia: pruebas automatizadas, revisiones y aceptación firmada.

## 2. Qué significa “terminado”

Un entregable está terminado solo si cumple su **Definition of Done**: código fusionado con revisión aprobada, pruebas en verde, despliegue en staging verificado, documentación actualizada, demo realizada y criterios de aceptación cumplidos. Sin esto, no se factura el hito.

## 3. Niveles de prueba

| Nivel | Qué cubre | Estándar |
|-------|------------|----------|
| Unitarias | Lógica de cada unidad | Cobertura ≥70% global (≥80% en código nuevo) |
| Integración | APIs, base de datos y permisos | Datos efímeros, sin dependencias frágiles |
| End-to-end | Flujos críticos del negocio | 10 flujos críticos automatizados (Playwright) |
| Seguridad | Vulnerabilidades y secretos | Escaneo en CI; hallazgos altos bloquean el release |
| Rendimiento | Carga y tiempos de respuesta | Pruebas k6 pre-release en funciones sensibles |

## 4. Gestión de defectos

Todo defecto se registra con pasos, evidencia, severidad y prioridad. Severidades P1 (crítica, bloquea) a P4 (cosmética), cada una con tiempos de respuesta según su plan de soporte. Ningún P1/P2 abierto llega a producción.

## 5. Aprobación de releases

Cada pase a producción requiere: suite de regresión en verde sobre el mismo artefacto, checklist de seguridad y firmas de QA, Tech Lead y PM. Despliegues en ventana acordada, con plan de rollback menor a 15 minutos.

## 6. Métricas que vigilamos

Tasa de defectos en producción (<5%), cobertura, tiempo de corrección (MTTR), pruebas inestables y satisfacción (NPS ≥60). Se revisan por sprint y por trimestre con el cliente.

## 7. Reclamos y mejora continua

Todo reclamo recibe acuse en 24 horas y plan de corrección. Cada incidente P1 genera postmortem en 48 horas con acciones fechadas. Auditorías internas mensuales y mejora anual de esta política. Contacto de calidad: contacto@innovats.dev.
