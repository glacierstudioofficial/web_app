"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Plus,
  Edit2,
  Copy,
  RefreshCw,
  Sliders,
  ChevronDown,
  Calendar,
  MoreHorizontal,
  Check,
  ArrowUpRight,
  TrendingUp,
  HelpCircle,
  Bell,
  Grid,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "meta" | "google";

/* ─────────────────────────────────────────────────────────────
   GOOGLE ADS CAMPAIGNS DATA
───────────────────────────────────────────────────────────── */
const GOOGLE_CAMPAIGNS = [
  {
    name: "Search_Generic_HighIntent_US_Core",
    status: "Eligible",
    type: "Search",
    budget: "$250.00/day",
    impressions: "342,800",
    clicks: "18,450",
    ctr: "5.38%",
    avgCpc: "$1.82",
    cost: "$33,579.00",
    conversions: "1,420",
    costPerConv: "$23.64",
    convRate: "7.70%",
  },
  {
    name: "PMax_Shopping_BestSellers_Global",
    status: "Eligible",
    type: "Performance Max",
    budget: "$180.00/day",
    impressions: "512,100",
    clicks: "22,140",
    ctr: "4.32%",
    avgCpc: "$1.12",
    cost: "$24,796.80",
    conversions: "1,890",
    costPerConv: "$13.12",
    convRate: "8.54%",
  },
  {
    name: "YouTube_InStream_Brand_Awareness",
    status: "Eligible",
    type: "Video",
    budget: "$75.00/day",
    impressions: "890,400",
    clicks: "12,600",
    ctr: "1.41%",
    avgCpc: "$0.84",
    cost: "$10,584.00",
    conversions: "320",
    costPerConv: "$33.08",
    convRate: "2.54%",
  },
  {
    name: "Remarketing_RLSA_TopPerformers",
    status: "Eligible",
    type: "Search",
    budget: "$60.00/day",
    impressions: "94,200",
    clicks: "8,920",
    ctr: "9.47%",
    avgCpc: "$1.35",
    cost: "$12,042.00",
    conversions: "840",
    costPerConv: "$14.33",
    convRate: "9.42%",
  },
];

/* ─────────────────────────────────────────────────────────────
   META ADS CAMPAIGNS DATA
───────────────────────────────────────────────────────────── */
const META_CAMPAIGNS = [
  {
    id: "m1",
    name: "ASC_US_Advantage+_Shopping_Reels_Video",
    isOn: true,
    delivery: "Active",
    budget: "$300.00/day",
    attribution: "7-day click or 1-day view",
    results: "1,840 Purchases",
    reach: "428,900",
    impressions: "812,400",
    costPerResult: "$14.20",
    amountSpent: "$26,128.00",
    roas: "5.42",
  },
  {
    id: "m2",
    name: "MOFU_Retargeting_WebsiteVisitors_30D",
    isOn: true,
    delivery: "Active",
    budget: "$120.00/day",
    attribution: "7-day click or 1-day view",
    results: "620 Leads",
    reach: "112,400",
    impressions: "245,100",
    costPerResult: "$11.45",
    amountSpent: "$7,099.00",
    roas: "4.85",
  },
  {
    id: "m3",
    name: "TOFU_Broad_Lookalike1%_UGC_Carousels",
    isOn: true,
    delivery: "Active",
    budget: "$150.00/day",
    attribution: "7-day click",
    results: "940 Purchases",
    reach: "680,100",
    impressions: "1,140,000",
    costPerResult: "$18.60",
    amountSpent: "$17,484.00",
    roas: "4.12",
  },
  {
    id: "m4",
    name: "BOFU_Catalog_Dynamic_DPA_AbandonedCart",
    isOn: false,
    delivery: "Off",
    budget: "$80.00/day",
    attribution: "7-day click",
    results: "310 Purchases",
    reach: "45,200",
    impressions: "89,100",
    costPerResult: "$9.80",
    amountSpent: "$3,038.00",
    roas: "6.80",
  },
];

