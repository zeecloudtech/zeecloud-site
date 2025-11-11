export default function Pill({children}:{children: React.ReactNode}){
  return <span className="inline-flex items-center gap-2 text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded-full">{children}</span>;
}