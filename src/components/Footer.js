const Footer = ({navbarSelect}) => {
    return (
        <div>
            {((navbarSelect == 'about' || navbarSelect == 'home') && <div className="xl:flex lg:flex block justify-between bg-back-grey py-3">
                <div className="xl:ml-11 lg:ml-11  mt-4">
                    <div className="grid xl:grid-cols-8 lg:grid-cols-8 grid-cols-3 xl:gap-3 lg:gap-2 mt-3">
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Game</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Market</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Mint</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Token</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">News</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Documents</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Contact</h1>
                        <h1 className="text-xs text-white font-bold  2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">Support</h1>
                    </div>
                </div>
                <div className="mt-4 xl:mr-16 lg:mr-16 ">
                    <div className="flex justify-center">
                        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-6 grid-cols-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-x-10">
                            <img src="/assets/images/footer/Instagram.svg" className="mt-2" alt="Instagram"></img>
                            <img src="/assets/images/footer/Facebook.svg" className="mt-2" alt="Instagram"></img>
                            <img src="/assets/images/footer/Twitter.svg" className="mt-2" alt="Twitter"></img>
                            <img src="/assets/images/footer/Reddit.svg" className="mt-2" alt="Reddit"></img>
                            <img src="/assets/images/footer/Telegram.svg" className="mt-2" alt="Telegram"></img>
                            <img src="/assets/images/footer/Discord.svg" className="mt-2" alt="Discord"></img>
                        </div>
                    </div>
                </div>
            </div> )}
            <div className={`${(navbarSelect == 'about' || navbarSelect == 'home') && 'xl:ml-11 lg:ml-11 md:ml-11 '} mt-2 xl:flex lg:flex md:flex block justify-between pb-3`}>
                <div className="xl:flex lg:flex md:flex">
                    <img src="/assets/images/navbar/logo.png" className="w-16 h-16 m-auto " alt="logo"></img>
                    <div className="my-auto">
                        <h1 className="text-xs text-white text-center my-0">© ARCADIAN All rights reserved. </h1>
                    </div>
                </div>
                <div className="flex my-auto sm:justify-center justify-center xl:mt-0 lg:mt-0 md:mt-0 mt-3">
                    <a className="text-white text-xs text-center mr-3">Term & Conditions</a>
                    <a className="text-white text-xs text-center mr-3">Privacy Policy</a>
                    <a className="text-white text-xs text-center mr-3">Cookie use</a>
                </div>
            </div>
        </div>  
    )
}

export default Footer;