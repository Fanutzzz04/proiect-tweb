# SynthHub
A web application for managing a personal collection and wishlist of synthesizers.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| title | text | required, max 100 chars |
| owned | boolean | toggled from the list, default false |
| synthesis_type | fixed values | Analog, Digital, Modular |
| brand | relation | Korg, Roland, Moog, Behringer |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Korg Minilogue xd, active, Analog
2. Roland JU-06A, done, Digital
3. Behringer Neutron, active, Modular

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
## Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [etapa-01.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L58](https://github.com/Fanutzzz04/proiect-tweb/blob/main/index.html#L10-L58) | open the page |
| S1-R5 | finished card looks different | [style.css#L156-L159](https://github.com/Fanutzzz04/proiect-tweb/blob/main/style.css#L156-L159) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L182-L186](https://github.com/Fanutzzz04/proiect-tweb/blob/main/style.css#L182-L186) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L20-L30](https://github.com/Fanutzzz04/proiect-tweb/blob/main/style.css#L20-L30) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |
