"use client";

import type { BlogBodyBlock } from "@/data/blogPosts";

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong className="text-white fw-bold d-block mb-1" key={i}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function BlogArticleBody({ body }: { body: BlogBodyBlock[] }) {
  const nodes: React.ReactNode[] = [];
  let i = 0;
  while (i < body.length) {
    const block = body[i];
    if (block.type === "li") {
      const items: string[] = [];
      while (i < body.length && body[i].type === "li") {
        items.push((body[i] as { type: "li"; text: string }).text);
        i++;
      }
      nodes.push(
        <div className="article-phase-list list-unstyled mb-4" key={`list-${i}`}>
          {items.map((text, idx) => {
            const isQA = text.includes("**Q") || text.startsWith("Q") || text.includes("?");
            return (
              <div
                className="spotlight-card ind-anim-card p-3 p-md-4 mb-3 rounded-4 anim-reveal"
                key={idx}
              >
                <div className="d-flex align-items-start gap-3">
                  <i
                    className={`fa-solid ${
                      isQA ? "fa-circle-question text-cyan" : "fa-circle-check text-cyan"
                    } fs-5 mt-1`}
                  />
                  <div className="text-bright-muted mb-0 flex-grow-1">
                    {renderInlineBold(text)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
      continue;
    }
    if (block.type === "h2") {
      nodes.push(
        <h2 className="text-white mt-5 mb-3 fs-3 fw-bold anim-reveal" key={`h2-${i}`}>
          {block.text}
        </h2>
      );
    } else if (block.type === "blockquote") {
      nodes.push(
        <blockquote
          className="article-quote border-start border-3 border-cyan ps-4 my-4 anim-reveal"
          key={`bq-${i}`}
        >
          <p className="text-white fs-5 mb-0 fst-italic leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
    } else {
      nodes.push(
        <p className="text-bright-muted mb-4 fs-6 leading-relaxed anim-reveal" key={`p-${i}`}>
          {renderInlineBold(block.text)}
        </p>
      );
    }
    i++;
  }

  return (
    <section className="article-body-section position-relative pb-5">
      <div className="container position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">{nodes}</div>
        </div>
      </div>
    </section>
  );
}