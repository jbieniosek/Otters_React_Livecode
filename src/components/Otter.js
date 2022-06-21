import './Otter.css';
import PropTypes from 'prop-types';

const Otter = (props) => {

    const id = props.id;
    const otterImg = props.img;
    const hearts = props.hearts;
    const likes = props.likes;
    const updateHeartFn = props.updateOtterHeart;
    const updateLikeFn = props.updateOtterLike;

    return (
        <div className="otter">
            <img className="otterImage" src={otterImg} alt="cute otter yay!"/>
            <button onClick={()=> updateHeartFn(id)}>❤️ {hearts}</button>
            <button onClick={()=> updateLikeFn(id)}>like {likes}</button>
        
        </div>
    );
}

export default Otter;