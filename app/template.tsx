import type { ReactNode } from "react";

/**
 * Route shell — a fresh template instance is created on every navigation, so the
 * `.page-enter` animation replays and content transitions in like a native app.
 *
 * The animation itself lives in globals.css but ONLY inside the ≤767px media
 * query, so desktop navigation stays instant and byte-identical. No exit
 * animation is used on purpose: navigation is never delayed and scroll
 * restoration / partial prerendering keep working normally.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
