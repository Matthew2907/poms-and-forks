import React, { useMemo } from 'react';
import PropTypes from "prop-types";
import { Topbar, Bottombar } from './Bar.css';

function Bar({ variant, children, ...props }) {
	// const { text } = props;
	
	const Component = useMemo(() => {
		switch (variant) {
			case "topbar":
				return Topbar;
			case "bottombar":
				return Bottombar;
			default: 
				return Topbar;
		}
	}, [variant]);
	// children to TAG img z obrazkiem SVG przekazanym w miejscu użycia Buttona 
const content = useMemo(() => <Component {...props}>{children}</Component>, [
		props,
		children,
	  ]);
	
	return(
		<React.Fragment>
			{content}
		</React.Fragment>
	  );
}

Bar.propTypes = {
	variant: PropTypes.oneOf(["topbar", "bottombar"]),
  };

export default Bar;