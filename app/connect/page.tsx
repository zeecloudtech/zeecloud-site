'use client';

export default function ConnectPage() {

  const downloadVCard = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Zegaye Wubishet',
      'N:Wubishet;Zegaye;;;',
      'ORG:ZeeCloud Technologies',
      'TITLE:Founder & CEO',
      'EMAIL;type=INTERNET;type=WORK:zegaye@zeecloudtech.com',
      'TEL;type=CELL:+16475349285',
      'URL:https://www.zeecloudtech.com',
      'NOTE:Creator of Logicopilot™ — AI-powered operations intelligence for Canadian transportation.',
      'END:VCARD',
    ].join('\n');
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zegaye-wubishet.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-sm flex flex-col gap-0 rounded-2xl overflow-hidden border border-slate-800">

        {/* Dark hero */}
        <div className="bg-slate-900 px-6 pt-8 pb-8 flex flex-col items-center text-center relative">
          <div className="flex items-center gap-2 mb-6 self-start">
            <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
              <line x1="50" y1="12" x2="86" y2="38" stroke="#1a5af5" strokeWidth="1.4" opacity="0.28" strokeLinecap="round"/>
              <line x1="86" y1="38" x2="72" y2="81" stroke="#1a5af5" strokeWidth="1.4" opacity="0.28" strokeLinecap="round"/>
              <line x1="28" y1="81" x2="14" y2="38" stroke="#1a5af5" strokeWidth="1.4" opacity="0.28" strokeLinecap="round"/>
              <line x1="14" y1="38" x2="50" y2="12" stroke="#1a5af5" strokeWidth="1.4" opacity="0.28" strokeLinecap="round"/>
              <line x1="14" y1="38" x2="86" y2="38" stroke="#1a5af5" strokeWidth="4.5" strokeLinecap="round"/>
              <line x1="86" y1="38" x2="28" y2="81" stroke="#1a5af5" strokeWidth="4.5" strokeLinecap="round"/>
              <line x1="28" y1="81" x2="72" y2="81" stroke="#1a5af5" strokeWidth="4.5" strokeLinecap="round"/>
              <circle cx="50" cy="12" r="5" fill="white" opacity="0.85"/>
              <circle cx="86" cy="38" r="6.5" fill="#1a5af5"/>
              <circle cx="72" cy="81" r="6.5" fill="#1a5af5"/>
              <circle cx="28" cy="81" r="6.5" fill="#1a5af5"/>
              <circle cx="14" cy="38" r="6.5" fill="#1a5af5"/>
            </svg>
            <span className="text-xs font-medium text-white opacity-60 tracking-wide">ZeeCloud Technologies</span>
          </div>

          <div className="w-20 h-20 rounded-full bg-sky-600 flex items-center justify-center mb-4 border-2 border-slate-700">
            <span className="text-2xl font-medium text-white">ZW</span>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">Zegaye Wubishet</h1>
          <p className="text-sky-500 text-xs font-medium tracking-widest mb-1">FOUNDER & CEO</p>
          <p className="text-slate-500 text-xs mb-6">Brampton, Ontario, Canada</p>

          <button
            onClick={downloadVCard}
            className="w-full rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-500 transition-colors"
          >
            Save Contact
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-sky-600 opacity-40"/>
        </div>

        {/* Contact rows */}
        <div className="bg-white divide-y divide-slate-100">
          <a href="mailto:zegaye@zeecloudtech.com"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a5af5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-sm font-medium text-slate-900">zegaye@zeecloudtech.com</p>
            </div>
          </a>

          <a href="tel:+16475349285"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a5af5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-sm font-medium text-slate-900">647 534 9285</p>
            </div>
          </a>

          <a href="https://www.zeecloudtech.com" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a5af5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">Website</p>
              <p className="text-sm font-medium text-slate-900">zeecloudtech.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/company/zeecloud-technologies" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#1a5af5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">LinkedIn</p>
              <p className="text-sm font-medium text-slate-900">ZeeCloud Technologies</p>
            </div>
          </a>
        </div>

        {/* Logicopilot */}
        <div className="bg-slate-900 px-6 py-5 border-t border-slate-800">
          <p className="text-xs text-sky-500 font-medium tracking-widest uppercase mb-2">Flagship Platform</p>
          <p className="text-base font-semibold text-white mb-1">Creator of Logicopilot™</p>
          <p className="text-xs text-slate-500 mb-3 leading-relaxed">
            AI-powered operations intelligence for Canadian transportation carriers.
          </p>
          <a href="https://www.zeecloudtech.com/platform"
            className="text-xs text-sky-500 font-medium hover:text-sky-400 transition-colors">
            Learn more →
          </a>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 py-4 text-center border-t border-slate-800">
          <p className="text-xs text-slate-600">© 2026 ZeeCloud Technologies Inc.</p>
        </div>

      </div>
    </div>
  );
}