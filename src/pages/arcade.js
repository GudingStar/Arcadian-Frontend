import { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const Arcade = ({setNavbarSelect,setMenuSelect}) => {

    const [build, setBuild] = useState(false);
    
    const unityContext= new UnityContext({
        loaderUrl: "build/Build/build.loader.js",
        dataUrl: "build/Build/build.data",
        frameworkUrl: "build/Build/build.framework.js",
        codeUrl: "build/Build/build.wasm"
    });
    useEffect(() => {
        setNavbarSelect("");
        setMenuSelect("arcade");
    },[]);

    const onPlayClick = () => {
        setBuild(true);
        document.getElementById("playButton").style.display="none";
    }

    return (
        <div className="pt-10 xl:w-contentWidth lg:w-contentWidth  mx-auto pb-10">
            <h1 className="text-white font-orbitron text-4xl mt-5">Arcade</h1>
            <h1 className="text-sm text-gray-300">Explore The Arcade and find a variety of traditional and blockchain games from multiple blockchains</h1>

            {
                build ? <Unity
                unityContext={unityContext}
                matchWebGLToCanvasSize={true}
                className="w-full"
            />:
            <></>
            }
            <div id="playButton" className="w-full flex justify-center items-center mt-5">            
            <button
                onClick={onPlayClick}
                className="mx-auto w-1/3 font-bold bg-black-600 duration-300 hover:bg-purple-500 active:bg-purple-900 border-2 
                rounded-full border-purple-900 text-base text-gray-300 h-10"
              >
                Play
              </button>
            </div>
            <h1 className="text-white font-orbitron text-4xl mt-5">Controls</h1>
            <div className="xl:flex lg:flex md:flex ">
                <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full">
                    <h1 className="text-sm text-gray-300">Use your Keyboard and Mouse to navigate the Arcade </h1>
                    <h1 className="text-sm text-white font-orbitron">W<span className="text-xs">-Move Forward</span></h1>
                    <h1 className="text-sm text-white font-orbitron">A<span className="text-xs">-Move Left</span></h1>
                    <h1 className="text-sm text-white font-orbitron">S<span className="text-xs">-Move Back</span></h1>
                    <h1 className="text-sm text-white font-orbitron">D<span className="text-xs">-Move Right</span></h1>
                    <h1 className="text-sm text-white font-orbitron">Shift<span className="text-xs">-Run</span></h1>
                    <h1 className="text-sm text-white font-orbitron">Space<span className="text-xs">-Jump</span></h1>
                    <h1 className="text-sm text-white font-orbitron">Mouse<span className="text-xs">-Camera</span></h1>
                    <h1 className="text-sm text-white font-orbitron">Interact<span className="text-xs">-Left Click / Right Click</span></h1>
                </div>
                <div className="xl:w-7/12 lg:w-7/12 md:w-7/12 w-full">
                    <img src="/assets/images/arcade/keyboard.svg" className="h-full"></img>
                </div>
            </div>
        </div>
    )
}

export default Arcade;