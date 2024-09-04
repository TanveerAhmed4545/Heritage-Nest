import { useState } from "react";

const HomeLoan = () => {
  const [loanValue, setLoanValue] = useState(0);

  const handleRangeChange = (event) => {
    setLoanValue(event.target.value);
  };
  return (
    <div className="flex flex-col gap-5 md:flex-row items-center w-full md:w-11/12 bg-[#ECF5FF] p-6 rounded-lg">
      <div className="w-full md:w-2/5">
        <h3 className="text-[#010101] font-semibold text-2xl md:text-3xl pb-1">
          Need a Home Loan?
        </h3>
        <p className="text-[#535353] text-base">
          Select How much Home loan you can take
        </p>
      </div>
      <div className="w-full md:w-3/5">
        <input
          type="range"
          min={20}
          max={60}
          value={loanValue}
          onChange={handleRangeChange}
          className="w-full accent-[#0051A1] h-[11px] appearance-none cursor-pointer rounded-[10px] bg-[#8AB3DB]"
          step="10"
        />
        <div className="flex w-full justify-between px-2 text-[#535353] text-xs">
          <span className="font-medium text-[#535353]">$20K</span>
          <span className="font-medium text-[#535353]">$30K</span>
          <span className="font-medium text-[#535353]">$40K</span>
          <span className="font-medium text-[#535353]">$50K</span>
          <span className="font-medium text-[#535353]">$60K</span>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
