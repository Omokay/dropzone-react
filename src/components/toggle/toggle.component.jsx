import './toggler.css';

const Toggler = ({handleClick}) => {

    return (
            <label className="switch">
                <input type="checkbox" onClick={handleClick}/>
                    <span className="slider round"></span>
            </label>
    )
};

export default Toggler;
