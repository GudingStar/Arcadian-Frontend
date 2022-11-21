import MintCard from '../../common/mint/mintCard';

const Mint = () => {
    return (
        <div className="pt-10 xl:w-contentWidth lg:w-contentWidth pb-10 mx-auto">
            <div className='flex'>
                <div>
                    <img src='assets/images/market/Arcadian.svg'></img>
                </div>
                <div>
                    <img src='assets/images/market/NFTs.svg' className="-ml-5 mt-3 "></img>
                </div>
            </div>
            <img src="/assets/images/mint/MintBackground.svg" className="mt-2"></img>
            <h1 className="text-center font-orbitron text-gray-400 text-6xl mt-5 font-bold">Mint</h1>
            <div className='grid grid-cols-3 gap-3'>
                <MintCard />
                <MintCard />
                <MintCard />
            </div>
            <div className='grid grid-cols-3 gap-3 mt-2'>
                <MintCard />
                <MintCard />
                <MintCard />
            </div>
        </div> 
    )
}

export default Mint;