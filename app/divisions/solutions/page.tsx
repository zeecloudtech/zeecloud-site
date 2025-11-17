
// app/divisions/solutions/page.tsx
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            Zegnet Cloud Solutions
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Your Complete IT Department — Secure, Modern, and Built for Growth
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            We provide enterprise-grade IT services for small businesses,
            logistics operations, and public-sector clients. From cloud and
            identity to networking, security, telephony, and managed services —
            Zegnet Cloud gives you stability, security, and simplicity.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-50 hover:border-slate-400 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose section */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Why Choose Zegnet Solutions?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-400">
                15+ Years of Proven IT Experience
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Hands-on expertise across cloud, networking, security, servers,
                devices, and operations. We don’t guess — we deliver solutions
                grounded in real-world enterprise environments.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-400">
                End-to-End Technology Partner
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                One partner for your entire environment. Cloud, identity,
                networks, telephony, endpoints, and support — fully integrated
                and professionally managed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-400">
                Enterprise Reliability &amp; Professionalism
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Your business deserves secure, stable, and predictable
                technology. We build systems that work, day after day, without
                surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            What We Do
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cloud & Microsoft 365 Solutions",
                body: "Migration, deployment, identity, security, and ongoing administration.",
              },
              {
                title: "Networking & Security Infrastructure",
                body: "Firewalls, networks, Wi-Fi, segmentation, VPNs, and office connectivity.",
              },
              {
                title: "VoIP & Unified Communications",
                body: "Cloud phone systems, call routing, IVR, extensions, devices, and setup.",
              },
              {
                title: "Server & Hybrid Infrastructure",
                body: "Active Directory, file/print services, hybrid identity, and on-prem cloud integration.",
              },
              {
                title: "Telematics & Logistics Technology",
                body: "GPS tools, fleet visibility, dispatch workflows, and operational optimization.",
              },
              {
                title: "Managed IT Services & Helpdesk",
                body: "Monitoring, patching, endpoint protection, user support, reporting, and planning.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="text-sm font-semibold text-sky-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 space-y-10">
          {/* Cloud */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-sky-400">
              Cloud & Microsoft 365 Solutions
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Modern, secure, and well-managed cloud environments for your
              team, built around Microsoft 365 and Azure.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>Microsoft 365 tenant deployment and configuration</li>
              <li>Migration from Google Workspace or legacy systems</li>
              <li>
                User identity, MFA, conditional access, and security baseline
              </li>
              <li>
                SharePoint and Teams structure, governance, and permissions
              </li>
              <li>
                Azure Virtual Machines, storage, networking, and hybrid
                integration
              </li>
              <li>Licensing optimization and ongoing administration</li>
            </ul>
          </div>

          {/* Network */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-sky-400">
              Network & Security Infrastructure
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Secure, resilient network foundations that keep your offices and
              remote teams reliably connected.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>Secure network design for offices and multi-site operations</li>
              <li>Firewalls, VPN configuration, and remote access setup</li>
              <li>Network segmentation and policy-based access</li>
              <li>Switches, access points, and full office Wi-Fi coverage</li>
              <li>LAN/WAN optimization and redundancy planning</li>
              <li>
                Coordination with Internet providers across Canada and the US
              </li>
            </ul>
          </div>

          {/* VoIP */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-sky-400">
              VoIP & Unified Communications
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Cloud-based phone systems that are flexible, professional, and
              easy for your team to use.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>Cloud phone system deployment and setup</li>
              <li>Design of auto-attendants and call routing</li>
              <li>Call queues, departments, and extension management</li>
              <li>Softphone and desk-phone provisioning</li>
              <li>Porting existing numbers and optimizing call quality</li>
              <li>Training for staff and administration teams</li>
            </ul>
          </div>

          {/* Server */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-sky-400">
              Server & Hybrid Infrastructure
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Solid on-prem and hybrid foundations for organizations that still
              rely on servers and local infrastructure.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>On-prem Windows Server deployment and maintenance</li>
              <li>Active Directory, Group Policy, and secure identity</li>
              <li>File servers, shared drives, and structured permissions</li>
              <li>Hybrid identity between on-prem AD and Azure</li>
              <li>Backup, retention, and disaster recovery planning</li>
              <li>Performance tuning and lifecycle planning</li>
            </ul>
          </div>

          {/* Telematics */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-sky-400">
              Telematics & Logistics Technology
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Technology that supports fleet operations, dispatch, and
              real-time visibility for logistics-heavy businesses.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>Deployment and management of fleet GPS solutions</li>
              <li>Driver and asset visibility for real-time operations</li>
              <li>Workflow optimization for dispatch and fleet teams</li>
              <li>
                Support for transportation management and routing tools
              </li>
              <li>Camera, tracking, and compliance-enabled solutions</li>
              <li>
                Integrations between telematics platforms and business systems
              </li>
            </ul>
          </div>

          {/* Managed services overview */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-sky-400">
              Managed IT Services (MSP)
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Ongoing support, monitoring, and security that feels like having
              a full internal IT department — without the overhead.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>Unlimited remote support for employees</li>
              <li>Endpoint protection and advanced antivirus</li>
              <li>Automatic patching and vulnerability reduction</li>
              <li>24/7 monitoring of servers, networks, and key systems</li>
              <li>IT asset and licensing documentation</li>
              <li>Monthly reporting and continuous optimization</li>
              <li>Vendor coordination for non-IT systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Managed tiers */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Managed IT Services — Flexible Plans for Every Business
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Choose the level of coverage that fits your organization today,
            knowing you can scale as your team and systems grow.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Tier 1 */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-sm font-semibold text-sky-400">
                Tier 1: Foundation
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                Essential Security &amp; Stability
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Designed for small businesses needing reliable support,
                protection, and stability.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Endpoint security and next-gen antivirus</li>
                <li>Automated patch management and updates</li>
                <li>24/7 monitoring for servers and key systems</li>
                <li>Basic remote helpdesk for daily issues</li>
                <li>Inventory and licensing tracking</li>
                <li>Email and identity support</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-50 hover:border-slate-400 hover:bg-slate-900/80"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="relative flex flex-col rounded-2xl border border-sky-500/70 bg-slate-900/80 p-6 shadow-lg shadow-sky-500/20">
              <span className="absolute right-4 top-4 rounded-full bg-sky-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-950">
                Recommended
              </span>
              <h3 className="text-sm font-semibold text-sky-300">
                Tier 2: Growth
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                Full Administrative Support
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Ideal for organizations that rely heavily on cloud systems and
                need continuous support for every employee.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>All Foundation features</li>
                <li>Unlimited remote support for all staff</li>
                <li>
                  Full Microsoft 365 administration (users, mailboxes, Teams,
                  SharePoint)
                </li>
                <li>Network device monitoring for performance and uptime</li>
                <li>Monthly security and operational reporting</li>
                <li>
                  Vendor coordination (internet, printers, software providers)
                </li>
                <li>
                  Standard onboarding/offboarding process for new hires and
                  leavers
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col rounded-2xl border border-emerald-500/70 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold text-emerald-300">
                Tier 3: Enterprise
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                Security, Compliance &amp; Mission-Critical Operations
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Built for larger organizations, logistics operations, and
                public-sector clients with compliance, security, and uptime
                requirements.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>All Growth features</li>
                <li>
                  <strong className="font-semibold">
                    24/7 emergency support
                  </strong>{" "}
                  for outages and security events
                </li>
                <li>
                  <strong className="font-semibold">
                    Advanced security management
                  </strong>{" "}
                  including MFA enforcement, hardening, identity governance, and
                  risk monitoring
                </li>
                <li>
                  <strong className="font-semibold">
                    Firewall and network security configuration
                  </strong>{" "}
                  with policy-based segmentation and secure remote access
                </li>
                <li>
                  <strong className="font-semibold">
                    Advanced cloud management
                  </strong>{" "}
                  for hybrid infrastructure, virtual machines, and cloud
                  networks
                </li>
                <li>
                  <strong className="font-semibold">
                    Compliance-ready documentation
                  </strong>{" "}
                  including SOPs, standards, and architecture diagrams
                </li>
                <li>
                  <strong className="font-semibold">
                    Strategic IT consulting and quarterly reviews
                  </strong>{" "}
                  for risk, budgeting, and long-term planning
                </li>
                <li>
                  Priority support for operations and logistics workflows
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-400 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300 hover:bg-emerald-500/10"
                >
                  Contact for Enterprise Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Government-Ready IT Services
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-300">
                ZeeCloud Solutions provides secure, documented, and
                compliance-aligned IT services for municipal organizations,
                education, healthcare, and other public-sector environments.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Security-first design with strong identity protection</li>
                <li>
                  Documentation, diagrams, and configuration standards for
                  audits
                </li>
                <li>IT policies, onboarding workflows, and SOPs</li>
                <li>
                  Cloud and identity configuration aligned to best practices
                </li>
                <li>Reliable support with guaranteed response times</li>
                <li>
                  Vendor coordination across multiple agencies and service
                  providers
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-50 hover:border-slate-400 hover:bg-slate-900/80"
                >
                  Government Services Overview
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Designed for public sector
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  Security, continuity, and accountability are baked into every
                  engagement. From identity and access control to network
                  segmentation and policy-driven operations, ZeeCloud helps you
                  maintain trust with the people you serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zegnet Cloud & CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Why Zegnet Cloud Solutions?
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-400">
                Real-World Expertise
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Over 15 years of hands-on experience delivering practical,
                efficient, and secure IT systems across all layers of
                technology.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-400">
                Single Point of Ownership
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                One partner for your entire environment — no finger-pointing
                between providers. We manage everything end-to-end.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-400">
                Security &amp; Growth Built-In
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Our solutions are designed to be secure, compliant, and
                scalable for growing teams and demanding operations.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center sm:p-8">
            <h2 className="text-lg font-semibold sm:text-xl">
              Ready to Modernize Your IT?
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Let’s talk about your goals and design a solution that gives your
              business stability, security, and room to grow.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-50 hover:border-slate-400 hover:bg-slate-900/70"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
