import './RiveLanguage.css';
import Rive from "@rive-app/react-canvas";

const RiveLanguage = () => {
    return (
        <Rive className="rive-language" src="/animations/riveAbout.riv"
            stateMachines='State Machine 1'
            autoplay
        />
    );
}
export default RiveLanguage;