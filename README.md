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
| Gemini | CSS Grid layout, HTML structure, JS array logic, Vite and React setup |

Details per stage: see the ai-log/ folder.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 2: data logic
Plain JavaScript, no DOM. `echipamente.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events

## Checklist Stage 1
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [etapa-01.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [mockup/index.html](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/index.html) | open the page |
| S1-R5 | finished card looks different | [mockup/style.css](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/style.css) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [mockup/style.css](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/style.css) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [mockup/style.css](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/style.css) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |

## Checklist Stage 2
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [mockup/index.html](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/index.html) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [mockup/echipamente.js](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/echipamente.js) | read |
| S2-R3 | list, count, search, add, toggle, delete | [mockup/echipamente.js](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/echipamente.js) | console output |
| S2-R4 | add rejects empty name and invalid tag | [mockup/echipamente.js](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/echipamente.js) | last 2 console lines |
| S2-R5 | original array unchanged after add | [mockup/echipamente.js](https://github.com/Fanutzzz04/proiect-tweb/blob/main/mockup/echipamente.js) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md), [etapa-02.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |

## Checklist Stage 3
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/App.jsx) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/App.jsx) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md), [etapa-03.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |

## Stage 4: components
The list is rendered from the data, through two components:
`SynthList` receives the whole array and renders one card per item.
`SynthCard` receives a single item through props and displays it.


## Checklist Stage 4
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/Fanutzzz04/proiect-tweb/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [frontend/src/components/SynthCard.jsx](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/components/SynthCard.jsx) | read |
| S4-R3 | map + key={id}, no console warnings | [frontend/src/components/SynthList.jsx](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/components/SynthList.jsx) | F12, Console |
| S4-R4 | message for empty list | [frontend/src/components/SynthList.jsx](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/components/SynthList.jsx) | set array to [] |
| S4-R5 | state changes the card look | [frontend/src/components/SynthCard.jsx](https://github.com/Fanutzzz04/proiect-tweb/blob/main/frontend/src/components/SynthCard.jsx) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/README.md), [etapa-04.md](https://github.com/Fanutzzz04/proiect-tweb/blob/main/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [Commit history](https://github.com/Fanutzzz04/proiect-tweb/commits/main) | commit history |


## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

### Stage 5 Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | [App.jsx#L18](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.jsx#L18) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L22-L26](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.jsx#L22-L26), [SynthCard.jsx#L3-L9](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/components/SynthCard.jsx#L3-L9) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L28-L30](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.jsx#L28-L30), [SynthCard.jsx#L18-L24](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/components/SynthCard.jsx#L18-L24) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L39](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.jsx#L39) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L22-L30](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.jsx#L22-L30) | read |
| S5-R6 | light / dark toggle: state + data-theme on html | [App.jsx#L32-L37](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.jsx#L32-L37), [App.css#L42-L82](https://github.com/Fanutzzz04/tw-lab/blob/main/frontend/src/App.css#L42-L82) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md](https://github.com/Fanutzzz04/tw-lab/blob/main/README.md), [ai-log/etapa-05.md](https://github.com/Fanutzzz04/tw-lab/blob/main/ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit “Stage 5” pushed | [Commit: Stage 5](https://github.com/Fanutzzz04/tw-lab/commits/main) | commit history |



