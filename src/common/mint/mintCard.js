const MintCard = () => {
  return (
    <div className="relative h-36 bg-gradient-to-b from-pure-pink to-gray-600 py-2 rounded-md">
      <h1 className="font-orbitron text-white text-xl px-2">Country Cues</h1>
      <h1 className="absolute top-2 right-2 font-orbitron text-white text-xs">
        Mint your countries cue
      </h1>
      <img
        src="/assets/images/mint/Australia.svg"
        className="w-full mt-2 px-2"
      ></img>
      <div className="absolute bottom-2 w-full px-2">
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-300 text-sm font-poppins">Mint Price</h1>
            <div className="flex">
              <img
                src="/assets/images/portal/avalancheLogo.svg"
                className="w-5 mr-2"
              ></img>
              <h1 className="text-white text-base font-poppins my-auto">
                0.5 AVAX
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm font-poppins">Mint Price</h1>
            <div className="flex">
              <img
                src="/assets/images/portal/avalancheLogo.svg"
                className="w-5 mr-2"
              ></img>
              <h1 className="text-white text-base font-poppins my-auto">
                0.5 AVAX
              </h1>
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-base text-white mb-0 px-4 py-2 bg-gradient-to-r from-purple to-pink rounded-2xl">Mint</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintCard;
