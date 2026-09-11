--- 
title: "Information Security Policy"
description: "How INNOVATS protects the confidentiality, integrity, and availability of its information."
lastUpdated: "2026-09-10"
version: "v1.0"
--- 

> Public summary of `POL-04`. Reference: ISO/IEC 27001:2022 and Law No. 30096 (cybercrime). Internal operational details are not published for security reasons.

## 1. Commitment

We protect the confidentiality, integrity, and availability of our own and our clients' information through risk-proportionate controls, continuous improvement, and a rapid response to incidents.

## 2. Classification

All information is classified as **public, internal, confidential, or restricted**. Each level defines who may access it, where it is stored, and how it is transmitted. When in doubt, information is treated as confidential.

## 3. Access and Accounts

Named and non-transferable accounts, least privilege, and temporary project-based access with quarterly reviews. Multi-factor authentication (MFA) is mandatory across all corporate systems and systems containing client data. Sharing usernames, passwords, or tokens is prohibited.

## 4. Equipment and Remote Work

Encrypted drives, up-to-date operating systems and antivirus software, automatic locking, and secure networks (VPN when outside trusted networks). Devices containing restricted information require authorization and additional controls.

## 5. Code, Cloud, and Data

Private repositories with protected branches, mandatory code review, and secret scanning/blocking in the codebase. Cloud environments use segmented networks, encryption, and **3-2-1 backups with restoration testing**. Production databases have minimal access, and anonymized data is used in development whenever possible.

## 6. Email and Communications

Corporate accounts with anti-phishing protection and sender verification. We will never request passwords or payments to personal accounts: all payments are coordinated through official project channels.

## 7. Suppliers

Only evaluated suppliers are authorized, with confidentiality agreements and —when they process data— data processing agreements. No exceptions are permitted without approval and a defined validity period.

## 8. Incidents

We classify incidents as P3 (low), P2 (medium), and P1 (critical). In the event of a P1 incident: containment within 4 hours, notification of the affected client within 24 hours, and notification of the authorities within 72 hours when applicable, along with a root cause analysis and corrective actions. Report incidents to **seguridad@innovats.dev**.

## 9. Business Continuity

Daily backups, recovery runbooks, and periodic drills are conducted to restore critical services within the committed objectives (RTO/RPO) defined in each SOW.

## 10. Compliance

Non-compliance (sharing access credentials, exposing secrets, installing unauthorized software, or concealing incidents) is subject to progressive disciplinary action, up to termination of the relationship and legal action. This policy is reviewed annually. Contact: seguridad@innovats.dev.