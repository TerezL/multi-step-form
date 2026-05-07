

function Form ({ formData, setFormData, errors}){
    return(
        <>
       
        <div className="absolute top-25 w-[90%] mx-auto bg-white rounded-lg p-7 md:w-[40%] md:left-[40%] md:top-10">
            <h1 className="text-2xl font-bold mb-3">Personal info</h1>
            <p className="text-gray-400">Please provide your name, email address, and phone number.</p>
            <form className="mt-5 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <label htmlFor="name" >Name</label>{errors.name && (
  <p className="text-red-500 text-sm">{errors.name}</p>
)}</div>
                    <input type="text" 
                    id="name" 
                    placeholder="e.g. Stephen King" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name:e.target.value})}
                    className={`border rounded-md p-2 cursor-pointer hover:border-gray-400 focus:outline-gray-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}/>
                
                </div>
                <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <label htmlFor="email" >Email Address</label>{errors.email && (
  <p className="text-red-500 text-sm">{errors.email}</p>
)}
                    </div>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="e.g. stephen.king@lorem.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email:e.target.value})}
                    className={`border rounded-md p-2 cursor-pointer hover:border-gray-400 focus:outline-gray-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}/>
                
                </div>
                <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <label htmlFor="phone" >Phone Number</label>{errors.phone && (
  <p className="text-red-500 text-sm">{errors.phone}</p>
)}
                    </div>
                    <input type="tel" 
                    id="phone" 
                    placeholder="e.g. 123-456-7890" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone:e.target.value})}
                    className={`border rounded-md p-2 cursor-pointer hover:border-gray-400 focus:outline-gray-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}/>
                
                </div>
            </form>
        </div>
        
        </>
    )
}

export default Form;