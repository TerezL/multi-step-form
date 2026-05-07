import thankpic from "/public/assets/icon-thank-you.svg"
function Thankyou(){
    return (
        <>
<div className="absolute top-25 w-[90%] mx-auto bg-white flex flex-col items-center justify-center rounded-lg p-7 md:w-[53%] md:left-[40%] md:top-10">
      <img src={thankpic} alt="Thank you" className="mb-4" />
      <h1 className="text-3xl font-bold mb-3">Thank you!</h1>
            <p className="text-gray-400 text-center">Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </>
    )
}

export default Thankyou