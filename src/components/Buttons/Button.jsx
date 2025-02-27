import PropTypes from "prop-types";
import "./Button.scss";

function Button({ type, children, ...rest }) {
    return (
        <button {...rest} className={type + "-button"}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    type: "default",
};

export default Button;
