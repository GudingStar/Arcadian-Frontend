const Music = () => {
    return (
        <div className="mx-auto xl:w-full lg:w-full md:w-full sm:w-7/12 w-full">
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Your name..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Your Email</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Email..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Subject</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Enter Subject..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Anist Title</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Enter name..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Website</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Enter Website URL..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Spotify Link</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Enter Link..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">SoundCloud Link</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Enter Link..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Other Link</h1>
      <input
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md"
        placeholder="Enter Link..."
      ></input>
      <h1 className="text-sm font-normal text-gray-300 mt-2">Message</h1>
      <textarea
        className="py-2 pl-2 text-gray-300 bg-back-grey w-full border border-gray-400 rounded-md h-40"
        placeholder="Write your message..."
      />
      <button
        className="w-52 font-bold bg-black-600 duration-300 hover:bg-purple-500 py-2 active:bg-purple-900 border-2 
        rounded-md border-purple-900 text-base text-gray-300"
      >
        SEND
      </button>
    </div>
    )
}

export default Music;