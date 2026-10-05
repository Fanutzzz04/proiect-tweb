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
| Gemini | CSS Grid layout, HTML structure, and JS array logic |

Details per stage: see the ai-log/ folder.

## How to run
Open index.html in a browser. No build step, no server. Check F12 Console for Stage 2 logs.

## Stage 2: data logic
Plain JavaScript, no DOM. `echipamente.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Checklist Stage 1
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [etapa-01.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L11-L97](https://github.com/Fanutzzz04/proiect-tweb/blob/main/index.html#L11-L97) | open the page |
| S1-R5 | finished card looks different | [style.css#L249-L256](https://github.com/Fanutzzz04/proiect-tweb/blob/main/style.css#L249-L256) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L264-L268](https://github.com/Fanutzzz04/proiect-tweb/blob/main/style.css#L264-L268) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L42-L66](https://github.com/Fanutzzz04/proiect-tweb/blob/main/style.css#L42-L66) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |

## Checklist Stage 2
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html#L106](https://github.com/Fanutzzz04/proiect-tweb/blob/main/index.html#L106) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [echipamente.js#L1-L7](https://github.com/Fanutzzz04/proiect-tweb/blob/main/echipamente.js#L1-L7) | read |
| S2-R3 | list, count, search, add, toggle, delete | [echipamente.js#L10-L64](https://github.com/Fanutzzz04/proiect-tweb/blob/main/echipamente.js#L10-L64) | console output |
| S2-R4 | add rejects empty name and invalid tag | [echipamente.js#L30-L38](https://github.com/Fanutzzz04/proiect-tweb/blob/main/echipamente.js#L30-L38) | last 2 console lines |
| S2-R5 | original array unchanged after add | [echipamente.js#L73](https://github.com/Fanutzzz04/proiect-tweb/blob/main/echipamente.js#L73) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md), [etapa-02.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |