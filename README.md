# SoundGear
A web application for managing a personal collection and wishlist of musical instruments.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| title | text | required, max 100 chars |
| owned | boolean | toggled from the list, default false |
| category | fixed values | Guitars, Keyboards, Drums |
| brand | relation | Fender, Korg, Roland, Yamaha |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Fender Stratocaster, active, Guitars
2. Korg Minilogue, done, Keyboards
3. Roland TD-02KV, active, Drums

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | CSS Grid layout and README structure, stage 1 |

Details per stage: see the ai-log/ folder.

## How to run
Open index.html in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](link) | read |
| S1-R2 | AI usage section | [README.md](link) | read |
| S1-R3 | AI log for stage 1 | [etapa-01.md] (link) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L12-L60](link) | open the page |
| S1-R5 | finished card looks different | [style.css#L75-L78](link) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L90-L94](link) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L20-L28](link) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit link](link) | commit history |