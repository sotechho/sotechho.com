type SiteBrandProps = {
  compact?: boolean;
};

const SiteBrand = ({ compact = false }: SiteBrandProps) => (
  <div className={`flex items-center ${compact ? "gap-2" : "gap-2.5"}`}>
    <div
      className={`flex items-center justify-center bg-[#111] font-extrabold text-white ${
        compact
          ? "h-6 w-6 rounded-md text-[11px]"
          : "h-7 w-7 rounded-lg text-[13px]"
      }`}
    >
      S
    </div>
    {/* <span
      className={
        compact
          ? "text-sm font-semibold"
          : "text-base font-bold tracking-[-0.3px]"
      }
    >
      Sotechho
    </span> */}
  </div>
);

export default SiteBrand;
