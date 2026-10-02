import React from "react";
import Image from "next/image";
import { Layers } from "lucide-react";
import { Window, Stage, FloatCard, LiveDot } from "./Frame";

/** Hero collage of real project screenshots for the Work page. */
export const WorkVisual: React.FC<{ projectCount: number }> = ({ projectCount }) => (
  <Stage>
    {/* Back window, offset for depth */}
    <div className="absolute right-0 top-0 hidden w-[62%] translate-x-2 -translate-y-2 rotate-[3deg] opacity-90 sm:block lg:translate-x-6">
      <Window title="lms-portal">
        <div className="relative aspect-[16/10]">
          <Image src="/work/lms-portal.png" alt="" fill sizes="400px" className="object-cover object-top" />
        </div>
      </Window>
    </div>

    <div className="relative sm:mr-[18%] sm:mt-14">
      <Window title="daluxe.store" right={<span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#15803D]"><LiveDot className="h-1.5 w-1.5" />Live</span>}>
        <div className="relative aspect-[16/10]">
          <Image
            src="/work/daluxe-store.png"
            alt="DALUXE skincare store built by Glacier Studio"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </Window>
    </div>

    <FloatCard className="-bottom-8 right-0 w-56 lg:-right-2">
      <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-[#EEF2F6]">
        <Image src="/work/nuve-trades.png" alt="" fill sizes="224px" className="object-cover object-top" />
      </div>
      <div className="text-[12.5px] font-semibold text-[#0B1220]">Nuve Trades</div>
      <div className="text-[11px] text-[#64748B]">Trading education platform</div>
    </FloatCard>

    <FloatCard className="-left-2 top-6 lg:-left-8" delay="1.6s">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#159FE5] to-[#0867A5] text-white">
          <Layers size={15} />
        </span>
        <div>
          <div className="text-[12.5px] font-semibold text-[#0B1220]">{projectCount} projects showcased</div>
          <div className="text-[11px] text-[#64748B]">Stores · LMS · AI bots · software</div>
        </div>
      </div>
    </FloatCard>
  </Stage>
);
