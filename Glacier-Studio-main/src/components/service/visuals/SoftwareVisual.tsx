import React from "react";
import { Monitor, Smartphone, LayoutDashboard, Shield, CreditCard, Package, Database, Zap, Network } from "lucide-react";
import { Window, Stage, FloatCard } from "./Frame";
import { cn } from "@/lib/utils";

const Box: React.FC<{ icon: React.ElementType; label: string; tone?: "default" | "brand" | "data" }> = ({
  icon: Icon, label, tone = "default",
}) => (
  <div
    className={cn(
      "flex items-center gap-2 rounded-lg border px-2.5 py-2 text-[11.5px] font-semibold sm:px-3 sm:text-[12.5px]",
      tone === "brand" && "border-transparent bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white shadow-[0_8px_20px_-8px_rgba(21,159,229,0.7)]",
      tone === "data" && "border-[#7DD3FC]/30 bg-[#159FE5]/10 text-[#BAE6FD]",
      tone === "default" && "border-white/10 bg-white/[0.04] text-[#E2E8F0]"
    )}
  >
    <Icon size={14} className={tone === "default" ? "text-[#7DD3FC]" : undefined} />
    <span className="truncate">{label}</span>
  </div>
);

const Layer: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="relative">
    <div className="mb-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/30">{label}</div>
    {children}
  </div>
);

/** Vertical animated connector between layers */
const Link: React.FC = () => (
  <svg className="mx-auto my-1.5 block h-6 w-full" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden>
    {[20, 50, 80].map((x) => (
      <line key={x} x1={x} x2={x} y1="0" y2="24" stroke="#159FE5" strokeOpacity="0.6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="dash-flow" />
    ))}
  </svg>
);

const uptime = Array.from({ length: 30 }, (_, i) => (i === 17 ? 0.6 : 1));

export const SoftwareVisual: React.FC = () => (
  <Stage>
    <Window dark title="architecture · production">
      <div className="p-5 sm:p-7">
        <Layer label="Clients">
          <div className="grid grid-cols-3 gap-2">
            <Box icon={Monitor} label="Web app" />
            <Box icon={Smartphone} label="Mobile" />
            <Box icon={LayoutDashboard} label="Admin" />
          </div>
        </Layer>
        <Link />
        <Layer label="Edge">
          <Box icon={Network} label="API Gateway · rate-limit · JWT" tone="brand" />
        </Layer>
        <Link />
        <Layer label="Services">
          <div className="grid grid-cols-3 gap-2">
            <Box icon={Shield} label="Auth" />
            <Box icon={CreditCard} label="Billing" />
            <Box icon={Package} label="Orders" />
          </div>
        </Layer>
        <Link />
        <Layer label="Data">
          <div className="grid grid-cols-2 gap-2">
            <Box icon={Database} label="PostgreSQL" tone="data" />
            <Box icon={Zap} label="Redis cache" tone="data" />
          </div>
        </Layer>
      </div>
    </Window>

    <FloatCard className="-right-2 top-10 w-60 lg:-right-10">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-medium text-[#64748B]">Uptime · 30 days</span>
        <span className="text-[13px] font-bold text-[#0B1220]">99.99%</span>
      </div>
      <div className="mt-3 flex h-7 items-end gap-[3px]">
        {uptime.map((u, i) => (
          <span key={i} className={cn("flex-1 rounded-[2px]", u < 1 ? "bg-[#FBBF24]" : "bg-[#22C55E]")} style={{ height: `${u * 100}%` }} />
        ))}
      </div>
    </FloatCard>

    <FloatCard className="-bottom-6 -left-2 lg:-left-10" delay="1.8s">
      <div className="font-mono text-[11px] text-[#64748B]">p95 latency</div>
      <div className="text-xl font-bold tracking-[-0.03em] text-[#0B1220]">82ms</div>
    </FloatCard>
  </Stage>
);
