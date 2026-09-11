--- 
title: "Quality Policy"
description: "What 'done' means at INNOVATS: standards, testing, acceptance, and continuous improvement."
lastUpdated: "2026-09-10"
version: "v1.0"
--- 

> Public summary of `POL-11`. Our standard: nothing reaches production without being tested, reviewed, and accepted.

## 1. Commitment

We deliver software that works, is secure, and can be maintained. Quality is built into the design —not inspected at the end— and demonstrated through evidence: automated testing, reviews, and signed acceptance.

## 2. What “Done” Means

A deliverable is considered done only if it meets its **Definition of Done**: code merged with an approved review, tests passing, verified staging deployment, updated documentation, completed demo, and fulfilled acceptance criteria. Without these requirements, the milestone will not be invoiced.

## 3. Testing Levels

| Level | Coverage | Standard |
|-------|----------|----------|
| Unit | Logic of each unit | ≥70% overall coverage (≥80% for new code) |
| Integration | APIs, database, and permissions | Ephemeral data, no fragile dependencies |
| End-to-end | Critical business workflows | 10 automated critical workflows (Playwright) |
| Security | Vulnerabilities and secrets | CI scanning; high-severity findings block the release |
| Performance | Load and response times | Pre-release k6 testing for sensitive functions |

## 4. Defect Management

Every defect is logged with steps to reproduce, evidence, severity, and priority. Severity ranges from P1 (critical, blocking) to P4 (cosmetic), each with response times according to the applicable support plan. No open P1/P2 issue reaches production.

## 5. Release Approval

Every production deployment requires: a green regression suite using the same artifact, a security checklist, and sign-off from QA, the Tech Lead, and the PM. Deployments take place within an agreed window, with a rollback plan of less than 15 minutes.

## 6. Metrics We Monitor

Production defect rate (<5%), coverage, mean time to resolution (MTTR), flaky tests, and satisfaction (NPS ≥60). These metrics are reviewed per sprint and quarterly with the client.

## 7. Complaints and Continuous Improvement

Every complaint receives an acknowledgment within 24 hours and a corrective action plan. Every P1 incident generates a postmortem within 48 hours with dated action items. Internal audits are conducted monthly, and this policy is reviewed and improved annually. Quality contact: contacto@innovats.dev.
