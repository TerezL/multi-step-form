
import arcade from "/public/assets/icon-arcade.svg"
import advanced from "/public/assets/icon-advanced.svg"
import pro from "/public/assets/icon-pro.svg"

function Plan({isAnnual, setIsAnnual, selectedPlan, setSelectedPlan, planError, setPlanError}) {
 

  return (
    <>
     <div className="absolute top-25 w-[90%] mx-auto bg-white rounded-lg p-7 md:w-[53%] md:left-[40%] md:top-10">
      <h1 className="text-2xl font-bold mb-3">Select your plan</h1>
            <p className="text-gray-400">You have the option of monthly or yearly billing.</p>
            
            <div className="flex flex-col gap-4 my-5 md:flex-row">
           
  <div>
    <input
      className="sr-only"
      value="arcade"
      name="plan"
      id="arcade"
      type="radio"
      checked={selectedPlan === "arcade"}
      onChange={() => {setSelectedPlan("arcade");
      setPlanError("");}}
    />
    <div
  className={`flex h-18 md:h-35 md:w-33 cursor-pointer flex-col justify-center rounded-md border-2 p-3 transition
  ${
    selectedPlan === "arcade"
      ? "border-blue-900 bg-blue-50"
      : "border-gray-300 bg-gray-50 hover:border-gray-400"
  }`}>
      <label
        className="flex gap-2 cursor-pointer items-center justify-start md:flex-col md:items-start text-md font-bold peer-checked:text-blue-500"
        htmlFor="arcade"
      >
        <img src={arcade} alt="arcade" />
        <div className="flex flex-col">
       <p>Arcade</p>
       <p className="text-gray-400 font-normal">{isAnnual ? "$90/yr" : "$9/mo"}</p>
       <p className="font-normal">{isAnnual ? "2 months free" : ""}</p>
       </div>
      </label>
    </div>
  </div>
  <div>
    <input
      className="sr-only"
      value="advanced"
      name="plan"
      id="advanced"
      type="radio"
      checked={selectedPlan === "advanced"}
      onChange={() => setSelectedPlan("advanced")}
    />
    <div
  className={`flex h-18 md:h-35 md:w-33 cursor-pointer flex-col justify-center rounded-md border-2 p-3 transition
  ${
    selectedPlan === "advanced"
      ? "border-blue-900 bg-blue-50"
      : "border-gray-300 bg-gray-50 hover:border-gray-400"
  }`}>
      <label
        className="flex gap-2 cursor-pointer items-center justify-start md:flex-col md:items-start text-md font-bold peer-checked:text-blue-500"
        htmlFor="advanced"
      >
        <img src={advanced} alt="advanced" />
         <div className="flex flex-col">
       <p>Advanced</p>
       <p className="text-gray-400 font-normal">{isAnnual ? "$120/yr" : "$12/mo"}</p>
       <p className="font-normal">{isAnnual ? "2 months free" : ""}</p>
       </div>
      </label>
    </div>
  </div>

  <div>
    <input
      className="sr-only"
      value="pro"
      name="plan"
      id="pro"
      type="radio"
      checked={selectedPlan === "pro"}
      onChange={() => setSelectedPlan("pro")}
    />
    <div
  className={`flex h-18 md:h-35 md:w-33 cursor-pointer flex-col justify-center rounded-md border-2 p-3 transition
  ${
    selectedPlan === "pro"
      ? "border-blue-900 bg-blue-50"
      : "border-gray-300 bg-gray-50 hover:border-gray-400"
  }`}>
      <label
        className="flex gap-2 cursor-pointer items-center justify-start md:flex-col md:items-start text-md font-bold peer-checked:text-blue-500"
        htmlFor="pro"
      >
        <img src={pro} alt="pro" />
         <div className="flex flex-col">
       <p>Pro</p>
       <p className="text-gray-400 font-normal">{isAnnual ? "$150/yr" : "$15/mo"}</p>
       <p className="font-normal">{isAnnual ? "2 months free" : ""}</p>
       </div>
      </label>
    </div>
  </div>
</div>
 {planError && (<p className="text-red-500 text-sm font-medium">{planError}</p>)}

        <div className="bg-gray-100 w-full flex items-center justify-center space-x-4 p-5 rounded-md">
          <span className={!isAnnual ? "font-bold" : "text-gray-500"}>
            Monthly
          </span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-12 h-6 rounded-full p-1 ${isAnnual ? "bg-blue-900" : "bg-blue-900"}`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${isAnnual ? "translate-x-6" : ""}`}
            />
          </button>

          <span className="text-gray-500">
            Yearly
          </span>
        </div>
      </div>
    </>
  );
}

export default Plan;
