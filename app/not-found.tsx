import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-header-section position-relative" style={{ minHeight: "70vh" }}>
      <div className="container position-relative z-10 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <p className="page-category-tag d-inline-flex align-items-center gap-2 mb-4">
              <span className="category-dot" />
              <span>404</span>
              <span className="shimmer-line" aria-hidden="true" />
            </p>
            <h1 className="page-header-title text-white mb-4">
              Page not found
            </h1>
            <p className="text-bright-muted mb-5 mx-auto" style={{ maxWidth: 520 }}>
              The page you are looking for does not exist or may have been moved.
              Return home or contact us if you need help.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link
                href="/"
                className="btn btn-consult-red rounded-pill px-4 py-3 fw-semibold magnetic-btn"
              >
                <span className="btn-text">Back to Home</span>
                <span className="btn-sheen" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-sky-blue rounded-pill px-4 py-3 fw-semibold magnetic-btn"
              >
                <span className="btn-text">Contact Us</span>
                <span className="btn-sheen" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
