import Card from "react-animated-3d-card";
import "@fontsource/space-grotesk";
import "@fontsource/poppins";

const MintCard = () => {
	return (
			 <Card
				cursorPointer={false}
	       	shineStrength={0.1}
			 >
			 <div>
				<div className="h-96 py-2 px-2 bg-card-back w-full">
					<div className="flex justify-between mt-2">
						<span className="bg-black py-1 px-3 text-white border-1 border-white rounded-md">Lvl 1</span>
						<span className="top-2 right-2 bg-gray-700 rounded-md text-white px-2 py-1">LTD Edition</span>
					</div>
					<h1 className="text-center text-gray-400 text-xl mt-4">Upgradeable<span className="text-red-500 font-bold ml-2">+3</span></h1>
					<div className="mt-16">
						<div className="shadow-nft h-2"></div>
						<img src="/assets/images/market/Cue.svg" className="-mt-8"/>
					</div>
					<div className="flex justify-center">
						<span className="text-sm p-2 rounded-full bg-gradient-to-b from-purple-700 to-gray-300 text-white font-bold border-1 border-white">08</span>
						<span className="font-bold text-white mx-2 text-center flex justify-center">:</span>
						<span className="text-sm p-2 rounded-full bg-gradient-to-b from-purple-700 to-gray-300 text-white font-bold border-1 border-white">08</span>
						<span className="font-bold text-white mx-2 text-center flex justify-center">:</span>
						<span className="text-sm p-2 rounded-full bg-gradient-to-b from-purple-700 to-gray-300 text-white font-bold border-1 border-white">08</span>
					</div>
					<div className="flex justify-between mt-4">
						<div>
							<h1 className="text-white font-Space-Grotesk text-2xl">Cyber Cue</h1>
							<h1 className="text-gray-300 font-poppins text-sm">Mando</h1>
						</div>
						<img src="/assets/images/navbar/user.svg" className="w-9" />
					</div>
					<div className="absolute bottom-2">
						<div>
							<span className="text-gray-300 text-sm">SOLD</span>
							<h1 className="text-sm text-white flex"><img src="/assets/images/portal/avalancheLogo.svg" className="w-5" />2.0AVX</h1>
						</div>
					</div>
					<div className="absolute bottom-2 right-2">
						<div>
							<span className="text-gray-300 text-sm">Ending in</span>
							<h1 className="text-sm text-white flex">12h 14m 16s</h1>
						</div>
					</div>
				</div>
				</div>
			 </Card>
	)
}

export default MintCard;