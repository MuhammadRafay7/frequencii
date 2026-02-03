import testimonials from "@data/testimonials.json";

const TestimonialsSection = () => {
  

  if (!testimonials) {
    return (
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto mb-20 text-center">
              <span className="inline-flex items-center h-6 mb-6 px-2 text-xs uppercase font-medium text-yellowGreen-700 bg-yellowGreen-200 rounded-full">TESTIMONIALS</span>
              <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold">Used by hundreds of companies and happy users</h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-500">Loading testimonials...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="inline-flex items-center h-6 mb-6 px-2 text-xs uppercase font-medium text-yellowGreen-700 bg-yellowGreen-200 rounded-full">TESTIMONIALS</span>
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold">Used by hundreds of companies and happy users</h1>
          </div>
          <div className="flex flex-wrap -mx-4">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`w-full lg:w-1/3 px-4 ${index < 2 ? 'mb-10 lg:mb-0' : ''}`}>
                <div className="flex flex-col max-w-sm mx-auto lg:max-w-none items-start h-full p-8 border border-gray-100 rounded-xl shadow-4xl">
                  <img className="block h-8 mb-8" src={testimonial.logoSrc} alt="" />
                  <div className="pr-4">
                    <p className="text-lg font-medium mb-20">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <img className="block h-12 w-12 rounded-full" src={testimonial.avatarSrc} alt="" />
                      <div className="pl-4">
                        <span className="block font-semibold">{testimonial.name}</span>
                        <span className="text-sm text-gray-500">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;