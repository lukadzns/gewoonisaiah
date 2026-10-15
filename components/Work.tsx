"use client";

import { useState } from "react";
import { projects, categories, imageFor } from "@/lib/content";

// Op desktop wisselen de breedtes af (7+5, 5+7), zodat het grid een ritme krijgt.
const spans = ["wide", "narrow", "narrow", "wide"] as const;

export default function Work() {
  const [filter, setFilter] = useState<string>("Alles");
  const visible = filter === "Alles" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter op soort werk">
        {["Alles", ...categories].map((c) => (
          <button key={c} className="filter" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projecten"} getoond
      </p>
      <ul className="pieces">
        {visible.map((p, i) => {
          const shape = spans[i % 4];
          const [w, h] = shape === "wide" ? [1200, 900] : [900, 1100];
          const media = (
            <span className="piece__media" data-shape={shape}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageFor(p, w, h)} width={w} height={h} alt={p.alt} loading="lazy" decoding="async" />
            </span>
          );
          const caption = (
            <span className="piece__caption">
              <span className="piece__title">{p.title}</span>
              <span className="piece__meta">
                {p.category}
                {p.year ? `, ${p.year}` : ""}
              </span>
            </span>
          );
          return (
            <li className="piece" data-shape={shape} key={p.slug}>
              {p.href ? (
                <a className="piece__link" href={p.href}>
                  {media}
                  {caption}
                </a>
              ) : (
                <div className="piece__link">
                  {media}
                  {caption}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
