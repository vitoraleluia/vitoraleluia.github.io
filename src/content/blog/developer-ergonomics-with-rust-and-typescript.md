---
title: "Developer Ergonomics: Blending TypeScript with Rust"
description: "How combining type safety and zero-cost abstractions across stacks elevates developer ergonomics and system reliability."
pubDate: 2026-08-18
tags: ["typescript", "rust", "tooling"]
author: "Vitor Aleluia"
---

Writing robust software doesn't have to come at the expense of developer happiness. Over the past several years, the software engineering landscape has seen a significant shift towards expressive, static type systems.

Two technologies in particular stand out in how they enhance engineering velocity while eliminating entire classes of bugs: **TypeScript** on the application layer, and **Rust** on the systems and performance layer.

## The Power of Discriminated Unions

One of the greatest gifts of TypeScript's type system is algebraic data types represented through discriminated unions. Rather than passing nullable fields and hoping callers inspect them, we make invalid states unrepresentable:

```typescript
type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };

function handleApiResponse(response: Result<{ id: string }, Error>) {
  if (response.success) {
    // TypeScript automatically narrows the type here
    console.log("Resource created:", response.data.id);
  } else {
    console.error("Operation failed:", response.error.message);
  }
}
```

This pattern maps directly to Rust's native `Result<T, E>` enum, making mental context switching between the two languages remarkably intuitive.

## Bringing Native Performance to Tooling

In developer tooling, performance is a feature. When test runners, linters, or code generators take minutes, developers lose their flow state. By rewriting critical paths in Rust or leveraging WebAssembly, we can compress feedback loops from minutes to milliseconds.

The future of software tooling is fast, type-safe, and delightful to use.
