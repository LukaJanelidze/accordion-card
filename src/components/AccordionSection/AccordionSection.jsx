import upArrow from "../../assets/images/UpArrow.png";
import downArrow from "../../assets/images/downArrow.png";
import AccordionPics from "../AccordionPics/AccordionPics";
import "./Accordion.css"


const AccordionSection = (props) => {

    const clickHandler = (id) => {
        if(id === props.chosenSection){
            props.setChosenSection(null);
        } else {
            props.setChosenSection(id);
        }
    };

    return ( 
    <div 
    className="accordion-container" 
    onClick={() => clickHandler(props.id)}
    >
        <div className="title-section">
            <p className="title-text-styles">{props.title}</p>
            {props.chosenSection === props.id ? (
            <img src={upArrow} alt="upArrow" />
            ) : (
            <img src={downArrow} alt="downArrow" />
            )}
            </div>
        {props.chosenSection === props.id ? (
        <p className="sub-text-styles">{props.subText}</p>
        ) : null}
        <hr />
    </div> 
    );
};

export default AccordionSection;