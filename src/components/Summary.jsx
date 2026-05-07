function Summary({ isAnnual, selectedPlan, addons, plans, addonsPrices, setStep}) {

  const billing = isAnnual ? "yearly" : "monthly";

  const planPrice = plans[selectedPlan][billing];

  const addonsTotal = Object.keys(addons)
    .filter((key) => addons[key])
    .reduce((sum, key) => {
      return sum + addonsPrices[key][billing];
    }, 0);

  const total = planPrice + addonsTotal;
    return (
        <>
  <div className="absolute top-25 w-[90%] mx-auto bg-white rounded-lg p-7 md:w-[53%] md:left-[40%] md:top-10">
    <h1 className="text-2xl font-bold mb-3">Finishing up</h1>
    <p className="text-gray-400 mb-5">
      Double-check everything looks OK before confirming.
    </p>

    <div className="bg-gray-100 p-5 rounded-md">
      {/* PLAN */}
      <div className="flex justify-between items-center border-b pb-3">
        <div>
          <p className="font-bold capitalize">
            {selectedPlan} ({isAnnual ? "Yearly" : "Monthly"})
          </p>
          <button onClick={() => setStep(2)} className="text-sm text-gray-400 cursor-pointer underline hover:text-blue-600">
            Change
          </button>
        </div>
        <p className="font-bold">
          ${planPrice}/{isAnnual ? "yr" : "mo"}
        </p>
      </div>

      {/* ADDONS */}
      <div className="mt-3 flex flex-col gap-2">
        {Object.keys(addons).map((key) => {
          if (!addons[key]) return null;

          return (
            <div key={key} className="flex justify-between text-gray-500">
              <p className="capitalize">{key}</p>
              <p>
                +${addonsPrices[key][billing]}/
                {isAnnual ? "yr" : "mo"}
              </p>
            </div>
          );
        })}
      </div>
    </div>

    {/* TOTAL */}
    <div className="flex justify-between mt-5 px-3">
      <p className="text-gray-400">
        Total (per {isAnnual ? "year" : "month"})
      </p>
      <p className="text-blue-900 font-bold text-lg">
        ${total}/{isAnnual ? "yr" : "mo"}
      </p>
    </div>
  </div>
  </>
);
}

export default Summary