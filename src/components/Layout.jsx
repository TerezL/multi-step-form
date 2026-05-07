import bg from "/public/assets/bg-sidebar-mobile.svg";
import bgdesk from "/public/assets/bg-sidebar-desktop.svg";
import { useState } from "react";
import Form from "./Form";
import Plan from "./Plan";
import Addson from "./Addson";
import Summary from "./Summary";
import Thankyou from "./Thankyou";
function Layout() {
    const [step, setStep] = useState(1)
    const [isAnnual, setIsAnnual] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [addons, setAddons] = useState({online: false, storage: false, profile: false,})

    const plans = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
};

const addonsPrices = {
  online: { monthly: 1, yearly: 10 },
  storage: { monthly: 2, yearly: 20 },
  profile: { monthly: 2, yearly: 20 },
};

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
});

const [errors, setErrors] = useState({});
const [planError, setPlanError] = useState("");

const validateStep1 = () => {
  let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "This field is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
    newErrors.email = "Invalid email";
  }

  if (!formData.phone.trim()) {
  newErrors.phone = "This field is required";
} else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
  newErrors.phone = "Invalid phone number";
}

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleNext = () => {
  if (step === 1) {
    const isValid = validateStep1();

    if (!isValid) return;
  }

  if (step === 2) {
    if (!selectedPlan) {
      setPlanError("Please select a plan");
      return;
    }

    setPlanError("");
  }

  setStep((prev) => prev + 1);
};


const isStep1Valid =
  formData.name &&
  formData.email &&
  formData.phone;


  
  
  return (
    <>
      <div className="w-full bg-gray-200 h-screen flex items-center justify-center md:hidden">
        <img
          src={bg}
          alt="bg"
          className="absolute top-0 left-0 w-full md:hidden"
        />

        <div className="absolute top-8 flex items-center justify-center gap-3 md:flex-col md:left-5">
          <button className={`border border-white rounded-full w-9 h-9 ${step === 1 ? 'bg-blue-200 text-black' : 'text-white'}`}>
            1
          </button>
          <button className={`border border-white rounded-full w-9 h-9 ${step === 2 ? 'bg-blue-200 text-black' : 'text-white'}`}>
            2
          </button>
          <button className={`border border-white rounded-full w-9 h-9 ${step === 3 ? 'bg-blue-200 text-black' : 'text-white'}`}>
            3
          </button>
          <button className={`border border-white rounded-full w-9 h-9 ${step === 4 ? 'bg-blue-200 text-black' : 'text-white'}`}>
            4
          </button>
        </div>

        {step === 1 &&<Form 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
        /> }
        {step === 2 &&(
            <Plan isAnnual={isAnnual}  
            setIsAnnual={setIsAnnual} 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan}
            planError={planError}
            setPlanError={setPlanError}
            /> )}
        {step === 3 &&<Addson isAnnual={isAnnual} addons={addons} setAddons={setAddons} /> }
        {step === 4 &&<Summary 
            isAnnual={isAnnual}
            selectedPlan={selectedPlan}
            addons={addons}
            plans={plans}
            addonsPrices={addonsPrices}
            setStep={setStep}
        /> }
        {step === 5 && <Thankyou />}

{step !== 5 && (
        <div className="absolute bottom-0 w-full bg-white p-4">
          <div className="flex items-center justify-between">
          {step > 1 ? (
            <button onClick={() => setStep((prev) => prev - 1 )} className="text-gray-400">Go back</button>
          ) : (
            <div />

          )}
            {step === 4 ? (
            <button onClick={() => setStep(5)} className="py-3 px-4 rounded-md text-white bg-blue-600">
              Confirm
            </button>
          ) : (<button
  onClick={handleNext}
  
  className={`py-3 px-4 rounded-md text-white ${
    step === 1 && !isStep1Valid
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-900"
  }`}>
  Next step
</button> )}
          </div>
        </div>
        )}
      </div>


{/* Desktop */}


      <div className="w-full h-[100vh] bg-gray-200 hidden md:flex justify-center">
        <div className="relative w-[60%] h-153 bg-white flex items-center justify-start rounded-lg my-10 p-10 ">
          <img
            src={bgdesk}
            alt="bg"
            className="absolute top-5 left-5 hidden md:block "
          />
          <div className="absolute flex flex-col top-10 left-10 gap-8">
            <div className="flex gap-5 items-center">
              <button className={`border border-white rounded-full w-9 h-9 ${step === 1 ? 'bg-blue-200 text-black' : 'text-white'}`}>
                1
              </button>
              <div className="flex flex-col gap-0">
                <p className="uppercase text-gray-300 text-xs">step 1</p>
                <p className="uppercase text-white text-sm font-semibold">
                  your info
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button className={`border border-white rounded-full w-9 h-9 ${step === 2 ? 'bg-blue-200 text-black' : 'text-white'}`}>
                2
              </button>
              <div className="flex flex-col gap-0">
                <p className="uppercase text-gray-300 text-xs">step 2</p>
                <p className="uppercase text-white text-sm font-semibold">
                  select plan
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button className={`border border-white rounded-full w-9 h-9 ${step === 3 ? 'bg-blue-200 text-black' : 'text-white'}`}>
                3
              </button>
              <div className="flex flex-col gap-0">
                <p className="uppercase text-gray-300 text-xs">step 3</p>
                <p className="uppercase text-white text-sm font-semibold">
                  add-ons
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button className={`border border-white rounded-full w-9 h-9 ${step === 4 ? 'bg-blue-200 text-black' : 'text-white'}`}>
                4
              </button>
              <div className="flex flex-col gap-0">
                <p className="uppercase text-gray-300 text-xs">step 4</p>
                <p className="uppercase text-white text-sm font-semibold">
                  summary
                </p>
              </div>
            </div>
          </div>

            
                {step === 1 &&<Form 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
        /> }
        {step === 2 &&(<Plan isAnnual={isAnnual}  
            setIsAnnual={setIsAnnual} 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan}
              planError={planError}
              setPlanError={setPlanError}
            /> )}
        {step === 3 &&<Addson isAnnual={isAnnual} addons={addons} setAddons={setAddons} /> }
        {step === 4 &&<Summary 
            isAnnual={isAnnual}
            selectedPlan={selectedPlan}
            addons={addons}
            plans={plans}
            addonsPrices={addonsPrices}
            setStep={setStep}
        /> }
        {step === 5 && <Thankyou />}
            

            {step !== 5 && (
<div className="absolute bottom-10 right-10 flex w-[60%] items-center justify-between z-5">
            {step > 1 ? (
            <button onClick={() => setStep((prev) => prev - 1 )} className="text-gray-400">Go back</button>
          ) : (
            <div />

          )}

          {step === 4 ? (
            <button onClick={() => setStep(5)} className="py-3 px-4 rounded-md text-white bg-blue-600">
              Confirm
            </button>
          ) : (
            <button
  onClick={handleNext}
  
  className={`py-3 px-4 rounded-md text-white ${
    step === 1 && !isStep1Valid
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-900"
  }`}>
  Next step
</button> )}
          </div>
          )}
        </div>
         
          
       
      </div>
    </>
  );
}

export default Layout;
