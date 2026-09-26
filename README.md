StockSense — Inventory Management System

A modular IMS that replaces manual registers and Excel sheets with a real-time, centralized stock tracking app — built for the Odoo Hackathon.

What it does
Products — add and track items with SKU, category, unit, and live stock count
Receipts — record incoming stock from suppliers; stock updates instantly
Delivery Orders — record outgoing stock; blocks over-delivery beyond available stock
Internal Transfers — move stock between locations without affecting totals
Stock Adjustments — correct stock after a physical count, with the difference auto-logged
Dashboard — live KPIs, a stock-level chart, low-stock alerts, and a recent activity feed
Stock Ledger — a single audit trail of every movement across the system
What makes it different

Most beginner inventory apps are simple CRUD forms with a number that goes up or down. StockSense is built like a real operations system:

Every transaction is atomic. Stock updates use Firestore's atomic increment() and transactions (runTransaction), so concurrent receipts/deliveries can never silently overwrite each other or oversell stock — a real correctness problem most quick-build inventory apps ignore entirely.
Full audit trail, not just a stock number. Every receipt, delivery, transfer, and adjustment is logged permanently and traceable in the Stock Ledger — so nothing just "changes," everything is explained.
Built to reflect real warehouse operations, not just a database table: internal transfers and physical-count adjustments mirror how actual inventory teams work, not just how a textbook CRUD app does.
Tech Stack

HTML, Bootstrap 5, vanilla JavaScript (ES modules) — Firebase Authentication + Firestore. No build step, no framework overhead.

 How to Run
1.Open this folder in VS Code.
2.Install the Live Server extension.
3.Right-click index.html → Open with Live Server.
4.Sign up with any email/password to get started.

⚠️ Do not open index.html by double-clicking it — browsers block module imports on file:// paths. It must be served via Live Server (or any local server).
