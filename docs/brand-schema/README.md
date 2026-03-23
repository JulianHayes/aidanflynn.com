# Brand Schema — Master Prompt Library

All 21 prompts for building Brand Schema from market analysis through launch preparation.

March 2026

## How to Use

1. Find the prompt in the relevant phase file below
2. Open Claude in the Brand Schema project
3. Check the **Settings** table — configure web search on/off as specified
4. Copy the **Context** block, paste into Claude, hit enter
5. Copy the **Prompt** block, paste into Claude, hit enter
6. Save output as `Brand_Schema_[PromptName].docx`

## Complete Sequence

| # | Prompt | Phase | File | Web | Time |
|---|--------|-------|------|-----|------|
| Red | Red Team | Pre-sequence | [00-pre-sequence.md](00-pre-sequence.md#red-team) | OFF | 30m |
| CP | Checkpoint | Pre-sequence | [00-pre-sequence.md](00-pre-sequence.md#checkpoint) | OFF | 60m |
| KC | Kill Criteria | Pre-sequence | [00-pre-sequence.md](00-pre-sequence.md#kill-criteria) | OFF | 60m |
| 1 | Competitive Landscape | A — Market Analysis | [01-phase-a-market-analysis.md](01-phase-a-market-analysis.md#prompt-1-competitive-landscape-and-gap-map) | ON | 60m |
| 2a | Demand Signals | A — Market Analysis | [01-phase-a-market-analysis.md](01-phase-a-market-analysis.md#prompt-2a-demand-signals-budget-migration-collision-zones) | ON | 90m |
| 2b | Regulatory Synthesis | A — Market Analysis | [01-phase-a-market-analysis.md](01-phase-a-market-analysis.md#prompt-2b-audience-shifts-regulatory-drivers-synthesis) | ON | 90m |
| 3a | Market Sizing | A — Market Analysis | [01-phase-a-market-analysis.md](01-phase-a-market-analysis.md#prompt-3a-market-sizes-and-underserved-spend) | ON | 120m |
| 3b | Unit Economics | A — Market Analysis | [01-phase-a-market-analysis.md](01-phase-a-market-analysis.md#prompt-3b-scenarios-switching-drivers-unit-economics) | ON | 120m |
| 4a | Panel: Independent | B — Positioning | [02-phase-b-positioning.md](02-phase-b-positioning.md#prompt-4a-advisory-panel--independent-assessments) | OFF | 90m |
| 4b | Panel: Converged | B — Positioning | [02-phase-b-positioning.md](02-phase-b-positioning.md#prompt-4b-advisory-panel--challenge-round-and-converged-recommendation) | OFF | 90m |
| 4c | Positioning Stress | B — Positioning | [02-phase-b-positioning.md](02-phase-b-positioning.md#prompt-4c-positioning-stress-test-against-competitive-landscape) | OFF | 120m |
| 5 | Service Architecture | C — Service Design | [03-phase-c-service-design.md](03-phase-c-service-design.md#prompt-5-service-architecture-and-delivery-framework) | OFF | 120m |
| 6 | Buyer Simulation | C — Service Design | [03-phase-c-service-design.md](03-phase-c-service-design.md#prompt-6-buyer-simulation-exercise) | OFF | 90m |
| 7a | Messaging: L1-4 | C — Service Design | [03-phase-c-service-design.md](03-phase-c-service-design.md#prompt-7a-messaging-framework--layers-1-to-4) | OFF | 120m |
| 7b | Messaging: L5-7 | C — Service Design | [03-phase-c-service-design.md](03-phase-c-service-design.md#prompt-7b-messaging-framework--layers-5-to-7) | OFF | 120m |
| 8 | Verbal Identity | C — Service Design | [03-phase-c-service-design.md](03-phase-c-service-design.md#prompt-8-verbal-identity-guide) | OFF | 120m |
| 9a | Six Hats Analysis | D — Stress Testing | [04-phase-d-stress-testing.md](04-phase-d-stress-testing.md#prompt-9a-six-hats-analysis) | OFF | 150m |
| 9b | Pre-Mortem | D — Stress Testing | [04-phase-d-stress-testing.md](04-phase-d-stress-testing.md#prompt-9b-pre-mortem-and-consolidated-recommendations) | OFF | 120m |
| 10 | 90-Day Launch | D — Stress Testing | [04-phase-d-stress-testing.md](04-phase-d-stress-testing.md#prompt-10-90-day-launch-plan) | ON | 120m |
| 11 | Content Strategy | D — Stress Testing | [04-phase-d-stress-testing.md](04-phase-d-stress-testing.md#prompt-11-content-strategy-and-thought-leadership) | ON | 150m |
| 12 | Moat Analysis | Next Phase | [05-next-phase.md](05-next-phase.md#prompt-12-moat-analysis-and-defensibility) | OFF | 120m |
| 13 | Value Drivers | Next Phase | [05-next-phase.md](05-next-phase.md#prompt-13-business-value-drivers-and-valuation-levers) | OFF | 120m |
| 14 | Demand Validation | Next Phase | [05-next-phase.md](05-next-phase.md#prompt-14-demand-validation--interview-design) | OFF | 120m |
| 15 | Financial Reality | Next Phase | [05-next-phase.md](05-next-phase.md#prompt-15-financial-reality-stress-test) | OFF | 120m |

**Total sequence time: 4-5 working days**

## Prompt Dependencies

```
Red Team (run first)
  |
  v
Phase A: Market Analysis (run in order)
  1 --> 2a --> 2b --> 3a --> 3b
  |
  v
Checkpoint (run after Prompt 6)
  |
  v
Phase B: Positioning (run in order)
  4a --> 4b --> 4c
  |
  v
Phase C: Service Design and Messaging (run in order)
  5 --> 6 --> 7a --> 7b --> 8
  |
  v
Phase D: Stress Testing and Go-to-Market
  9a --> 9b --> Kill Criteria --> 10 --> 11
  |
  v
Next Phase (run after launch or after Prompt 11)
  12 --> 13 --> 14 --> 15
```

## Conversation Notes

- Prompts within the same phase sometimes share a conversation (check **Conversation** setting)
- When a prompt says "Same conversation as [X]", do not start a new chat
- When a prompt says "New conversation", start fresh within the Brand Schema project
