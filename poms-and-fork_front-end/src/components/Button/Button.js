import React, {useMemo} from 'react';

import {
	StyledNavigationLink,
	RootButton,
	SideNavigationButton,
	FirstRightTopButton,
	SecondRightTopButton,
	FirstBottomButton,
	SecondBottomButton,
	IngredientButton,
	SliderAndDescAddRightButton,
	CameraButton,
	DescDeleteButton,
	NextSliderButton,
	AddImageInput,
	BackStepModeButton,
	NextStepModeButton,
	EditUserButton,
	SettingsNavigationButton,
	StyledSearchLink,
	ErrorButton,
	ErrorLink,
	ShoppingIngredientButton,
} from './Button.css';

function Button({variant, children, ...props}, ref) {
	const {to, text} = props;
	const Component = useMemo(() => {
		switch (variant) {
			case 'sideBar':
				return SideNavigationButton;
			case 'mainMenu':
				return RootButton;
			case 'firstRightTop':
				return FirstRightTopButton;
			case 'secondRightTop':
				return SecondRightTopButton;
			case 'firstBottom':
				return FirstBottomButton;
			case 'secondBottom':
				return SecondBottomButton;
			case 'ingredient':
				return IngredientButton;
			case 'shoppingIngredient':
				return ShoppingIngredientButton;
			case 'sliderOrDescAdd':
				return SliderAndDescAddRightButton;
			case 'camera':
				return CameraButton;
			case 'descDelete':
				return DescDeleteButton;
			case 'nextSlider':
				return NextSliderButton;
			case 'addImage':
				return AddImageInput;
			case 'backStepMode':
				return BackStepModeButton;
			case 'nextStepMode':
				return NextStepModeButton;
			case 'editUser':
				return EditUserButton;
			case 'settings':
				return SettingsNavigationButton;
			case 'error':
				return ErrorButton;
			default:
				return RootButton;
		}
	}, [variant]);

	const StyledLink = useMemo(() => {
		switch (variant) {
			case 'secondRightTop':
			case 'secondBottom':
				return StyledSearchLink;
			case 'error':
				return ErrorLink;
			default:
				return StyledNavigationLink;
		}
	}, [variant]);

	const content = useMemo(
		() => (
			<Component ref={ref} {...props}>
				{children}
			</Component>
		),
		[props, children, ref],
	);

	return to ? (
		<StyledLink to={to}>
			{content}
			{text && <p>{text}</p>}
		</StyledLink>
	) : (
		<React.Fragment>{content}</React.Fragment>
	);
}

const forwardedButton = React.forwardRef(Button);

export default forwardedButton;
