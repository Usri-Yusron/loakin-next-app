import React from 'react';

export default function Form({formBody}) {
  return (
    <section className='p-5'>
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8 border rounded-md shadow-md">
      {formBody}
    </div>
  </section>
  );
}
