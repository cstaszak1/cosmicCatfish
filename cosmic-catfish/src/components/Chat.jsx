import{ useState, useEffect, useRef} from "react";
import{ useNavigate, useParams } from "react-router-dom";
import allDialogue from "../data/ChatDialogue.json";
import "./Chat.css";

const ALIENS ={
    Alien2: {name: "beepboopba", emoji: "🔥"},
    Alien: {name: "leaploopla", emoji: "👽" },
    Zorp: {name: "zorp", emoji: "❤️"},
};

export default function Chat() {
    const {alienID = "Zorp"} = useParams();
    return <ChatWindow key={alienID} alienID= {alienID} />;
}

{/*sets up chat box between the different aliens*/}
function ChatWindow({alienID}) {
    const navigate = useNavigate();
    const dialogue = allDialogue[alienID];
    const alien = ALIENS[alienID] || {name: alienID, emoji: "👽"};

    const [messages, setMessages] = useState([]);
    const [currentID, setCurrentID] = useState("start");
    const [typing, setTyping] = useState(true);
    const bottomRef = useRef(null);

    const node = dialogue?.[currentID];

{/*alien send message to user*/}
    useEffect(() => {
        if (!node) return;

        setTyping(true);
        const timer = setTimeout(() => {
            setMessages((prev) => [...prev, {from: "alien", text: node.text}]);
            setTyping(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, [currentID]);

    {/*newest chat in view*/}
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    function choose(choice){
        setMessages((prev) => [...prev, {from: "user", text: choice.text}]);
        setCurrentID(choice.next);
    }

    if(!dialogue) {
        return <h1 style={{color: "white"}}>No dialogue found for "{alienID}"</h1>;
    }

    return (
        <main className="chat-page"> 
            <section className="chat-frame">
                <div className="chat-screen">
            <header className="chat-header">
                <div className="avatar">{alien.emoji}</div>
                <span className="contact-name">{alien.name}</span>
            </header>

            <div className="chat-messages">
                {messages.map((msg, i) => (
                    <div key={i} className={`bubble ${msg.from}`}>
                        {msg.text}
                    </div>
                ))}
                {typing && (
                    <div className="bubble alien typing">
                        <span></span><span></span><span></span>
                    </div>
                )}


                {/*convo over*/}
                {!typing && node.ending && (
                    <div className ={'result ${node.ending}'}>
                        {node.ending === "good" ? "Its a match!" : "They unmatched you"}
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            <div className="chat-options">
                {!typing && node.choices && node.choices.map((choice, i) => (
                    <button key={i} className="option-button" onClick={() => choose(choice)}>
                        {choice.text}
                    </button>
                ))}

            {!typing && node.ending === "bad" && (
                <button className="option-button" onClick={() => navigate("/ending")}>
                    Try Again
                </button>
            )}
            {!typing && node.ending === "good" && (
                <button className="option-button" onClick={() => navigate("/next")}>
                    Next
                </button>
            )}
            </div>
        </div>
            </section>
        </main>
    );





}