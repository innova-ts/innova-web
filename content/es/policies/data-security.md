---
title: "Política de Seguridad de la Información"
description: "Cómo protege INNOVATS la confidencialidad, integridad y disponibilidad de su información."
lastUpdated: "2026-09-10"
version: "v1.0"
---

> Resumen público de `POL-04`. Referencia: ISO/IEC 27001:2022 y Ley N.º 30096 (delitos informáticos). Los detalles operativos internos no se publican por seguridad.

## 1. Compromiso

Protegemos la confidencialidad, integridad y disponibilidad de la información propia y de nuestros clientes con controles proporcionales al riesgo, mejora continua y respuesta rápida ante incidentes.

## 2. Clasificación

Toda información se clasifica en **pública, interna, confidencial y restringida**. Cada nivel define quién accede, dónde se almacena y cómo se transmite. Ante la duda, se trata como confidencial.

## 3. Accesos y cuentas

Cuentas nominales e intransferibles, mínimo privilegio y accesos temporales por proyecto con revisión trimestral. Autenticación multifactor (MFA) obligatoria en todos los sistemas corporativos y con datos de clientes. Prohibido compartir usuarios, contraseñas o tokens.

## 4. Equipos y trabajo remoto

Discos cifrados, sistema y antivirus actualizados, bloqueo automático y redes seguras (VPN fuera de redes confiables). Los equipos con información restringida requieren autorización y controles adicionales.

## 5. Código, nube y datos

Repositorios privados con ramas protegidas, revisión obligatoria y bloqueo de secretos en el código. Nube con redes segmentadas, cifrado y respaldos **3-2-1 con pruebas de restauración**. Bases de producción con acceso mínimo y datos anonimizados en desarrollo siempre que sea posible.

## 6. Correo y comunicaciones

Cuentas corporativas con antiphishing y verificación de remitentes. Nunca solicitaremos claves ni pagos a cuentas personales: todo pago se coordina por canales oficiales del proyecto.

## 7. Proveedores

Solo proveedores evaluados, con acuerdos de confidencialidad y —si tratan datos— contrato de encargo. Sin excepciones sin aprobación y vigencia definida.

## 8. Incidentes

Clasificamos en P3 (bajo), P2 (medio) y P1 (crítico). Ante un P1: contención en menos de 4 horas, aviso al cliente afectado en 24 horas y a las autoridades en 72 horas cuando corresponda, con informe de causa raíz y correcciones. Repórtelos a **seguridad@innovats.dev**.

## 9. Continuidad

Respaldos diarios, runbooks de recuperación y simulacros periódicos para restaurar servicios críticos dentro de los objetivos comprometidos (RTO/RPO) en cada SOW.

## 10. Cumplimiento

El incumplimiento (compartir accesos, exponer secretos, instalar software no autorizado, ocultar incidentes) se sanciona de forma progresiva hasta la desvinculación y acciones legales. Esta política se revisa anualmente. Contacto: seguridad@innovats.dev.
