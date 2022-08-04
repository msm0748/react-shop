import {StyledButton} from "../../styles/Template.style";

export default function Button({children, ...rest}){
	return (
			<StyledButton {...rest}>{children}</StyledButton>
	)
}