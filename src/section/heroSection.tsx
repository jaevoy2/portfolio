import TrueFocus from "../components/textFocus"
import SplitText from "../components/splitText";
import '../css/App.css'

function HeroSection() {
    return (
        <div className="topbodyCon">
          <div className="headerName">
            <SplitText
              text="Jae Voy Seloterio"
              duration={5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

      
          <TrueFocus 
            sentence="Full Stack Developer, Mobile App Developer"
            manualMode={false}
            blurAmount={5}
            borderColor="#37BC7D"
            animationDuration={0.5}
            pauseBetweenAnimations={2}
          />
        </div>
    )
}

export default HeroSection;