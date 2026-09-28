"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <section className="page-header-section position-relative" style={{ minHeight: "70vh" }}>
      <div className="container position-relative z-10 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <p className="page-category-tag d-inline-flex align-items-center gap-2 mb-4">
              <span className="category-dot" />
              <span>ERROR</span>
              <span className="shimmer-line" aria-hidden="true" />
            </p>
            <h1 className="page-header-title text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-bright-muted mb-5 mx-auto" style={{ maxWidth: 520 }}>
              An unexpected error occurred. You can try again, or contact us at{" "}
              <a href="mailto:info@bvmtech.ae" className="text-white text-decoration-underline">
                info@bvmtech.ae
              </a>
              .
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <button
                type="button"
                onClick={reset}
                className="btn btn-consult-red rounded-pill px-4 py-3 fw-semibold magnetic-btn"
              >
                <span className="btn-text">Try Again</span>
                <span className="btn-sheen" />
              </button>
              <Link
                href="/"
                className="btn btn-sky-blue rounded-pill px-4 py-3 fw-semibold magnetic-btn"
              >
                <span className="btn-text">Back to Home</span>
                <span className="btn-sheen" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
