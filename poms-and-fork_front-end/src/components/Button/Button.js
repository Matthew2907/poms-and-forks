import React, { useMemo } from 'react';
import PropTypes from "prop-types";
import { StyledLink, RootButton, SideNavigationButton, FirstRightTopButton, SecondRightTopButton, FirstBottomButton, SecondBottomButton,IngredientButton, SliderAndDescAddRightButton, CameraButton, DescDeleteButton, NextSliderButton, AddImageInput } from './Button.css';

// children to content wewnątrz buttona, ...props to metoda onClick i atrybut to
function Button({ variant, children, ...props }) {
	// propsy text oraz to są opcjonalne więc przyjmuje je w zbiorze ...props, żeby nie dostać błędu, a potem jeśli są to biore je z propsów jeśli nie ma to undefined (CHYBA)
	const { to, text } = props;
	const Component = useMemo(() => {
		switch (variant) {
			case "sideBar":
				return SideNavigationButton;
			case "mainMenu":
				return RootButton;
			case "firstRightTop":
				return FirstRightTopButton;
			case "secondRightTop":
				return SecondRightTopButton;
			case "firstBottom":
				return FirstBottomButton;
			case "secondBottom":
				return SecondBottomButton;
			case "ingredient":
				return IngredientButton;
			case "sliderOrDescAdd":
				return SliderAndDescAddRightButton;
			case "camera":
				return CameraButton;
			case "descDelete":
				return DescDeleteButton;
			case "nextSlider":
				return NextSliderButton;
			case "addImage":
				return AddImageInput;
			default: 
				return RootButton;
		}
	}, [variant]);
	// children to TAG img z obrazkiem SVG przekazanym w miejscu użycia Buttona 
const content = useMemo(() => <Component {...props}>{children}</Component>, [
		props,
		children,
	  ]);
	
	return to ? (
		<StyledLink to={to}>
			{content}
			<p>{text}</p>
		</StyledLink>
	  ) : (
		<React.Fragment>
			{content}
		</React.Fragment>
	  );
}

Button.propTypes = {
	variant: PropTypes.oneOf(["sideBar", "mainMenu", "firstRightTop", "secondRightTop", "firstBottom", "secondBottom", "ingredient", "sliderOrDescAdd", "camera", "descDelete", "nextSlider", "addImage" ]),
  };

export default Button;