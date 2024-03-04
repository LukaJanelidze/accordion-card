import Illustration from './../../assets/images/illustration-woman-online-mobile.svg'
import BgPattern from './../../assets/images/bg-pattern-mobile.svg'
import './AccordionPics.css'

const AccordionPics = () => {

    return(
    <div className='accordion-pic-box'>
            <img className='illustration' src={Illustration} alt="illustration" />
            <img className='bgpattern' src={BgPattern} alt="background pattern" />
    </div>
    )

};

export default AccordionPics;