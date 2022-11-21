import React from 'react';
import "@fontsource/space-grotesk";
import Card from "react-animated-3d-card";
import "@fontsource/poppins";

const RecentMintItem = ({
	imageUrl,
	avatar
}) => {
	return (
		<Card
			cursorPointer={false}
        	shineStrength={0.2}
        	className=""
		>
			<div className="h-96 border-1 border-pure-ping rounded-md px-2 card_scale bg-card-back w-full">
				<span className="absolute top-2 right-2 bg-gray-500 rounded-md text-white px-2 py-1">LTD Edition</span>
				<div className="mt-40 shadow-nft h-2"></div>
				<img src="/assets/images/market/Cue.svg" className="-mt-8"/>
				<div className="flex justify-between mt-5">
					<div>
						<h1 className="text-white font-Space-Grotesk text-2xl">Findora Cue</h1>
						<h1 className="text-gray-300 font-poppins text-sm">Mando</h1>
					</div>
					<img src="/assets/images/navbar/user.svg" className="w-9" />
				</div>
				<span className="absolute bottom-2 text-gray-300 text-sm">Not for sale</span>
			</div>
		</Card>
	)
}

export default RecentMintItem;