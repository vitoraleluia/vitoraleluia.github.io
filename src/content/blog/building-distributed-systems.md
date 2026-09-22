---
title: "Pragmatic Lessons in Distributed Systems & Reliability"
description: "Observations and trade-offs learned while designing resilient backend services and dealing with edge networking."
pubDate: 2026-09-02
tags: ["systems", "architecture", "distributed-systems"]
---

When building distributed services, the fallacies of distributed computing remain ever-present: the network is never reliable, latency is never zero, and bandwidth is never infinite.

In this post, I want to outline three foundational lessons that have repeatedly proven valuable when architecting systems that must withstand failure gracefully.

## 1. Design for Partial Degradation

A common failure mode in modern microservices is cascading failures. If service A calls service B synchronously, and service B begins timing out, thread pools or connection pools on service A quickly become exhausted.

```rust
// Implementing circuit breaking and exponential backoff
pub async fn call_with_retry<T, F, Fut>(mut operation: F, max_retries: u32) -> Result<T, SystemError>
where
    F: FnMut() -> Fut,
    Fut: std::future::Future<Output = Result<T, SystemError>>,
{
    let mut attempt = 0;
    let mut delay = std::time::Duration::from_millis(50);

    loop {
        match operation().await {
            Ok(val) => return Ok(val),
            Err(e) if attempt >= max_retries => return Err(e),
            Err(_) => {
                attempt += 1;
                tokio::time::sleep(delay).await;
                delay *= 2;
            }
        }
    }
}
```

Instead of allowing an outage in one subsystem to take down the entire application, every remote call should adhere to three non-negotiable rules:
- **Strict, bounded timeouts:** Never rely on defaults. Default HTTP timeouts are often infinite or measured in minutes.
- **Circuit breaking:** Stop hammering a failing downstream dependency.
- **Graceful degradation:** Provide a cached response, a stale fallback, or an informative degraded UI rather than an uncaught 500 error.

## 2. Idempotency at Every Layer

Networks duplicate packets, proxies retry requests, and message brokers deliver messages at-least-once. If your mutation APIs cannot safely receive the same request twice, you are guaranteed to corrupt data eventually.

Introducing an `Idempotency-Key` header on all modifying requests ensures that even if a network timeout causes the client to resend, the operation is executed exactly once.

## 3. Observability is More Than Raw Metrics

Dashboards with hundreds of graphs often obscure reality rather than illuminate it. What matters during an incident is:
1. High-cardinality distributed tracing (where is time being spent?)
2. Structured logs with correlation IDs.
3. SLO-based alerts tied directly to user experience (e.g. error rate percentage and P99 latency thresholds).

Investing in thoughtful observability early transforms debugging from speculative guesswork into targeted resolution.
