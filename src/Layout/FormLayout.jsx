const FormLayout = ({ heading, subHeading, children }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="my-6 w-3/4 rounded-xl border p-10">
        <div className="relative flex justify-center">
          <h1 className="absolute top-[-55px] bg-white text-md text-center md:text-xl font-medium text-blue-600 w-36 md:w-max">
            {heading}
          </h1>
          <h6 className="mt-[-20px] text-gray-400 md:block hidden">{subHeading}</h6>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
