import "./Button.css";

const Button = (props) => {
	const { label, operation, double, triple, click } = props;

	let classes = "button ";
	classes += operation ? "operation" : "";
	classes += double ? "double" : "";
	classes += triple ? "triple" : "";

	const clicked = () => click && click(label);

	return (
		<button onClick={clicked} className={classes}>
			{label}
		</button>
	);
};

export default Button;
