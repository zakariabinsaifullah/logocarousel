/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const {
		sliderId,
		images,
		loop,
		speed,
		autoplay,
		reverseAutoplayDirection,
		autoplayDelay,
		pauseOnHover,
		keyboard,
		mousewheel,
		autoHeight,
		slideDirection,
		showNav,
		showPagination,
		deskItemsPerView,
		tabItemsPerView,
		phoneItemsPerView,
		deskSpace,
		tabSpace,
		phoneSpace,
		showCaption,
		captionVisibility,
		captionBg,
		captionColor,
		borderWidth,
		borderColor,
		borderStyle,
		borderRadius,
		logoHoverStyle,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `${showPagination ? 'alcb__active_pagination' : ''}`,
			})}
		>
			<div
				dir={slideDirection}
				className={`alcb__carousel_container swiper`}
				data-desktop={deskItemsPerView}
				data-tablet={tabItemsPerView}
				data-mobile={phoneItemsPerView}
				data-autoplay={autoplay}
				data-autoplayDelay={autoplayDelay}
				data-autoplayDirection={reverseAutoplayDirection}
				data-speed={speed}
				data-loop={loop}
				data-pauseonhover={pauseOnHover}
				data-keyboard={keyboard}
				data-mousewheel={mousewheel}
				data-autoheight={autoHeight}
				data-deskSpace={deskSpace}
				data-tabSpace={tabSpace}
				data-phoneSpace={phoneSpace}
				data-id={sliderId}
				data-pagination={showPagination}
				data-navigation={showNav}
				id={sliderId}
			>
				<div className="swiper-wrapper">
					{images &&
						images.map((logo) => {
							return (
								<div
									className={`swiper-slide alcb__logo-item`}
									style={{
										border: ` ${borderWidth} ${borderStyle} ${borderColor}`,
										borderRadius: `${borderRadius}px`,
									}}
									key={logo.id}
								>
									<div
										className={`alcb__logo-image  alcb__${logoHoverStyle}`}
									>
										<img
											src={logo.url}
											alt={logo.alt}
											id={logo.id}
										/>
									</div>
									{showCaption && (
										<div
											className={`alcb__logo-caption ${captionVisibility}`}
											style={{
												color: captionColor,
												backgroundColor: captionBg,
											}}
										>
											{logo.caption
												? logo.caption
												: __(
														'No Caption Available',
														'awesome-logo-carousel-block'
												  )}
										</div>
									)}
								</div>
							);
						})}
				</div>
			</div>
			{showPagination && (
				<div className="alcb__pag swiper-pagination"></div>
			)}
			{showNav && (
				<div className="navigation">
					<div className={`alcb__prev swiper-button-prev`}></div>
					<div className={`alcb__next swiper-button-next`}></div>
				</div>
			)}
		</div>
	);
}
