import "./Select.scss";

export default function Select(props) {
	return (
		<div className="input__wrapper">
			<input
				className={`input ${props?.className ? props?.className : ""}${
					props.error && "error-input"
				}`}
				{...props}
				autoComplete="off"
			/>
		</div>
	);
}