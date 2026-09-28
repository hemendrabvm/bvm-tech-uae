"use client";

export default function ContactSidebar() {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="sla-guarantee-card spotlight-card contact-anim-elem p-4 anim-reveal">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="sla-icon-badge text-cyan">
            <i className="fa-solid fa-clock-rotate-left" />
          </div>
          <div>
            <span className="sla-mini-label text-cyan">FAST RESPONSE SLA</span>
            <h4 className="sla-title text-white mb-0">
              24-Hour Proposal Guarantee
            </h4>
          </div>
        </div>
        <p className="sla-desc text-bright-muted mb-0">
          Every response is matter for us to be reviewed by our expert team. Receive a clear technical approach, Project scope, and Quotation within 24 hours for your Software development, HRMS, ERP, AI, SaaS, Automation or e-commerce requirements.
        </p>
      </div>

      <div className="direct-channels-card spotlight-card contact-anim-elem p-4 anim-reveal">
        <div className="live-status-row d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-2">
            <span className="live-pulse-dot" />
            <span className="status-text text-white fw-bold">
              Dubai DIFC Active
            </span>
          </div>
          <span className="status-time text-bright-muted small fw-semibold">
            GST (UTC+4)
          </span>
        </div>

        <h4 className="card-subtitle text-white mb-3">
          Direct Contact Channels
        </h4>

        <div className="contact-channel-list d-flex flex-column gap-3">
          <a
            href="mailto:info@bvmtech.ae"
            className="channel-item d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none"
          >
            <div className="channel-icon-circle text-red">
              <i className="fa-solid fa-envelope" />
            </div>
            <div>
              <div className="channel-label text-bright-muted small">
                Email Inquiries
              </div>
              <div className="channel-value text-white fw-semibold">
                info@bvmtech.ae
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/971556506799?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-item d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none highlight-whatsapp"
          >
            <div className="channel-icon-circle text-success">
              <i className="fa-brands fa-whatsapp" />
            </div>
            <div>
              <div className="channel-label text-bright-muted small">
                WhatsApp Quick Chat
              </div>
              <div className="channel-value text-white fw-semibold">
                +971 55 650 6799
              </div>
            </div>
          </a>

          <a
            href="tel:+971556506799"
            className="channel-item d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none"
          >
            <div className="channel-icon-circle text-cyan">
              <i className="fa-solid fa-phone" />
            </div>
            <div>
              <div className="channel-label text-bright-muted small">
                Direct Phone
              </div>
              <div className="channel-value text-white fw-semibold">
                +971 55 650 6799
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="security-note-box spotlight-card contact-anim-elem p-4 anim-reveal">
        <div className="d-flex align-items-start gap-3">
          <i className="fa-solid fa-shield-halved text-cyan fs-4 mt-1" />
          <div>
            <h5 className="text-white mb-1">IP Protection Security</h5>
            <p className="text-bright-muted small mb-0">
              Your business data, processes, source code, and ideas are protected through strict NDA and confidentially practices from the start of every engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}