---
id: roadmap
title: Roadmap
---

# DMKit Roadmap

This document outlines post-v1 features and platform improvements. Items are grouped by theme, not strict release order. Nothing here is scheduled — it is a reference for prioritisation conversations.

---

## v1 Scope (Current)

The stories FE0–FE20 and BE1–BE11 define the v1 feature set:

- Campaign, World, Location, Area CRUD
- Entity library (Characters, Items, Hazards)
- Factions, Quests, Session Notes
- Player Characters
- Battle map with token placement, movement, and state (HP, conditions)
- Travel routes on world canvas
- AI world map generation (Amazon Bedrock)
- Campaign export / import (async, JSON snapshot)
- Authentication via AWS Cognito

---

## Near-Term

Small, high-value additions that extend v1 features without architectural changes.

### Combat & Encounter Tools
- **Initiative tracker** — ordered turn list on the battle map; drag to reorder; auto-advance on end-turn
- **Encounter builder** — pre-configure a token layout and entity set; drop the whole encounter into an Area at once
- **Dice roller** — inline dice roller (e.g. 2d6+3) tied to a character's ability scores; roll history per session
- **Condition reference panel** — hover a condition badge to see its rules text

### Entity Enhancements
- **Entity templates** — save a Character or Hazard as a reusable template; instantiate into any campaign
- **Bulk entity import** — paste a stat block or upload a CSV to create multiple entities at once
- **Character portrait upload** — direct image upload for Character and PlayerCharacter profile images (extends BE7/FE10 pattern)

### Quest & Session Note Improvements
- **Quest timeline view** — visualise quests by status on a horizontal timeline
- **Session note search** — full-text search across session note summaries
- **Linked quest progress** — mark individual objectives complete from the battle map sidebar

### Map & Canvas
- **Fog of war** — toggle revealed/hidden zones per Area for player-facing view
- **Area grid overlay** — configurable square or hex grid with snap-to-grid token movement
- **Distance measurement tool** — click two points on the canvas to get distance in feet/squares

---

## Medium-Term

Larger features that require new backend stories or significant frontend work.

### Multiplayer / Real-Time Collaboration
The v1 architecture has forward-looking hooks for this:
- `userId` (nullable FK) on PlayerCharacter — each player owns their character
- No-op WebSocket endpoint at `GET /v1/ws` — the connection infrastructure is in place
- `role` claim on JWT middleware — RBAC plumbing exists

**What this unlocks:**
- Invite players to a campaign by email; each gets a scoped Cognito account
- Players connect via WebSocket and see live battle map updates (token moves, HP changes, condition toggles)
- DM controls which Areas are visible to players
- PlayerCharacters are owned by the player, not the DM; DM has read-only view

### RBAC (Role-Based Access Control)
- Roles: `owner` (DM), `player`, `spectator`
- `player` can edit their own PlayerCharacter; read campaign entities; cannot modify world structure
- `spectator` is read-only across the board
- Role is stored on the Cognito JWT and parsed by the existing middleware; no auth rewrite needed

### Campaign Sharing & Templates
- **Share a campaign as read-only** — generate a shareable link; recipient can browse but not edit
- **Publish as template** — export a campaign to a community template gallery; others can import it as a starting point
- **Campaign duplication** — server-side clone without going through export/import JSON (faster, no file download)

### Notifications
- In-app notification feed — quest status changes, new session notes, player character updates
- Email digest — weekly summary of session notes and quest updates (SES)

---

## Long-Term

Platform-level bets that require meaningful new infrastructure or product decisions.

### Mobile App
- React Native client sharing logic with the web frontend
- Offline-capable PlayerCharacter sheet — sync on reconnect
- Push notifications for session start, initiative turn alerts

### AI Dungeon Master Assistance
- **Session recap generation** — summarise session notes into a narrative paragraph (Bedrock/Claude)
- **NPC dialogue suggestions** — given a Character's disposition and faction, suggest dialogue options
- **Quest hook generator** — given campaign entities, suggest new quest hooks
- **Encounter difficulty estimator** — given party level and token set, estimate encounter difficulty

### Marketplace
- Community-contributed campaign templates, entity packs, and map backgrounds
- DM-to-DM sharing of Factions, entity libraries, and Location sets as importable bundles
- Monetisation path: free tier + paid premium templates

### Advanced Map Tools
- **Multi-floor areas** — Areas stacked vertically with a floor switcher
- **Dynamic lighting** — token line-of-sight calculations; walls and doors block visibility
- **Weather and ambient overlays** — visual effects layer over the canvas (rain, fog, fire)

### Data & Analytics (DM Tooling)
- Campaign statistics dashboard — session count, entity usage, most-active quests
- Character progression tracking — level history, HP over sessions, condition frequency
- Export to PDF — printable character sheets and session summaries

### Infrastructure Scaling
- **Concurrency control** — ETag / `If-Match` header support on PUT endpoints to prevent lost updates under concurrent edits
- **Soft delete archival** — periodic job moves rows with old `deletedAt` values to an archive table to keep the main tables lean
- **Read replicas** — RDS read replica for analytics and export queries once write load justifies it
- **CDN for entity images** — CloudFront distribution in front of S3 for character portrait and map image delivery
