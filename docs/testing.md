# Testing

The test strategy is split by scope:

- `tests/unit`: pure functions and selectors
- `tests/integration`: route helpers, metadata, content loading, API contracts
- `tests/e2e`: browser flows and accessibility smoke tests

Accessibility tests use Playwright with Axe.
