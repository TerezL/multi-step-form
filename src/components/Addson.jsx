import { useState } from "react"

function Addson ({isAnnual, addons, setAddons}) {
    

    return(
        <>
<div className="absolute top-25 w-[90%] mx-auto bg-white rounded-lg p-7 md:w-[60%] md:left-[35%] md:top-10">
            <h1 className="text-2xl font-bold mb-3">Pick adds-on</h1>
            <p className="text-gray-400">Add-ons help enahnce your gaming experience.</p>
            <legend className="sr-only">Checkboxes</legend>

  <div className="my-5 flex flex-col gap-4">
    <label 
      className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-gray-100 has-[:checked]:border-blue-900 border-2"
      htmlFor="Option1"
    >
    <div className="flex items-center gap-4">
      <div className="flex items-center ">
        
        <input
          id="Option1"
          className="size-4 rounded border-gray-300"
          type="checkbox"
          checked={addons.online}
          onChange={() => setAddons({ ...addons, online: !addons.online})}
        />
      </div>

      <div>
        <p className="font-medium text-gray-900"> Online service</p>

        <p className="mt-1 text-pretty text-sm text-gray-700">
          Access to multiplayer games.
        </p>
      </div>
      </div>
      <div>
         <p className="text-pretty font-medium text-blue-900">{isAnnual ? "+$10/yr" : "+$1/mo"}</p>
      </div>
    </label>

    <label
      className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-gray-100 has-[:checked]:border-blue-900 border-2"
      htmlFor="Option2"
    >
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        
        <input
          id="Option2"
          className="size-4 rounded border-gray-300"
          type="checkbox"
          checked={addons.storage}
          onChange={() => setAddons({ ...addons, storage: !addons.storage})}
        />
      </div>

      <div>
        <p className="font-medium text-gray-900"> Larger storage </p>

        <p className="mt-1 text-pretty text-sm text-gray-700">
          Extra 1TB of cloud save.
        </p>
      </div>
      </div>
      <div>
         <p className="text-pretty font-medium text-blue-900">{isAnnual ? "+$20/yr" : "+$2/mo"}</p>
      </div>
    </label>

    <label
      className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-gray-100 has-[:checked]:border-blue-900 border-2"
      htmlFor="Option3"
    >
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        
        <input
          id="Option3"
          className="size-4 rounded border-gray-300"
          type="checkbox"
          checked={addons.profile}
          onChange={() => setAddons({ ...addons, profile: !addons.profile})}
        />
      </div>

      <div>
        <p className="text-pretty font-medium text-gray-900">
          Customizable profile</p>

        <p className="mt-1 text-pretty text-sm text-gray-700">
          Custom theme on your profile.
        </p>
      </div>
      </div>
      <div>
         <p className="text-pretty font-medium text-blue-900">{isAnnual ? "+$20/yr" : "+$2/mo"}</p>
      </div>
    </label>
  </div>
        </div>
        </>
    )
}

export default Addson