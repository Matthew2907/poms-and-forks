const sizeWidth = {
	mobileS: '360px',
	mobileM: '420px',
	mobileL: '640px',
	tablet: '768px',
	laptop: '1024px',
	iPadPro: '1360px',
	laptopL: '1440px',
	desktop: '1920px',
	iphoneX: '800px',
};

export default {
	mobileS: `(min-width: ${sizeWidth.mobileS})`,
	mobileM: `(min-width: ${sizeWidth.mobileM})`,
	mobileL: `(min-width: ${sizeWidth.mobileL})`,
	tablet: `(min-width: ${sizeWidth.tablet})`,
	laptop: `(min-width: ${sizeWidth.laptop})`,
	iPadPro: `(min-width: ${sizeWidth.iPadPro})`,
	laptopL: `(min-width: ${sizeWidth.laptopL})`,
	desktop: `(min-width: ${sizeWidth.desktop})`,
	desktopL: `(min-width: ${sizeWidth.desktop})`,
	iphoneX: `(min-height: ${sizeWidth.iphoneX}) and (orientation: portrait)`,
};
