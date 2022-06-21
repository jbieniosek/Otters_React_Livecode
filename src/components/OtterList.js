import './OtterList.css';
import Otter from './Otter.js';
import PropTypes from 'prop-types';

//const OtterList = ({otterData, updateOtterHeart, updateOtterLike}) => {
const OtterList = (props) => {
    const otterData = props.otterData;
    const updateOtterHeart = props.updateOtterHeart;
    const updateOtterLike = props.updateOtterLike;

    const otterComponents = otterData.map((otter) => 
        <Otter key={otter.id} id={otter.id} img={otter.img}
        hearts={otter.hearts} likes={otter.likes} 
        updateOtterHeart={updateOtterHeart} 
        updateOtterLike={updateOtterLike} />);

    return(
        <div className="otterList">
            {otterComponents}
        </div>
    );
}

OtterList.propTypes = {
    otterData:PropTypes.array.isRequired,
    updateOtterHeart:PropTypes.func.isRequired,
    updateOtterLike:PropTypes.func.isRequired
};


export default OtterList;