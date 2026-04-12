# Architecture

This project uses a lightweight feature-sliced design:

- `app`: routes, layouts, metadata, middleware, route handlers
- `shared`: config, UI primitives, i18n, SEO, validation, security helpers
- `entities`: stable business concepts like project, experience, contact message
- `features`: locale switching and contact form submission
- `widgets`: assembled page sections

Routing is locale-prefixed with `/en` and `/ru`.
