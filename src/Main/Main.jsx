import { useContext } from "react";
import { Context } from "../context/Context";
import { 
    MdFingerprint, 
    MdAndroid, 
    MdLightbulbOutline, 
    MdOutlineMessage, 
    MdOutlineCode,
    MdWifiTethering,
    MdOutlinePlayCircleFilled,
} from "react-icons/md";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    return(
        <div className="">
            <div className="">
                <div className="">
                    <p className="">NeuraNET</p>
                    <p className="">Gemini API</p>
                </div>
                <MdFingerprint className="" />
            </div>

            <div className="">
                {!showResult
                    ? <>
                        <div className="">
                            <p><span>Hello, My friends</span></p>
                            <p>How can I help you?</p>
                        </div>

                        <div className="">
                            <div className="">
                                <p>Best chat for your problems and tips.</p>
                                <MdAndroid />
                            </div>

                            <div>
                                <p>Rise quickly in your business and school life with creative ideas.</p>
                                <MdLightbulbOutline />
                            </div>

                            <div>
                                <p>Virtual friend to share your daily life and problems with.</p>
                                <MdOutlineMessage />
                            </div>

                            <div>
                                <p>Developer friendly with advanced SEO, debugging and algorithms.</p>
                                <MdOutlineCode />
                            </div>
                        </div>
                    </>
                    :
                    <div className="">
                        <div className="">
                            <MdAndroid />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="">
                            <MdWifiTethering />
                            {loading
                            ? <div className="">
                                <br />
                                <br />
                                <br />
                            </div> : 
                            <p dangerouslySetInnerHTML={{__html:resultData}}>

                            </p>}
                        </div>
                    </div>
                }

                <div className="">
                    <div className="">
                        <input 
                            type="text" 
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder="Tell me what you want"    
                        />
                        <div>
                            <MdOutlinePlayCircleFilled onClick={() => onSent()}/>
                        </div>
                    </div>

                    <p className="">
                        It is just a private project and does not constitute any purpose. Contact for questions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;