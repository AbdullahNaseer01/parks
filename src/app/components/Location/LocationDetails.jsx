import React from "react";

const LocationDetails = ({
  addresses,
  phoneNumbers,
  emailAddresses,
  children,
}) => {
  return (
    <section className="shadow-md rounded-md text-[#389b87]">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#389b87]" id="contactUs">
            Address information
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Lets Enjoy the Nature Together
          </p>
        </div>
        <div className="mt-8 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold text-[#389b87]">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    {phoneNumbers?.map((phone, index) => (
                      <span key={index} className="block">
                        {phone.phoneNumber}{" "}
                        {phone.extension && `ext: ${phone.extension}`}
                      </span>
                    ))}
                  </p>
                  {emailAddresses?.map((email, index) => (
                    <span key={index} className="block">
                      {email.emailAddress}
                    </span>
                  ))}
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-[#389b87]">
                    Our Address
                  </h3>
                  {addresses?.map((address, index) => (
                    <p key={index} className="mt-1 text-gray-600">
                      {address.line1}, {address.city}, {address.stateCode},{" "}
                      {address.postalCode}
                    </p>
                  ))}
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-[#389b87]">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Sunday : 2pm - 9pm
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden order-none sm:order-first">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