export const AdsDashboardPreview: React.FC = () => {
  const [mode, setMode] = useState<Mode>("google");
  const [metaToggles, setMetaToggles] = useState<Record<string, boolean>>({
    m1: true,
    m2: true,
    m3: true,
    m4: false,
  });

  const toggleMetaCampaign = (id: string) => {
    setMetaToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      {/* ═══ TOP SWITCHER TABS ═══ */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setMode("google")}
          className={cn(
            "flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200 border cursor-pointer",
            mode === "google"
              ? "bg-[#1A73E8] text-white border-[#1A73E8] shadow-lg shadow-blue-500/20 scale-105"
              : "bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20"
          )}
        >
          <Image
            src="/googleadslogo.webp"
            alt="Google Ads"
            width={22}
            height={22}
            className="object-contain"
          />
          <span>Google Ads Manager UI</span>
        </button>

        <button
          onClick={() => setMode("meta")}
          className={cn(
            "flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200 border cursor-pointer",
            mode === "meta"
              ? "bg-[#0866FF] text-white border-[#0866FF] shadow-lg shadow-blue-600/20 scale-105"
              : "bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20"
          )}
        >
          <Image
            src="/metalogo.webp"
            alt="Meta Ads Manager"
            width={22}
            height={22}
            className="object-contain"
          />
          <span>Meta Ads Manager UI</span>
        </button>
      </div>

      {/* ═══ REALISTIC DASHBOARD CONTAINER ═══ */}
      {mode === "google" ? (
        /* ─────────────────────────────────────────────────────────────
           AUTHENTIC GOOGLE ADS MANAGER INTERFACE
        ───────────────────────────────────────────────────────────── */
        <div className="bg-[#1F1F1F] text-slate-100 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden text-xs font-sans">
          
          {/* Google Top Header Bar */}
          <div className="bg-[#2D2D2D] px-4 py-2.5 border-b border-neutral-700 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 font-bold text-sm text-white">
                <Image src="/googleadslogo.webp" alt="Google Ads" width={24} height={24} />
                <span>Google Ads</span>
              </div>
              <span className="text-neutral-500">|</span>
              <div className="flex items-center gap-2 bg-[#1F1F1F] px-3 py-1.5 rounded text-neutral-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Glacier Studio Production (842-194-0021)</span>
                <ChevronDown size={14} className="text-neutral-400" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search size={14} className="absolute left-2.5 top-2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search (G + /)"
                  readOnly
                  className="bg-[#1F1F1F] text-neutral-300 text-xs rounded pl-8 pr-4 py-1.5 border border-neutral-700 w-56 focus:outline-none"
                />
              </div>
              <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
                <RefreshCw size={14} />
              </button>
              <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
                <HelpCircle size={14} />
              </button>
              <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
                <Bell size={14} />
              </button>
              <div className="w-7 h-7 rounded-full bg-blue-600 font-bold text-white flex items-center justify-center text-xs">
                GS
              </div>
            </div>
          </div>

          {/* Sub-Header & Date Range Bar */}
          <div className="bg-[#282828] px-5 py-2.5 border-b border-neutral-700 flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="text-white border-b-2 border-[#1A73E8] pb-1 cursor-pointer">
                Overview
              </span>
              <span className="text-neutral-400 hover:text-white pb-1 cursor-pointer">
                Campaigns
              </span>
              <span className="text-neutral-400 hover:text-white pb-1 cursor-pointer">
                Ad groups
              </span>
              <span className="text-neutral-400 hover:text-white pb-1 cursor-pointer">
                Ads & assets
              </span>
              <span className="text-neutral-400 hover:text-white pb-1 cursor-pointer">
                Audiences
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-[#1F1F1F] border border-neutral-700 px-3 py-1 rounded text-neutral-300 font-medium">
                <Calendar size={13} className="text-neutral-400" />
                <span>Last 30 days (Aug 8 – Sep 7)</span>
                <ChevronDown size={14} className="text-neutral-400" />
              </div>
              <button className="bg-[#1A73E8] text-white px-3 py-1 rounded font-bold text-xs flex items-center gap-1">
                <Plus size={14} />
                <span>New campaign</span>
              </button>
            </div>
          </div>

          {/* Metric Summary Cards */}
          <div className="p-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#2A2A2A] border border-neutral-700 rounded-lg p-4 space-y-1">
              <div className="text-neutral-400 text-[11px] font-semibold">Clicks</div>
              <div className="text-2xl font-bold text-white">62,110</div>
              <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                <ArrowUpRight size={13} />
                <span>+14.2% vs previous period</span>
              </div>
            </div>

            <div className="bg-[#2A2A2A] border border-neutral-700 rounded-lg p-4 space-y-1">
              <div className="text-neutral-400 text-[11px] font-semibold">Impressions</div>
              <div className="text-2xl font-bold text-white">1,839,500</div>
              <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                <ArrowUpRight size={13} />
                <span>+22.8% reach</span>
              </div>
            </div>

            <div className="bg-[#2A2A2A] border border-neutral-700 rounded-lg p-4 space-y-1 border-l-4 border-l-[#1A73E8]">
              <div className="text-neutral-400 text-[11px] font-semibold">Conversions</div>
              <div className="text-2xl font-bold text-[#1A73E8]">4,470</div>
              <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                <ArrowUpRight size={13} />
                <span>+28.5% conversion volume</span>
              </div>
            </div>

            <div className="bg-[#2A2A2A] border border-neutral-700 rounded-lg p-4 space-y-1">
              <div className="text-neutral-400 text-[11px] font-semibold">Cost / Conv. (Avg. CPA)</div>
              <div className="text-2xl font-bold text-emerald-400">$18.12</div>
              <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                <span>-24.1% lower acquisition cost</span>
              </div>
            </div>
          </div>

          {/* Authentic Google Ads Interactive Performance Graph */}
          <div className="px-5 pb-5">
            <div className="bg-[#2A2A2A] border border-neutral-700 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-300">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[#1A73E8]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1A73E8]" />
                    Conversions (4,470)
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    Cost ($81,001.80)
                  </span>
                </div>
                <span className="text-neutral-500">Daily performance curve</span>
              </div>

              {/* Vector SVG Line Chart */}
              <div className="h-28 w-full pt-2">
                <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g_grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1A73E8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1A73E8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Gridlines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="#3D3D3D" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#3D3D3D" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#3D3D3D" strokeDasharray="3 3" />

                  {/* Area fill */}
                  <path
                    d="M 0 80 Q 50 60, 100 40 T 200 35 T 300 25 T 400 15 T 500 10 L 500 100 L 0 100 Z"
                    fill="url(#g_grad)"
                  />
                  {/* Line */}
                  <path
                    d="M 0 80 Q 50 60, 100 40 T 200 35 T 300 25 T 400 15 T 500 10"
                    fill="none"
                    stroke="#1A73E8"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Authentic Google Ads Table */}
          <div className="overflow-x-auto border-t border-neutral-700">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#252525] text-neutral-400 font-semibold border-b border-neutral-700">
                <tr>
                  <th className="p-3 w-8">
                    <input type="checkbox" defaultChecked className="rounded accent-blue-600" />
                  </th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Campaign</th>
                  <th className="p-3">Campaign type</th>
                  <th className="p-3 text-right">Budget</th>
                  <th className="p-3 text-right">Impr.</th>
                  <th className="p-3 text-right">Clicks</th>
                  <th className="p-3 text-right">CTR</th>
                  <th className="p-3 text-right">Avg. CPC</th>
                  <th className="p-3 text-right">Cost</th>
                  <th className="p-3 text-right">Conversions</th>
                  <th className="p-3 text-right">Cost / conv.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-[#1F1F1F]">
                {GOOGLE_CAMPAIGNS.map((c, idx) => (
                  <tr key={idx} className="hover:bg-[#282828] transition-colors">
                    <td className="p-3">
                      <input type="checkbox" defaultChecked className="rounded accent-blue-600" />
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3 font-semibold text-white hover:text-[#1A73E8] cursor-pointer">
                      {c.name}
                    </td>
                    <td className="p-3 text-neutral-400">{c.type}</td>
                    <td className="p-3 text-right font-medium text-neutral-300">{c.budget}</td>
                    <td className="p-3 text-right text-neutral-300">{c.impressions}</td>
                    <td className="p-3 text-right text-neutral-300">{c.clicks}</td>
                    <td className="p-3 text-right text-neutral-300">{c.ctr}</td>
                    <td className="p-3 text-right text-neutral-300">{c.avgCpc}</td>
                    <td className="p-3 text-right font-bold text-white">{c.cost}</td>
                    <td className="p-3 text-right font-bold text-[#1A73E8]">{c.conversions}</td>
                    <td className="p-3 text-right font-bold text-emerald-400">{c.costPerConv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ─────────────────────────────────────────────────────────────
           AUTHENTIC META ADS MANAGER INTERFACE (FACEBOOK ADS MANAGER)
        ───────────────────────────────────────────────────────────── */
        <div className="bg-[#1C1E21] text-slate-100 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden text-xs font-sans">
          
          {/* Meta Top Header Bar */}
          <div className="bg-[#242526] px-5 py-3 border-b border-neutral-700 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/metalogo.webp" alt="Meta Ads Manager" width={26} height={26} />
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white">Meta Ads Manager</span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400 font-medium">Account: Glacier_Studio_AdAccount (ID: 94820148)</span>
                <ChevronDown size={14} className="text-neutral-400" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-bold text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Pixel & CAPI Active
              </span>
              <button className="bg-[#0866FF] text-white px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-blue-600 shadow-sm">
                <Plus size={15} />
                <span>Create Campaign</span>
              </button>
            </div>
          </div>

          {/* Meta Tabs Bar */}
          <div className="bg-[#242526] px-5 py-2.5 border-b border-neutral-700 flex items-center justify-between">
            <div className="flex items-center gap-6 font-bold text-xs">
              <span className="text-[#0866FF] border-b-2 border-[#0866FF] pb-2 cursor-pointer">
                Campaigns (4)
              </span>
              <span className="text-neutral-400 hover:text-white pb-2 cursor-pointer">
                Ad sets (12)
              </span>
              <span className="text-neutral-400 hover:text-white pb-2 cursor-pointer">
                Ads (28)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#1C1E21] border border-neutral-700 px-3 py-1.5 rounded-lg text-neutral-300">
                <Calendar size={13} className="text-neutral-400" />
                <span>Last 30 days</span>
                <ChevronDown size={13} className="text-neutral-400" />
              </div>
              <button className="p-1.5 bg-[#1C1E21] border border-neutral-700 rounded text-neutral-300 hover:bg-neutral-700">
                <Sliders size={14} />
              </button>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="bg-[#18191A] px-5 py-3 border-b border-neutral-700 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button className="bg-[#2E7D32] hover:bg-[#256629] text-white font-bold px-4 py-1.5 rounded flex items-center gap-1.5">
                <Plus size={14} />
                <span>+ Create</span>
              </button>
              <button className="bg-[#3A3B3C] hover:bg-[#4E4F50] text-neutral-200 font-semibold px-3 py-1.5 rounded flex items-center gap-1">
                <Edit2 size={13} />
                <span>Edit</span>
              </button>
              <button className="bg-[#3A3B3C] hover:bg-[#4E4F50] text-neutral-200 font-semibold px-3 py-1.5 rounded flex items-center gap-1">
                <Copy size={13} />
                <span>Duplicate</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="text-neutral-300">Total Spent: <strong className="text-white">$53,749.00</strong></span>
              <span className="text-neutral-300">Total Results: <strong className="text-emerald-400">3,710 Purchases</strong></span>
              <span className="text-neutral-300">Avg ROAS: <strong className="text-emerald-400">5.20x</strong></span>
            </div>
          </div>

          {/* Authentic Meta Ads Manager Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#242526] text-neutral-400 font-semibold border-b border-neutral-700">
                <tr>
                  <th className="p-3.5 w-10">On/Off</th>
                  <th className="p-3.5">Campaign Name</th>
                  <th className="p-3.5">Delivery</th>
                  <th className="p-3.5">Budget</th>
                  <th className="p-3.5">Attribution Setting</th>
                  <th className="p-3.5 text-right">Results</th>
                  <th className="p-3.5 text-right">Reach</th>
                  <th className="p-3.5 text-right">Impressions</th>
                  <th className="p-3.5 text-right">Cost per Result</th>
                  <th className="p-3.5 text-right">Amount Spent</th>
                  <th className="p-3.5 text-right">Purchase ROAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-[#1C1E21]">
                {META_CAMPAIGNS.map((c) => {
                  const active = metaToggles[c.id];
                  return (
                    <tr key={c.id} className="hover:bg-[#242526] transition-colors">
                      {/* Interactive On/Off Switch */}
                      <td className="p-3.5">
                        <button
                          onClick={() => toggleMetaCampaign(c.id)}
                          className={cn(
                            "w-9 h-5 rounded-full p-0.5 transition-colors relative flex items-center cursor-pointer",
                            active ? "bg-emerald-500" : "bg-neutral-600"
                          )}
                        >
                          <div
                            className={cn(
                              "w-4 h-4 rounded-full bg-white transition-transform shadow-md",
                              active ? "translate-x-4" : "translate-x-0"
                            )}
                          />
                        </button>
                      </td>

                      <td className="p-3.5 font-bold text-white hover:text-[#0866FF] cursor-pointer">
                        {c.name}
                      </td>

                      <td className="p-3.5">
                        {active ? (
                          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Active
                          </span>
                        ) : (
                          <span className="text-neutral-500 font-medium">Off</span>
                        )}
                      </td>

                      <td className="p-3.5 font-semibold text-neutral-200">{c.budget}</td>
                      <td className="p-3.5 text-neutral-400 text-[11px]">{c.attribution}</td>
                      <td className="p-3.5 text-right font-black text-[#0866FF]">{c.results}</td>
                      <td className="p-3.5 text-right text-neutral-300">{c.reach}</td>
                      <td className="p-3.5 text-right text-neutral-300">{c.impressions}</td>
                      <td className="p-3.5 text-right font-bold text-emerald-400">{c.costPerResult}</td>
                      <td className="p-3.5 text-right font-bold text-white">{c.amountSpent}</td>
                      <td className="p-3.5 text-right font-black text-emerald-400">{c.roas}x</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
