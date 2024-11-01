import React from 'react'

const Contactform = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
        <h1 className="text-3xl font-bol mb-6"> contact me</h1>
        <form className="space-y-4" >
            <div>
                <label className='block text-sm font-medium text-black-700>'htmlFor='name'>Name</label>

                <input type='text'

                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounde-md shadow-sm focus:border-indigo-600 focus:ring-indigo-700"
                placeholder="your Name"
                                     >

                </input>
            </div>
            <div>
            <label className="block text-sm font-medium text-black-700"htmlFor='email' >Email</label>
            <input type="email"
            id="email"
            name="email"
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
            placeholder='youremail.com'

            />

            </div>
           <div>
            <label className='block text-sm font-medium text-black-700 ' htmlFor='message'>Message</label>
            <textarea
            id="message"
            name="message"
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-700'
            ></textarea>

           </div>
           <div>
           <button
           type="submit"
           className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
            submit
           </button>
           </div>
            
        </form>
       

    </div>
  );
};

export default Contactform