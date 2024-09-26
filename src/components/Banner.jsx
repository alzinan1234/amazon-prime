import bgImage from "../../src/components/image/MLP_ROW_Muti-title_Mag1._CB1564087979_.jpg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen   "
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className=" text-white bg-opacity-70 p-8 rounded-lg t max-w-lg flex flex-col gap-6 justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Prime Video</h1>
        <p className="text-lg mb-6 font-bold">
          Enjoy exclusive Amazon Originals as well as popular movies and TV
          shows. Join Prime Video now for USD 5.99 per month. Cancel anytime.
        </p>
        <div className=" flex flex-col gap-10">
          <button className="bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-700">
            Start your free trial
          </button>
          <button className="border bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-600 hover:text-white">
            Learn More
          </button>
        </div>
        <p className="text-sm">Membership renews at USD 5.99/month.</p>
      </div>
    </div>
  );
};

export default Banner;
