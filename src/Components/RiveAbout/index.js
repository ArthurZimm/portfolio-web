import './RiveAbout.css'
import Rive from "@rive-app/react-canvas";

const AnimatedAboutComponent = () => {
    return (
        <Rive className="rive-about" src="/animations/riveArthur.riv"
            stateMachines='Viky Wijaya Hero fix'
            style={{ width: 500, height: 500 }}
            autoplay
        />
    );
};
export default AnimatedAboutComponent;