# gemini.md - Project Map (Source of Truth)
**Project:** Lappen.no Quiz System  
**Protocol:** B.L.A.S.T. (Blueprint → Link → Architect → Stylize → Trigger)  
**Architecture:** A.N.T. (Action, Network, Task)  
**Backend Authority:** Supabase (TypeScript SDK)  
**Last Updated:** 2026-01-24T12:39:40+01:00

---

## Project Status
**Current Phase:** Protocol 5 - Trigger (Deployment Ready)  
**Status:** ✅ CORE COMPLETE - Awaiting GitHub/FTP Setup for Deployment

---

## Discovery Questions (Protocol 1)
*Questions to define the "Job to be Done"*

### ✅ Answers Received:

**1. Core Purpose**
- Purpose: Driver's license theory testing for Class B (Personbil)
- End users: Students preparing for Norwegian theory exam
- Result logic: Bestått/Ikke bestått

**2. Quiz Structure & Logic**
- Questions per quiz: 45 (standard Norwegian exam length)
- Question types: Multiple choice + image-based
- Passing criteria: Maximum 7 errors allowed (~85% correct = 38+ correct answers)
- Topics: Comprehensive test (Vikeplikt, Skilt, Bil og Utstyr, etc.)

**3. Database Requirements**
- Supabase: Project "Lappen.no" already set up
- Existing data: `questions` table with 20 rows
- Auth: Anonymous access (no login required)
- Results: No history/leaderboards - just show final result

**4. Content Management**
- Method: Direct management via Supabase Table Editor
- Admin panel: Not needed for MVP

**5. Deployment**
- Target: Webhuset (lappen.no) via FTP
- Automation: GitHub Actions (to be configured)

---

## A.N.T. Architecture Definition
*To be defined after Discovery*

### Action Layer
- TBD

### Network Layer
- TBD

### Task Layer (Supabase Interface)
- TBD

---

## Supabase Data Model
*To be defined after Discovery*

### Tables
- TBD

### Buckets (Storage)
- TBD

---

## Behavioral Rules
*To be defined during Blueprint phase*

---

## Environment Configuration
```
SUPABASE_URL=https://tdclflxovwhqutaikvuj.supabase.co
SUPABASE_ANON_KEY=sb_publishable_S1gzl7ByNvwWie2KVevuuw_Y97MB2mp
SUPABASE_SERVICE_KEY=(not needed for MVP - anonymous access)
```

---

## Deployment Pipeline
*To be configured in Protocol 5*

- GitHub Repository: TBD
- FTP Target: Webhuset (lappen.no)
- Automation: GitHub Actions

---

## Session Log
- **2026-01-24 12:39** - Project initialized, gemini.md created, Discovery phase started
- **2026-01-24 12:43** - Discovery questions answered, task.md created, awaiting Supabase credentials
- **2026-01-24 13:07** - Supabase credentials received, implementation_plan.md created, awaiting GO command
- **2026-01-24 13:31** - User approved Option C, began execution phase
- **2026-01-24 14:00** - Core implementation complete, schema mismatch fixed, browser testing passed
- **2026-01-24 14:10** - Deployment automation configured, walkthrough.md created, project ready for GitHub setup
- **2026-01-24 17:52** - User configured Supabase storage (quiz-images bucket), fixed image loading, all features verified working
