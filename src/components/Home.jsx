import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";

const Home =() =>{
    return(
        <ChatEngine
        height="100vh"
        projectID="ed9f42ab-4f77-49ea-865e-70e2b2175b72"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    );
}

export default Home;