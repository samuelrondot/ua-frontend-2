// React
import { cloneElement, FC, ReactElement, useEffect, useState } from "react";

type OwnProps = {
	id: string;
	header: ReactElement;
	body: ReactElement;
};

export const FooterAccordion: FC<OwnProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (document === undefined) {
			// as we are in the server side rendering
			return
		}

		const btnIcon = document.querySelector(`#${props.id} .btn-icon`);

		if (isOpen) {
			btnIcon?.classList.add("rotate-180");
		} else {
			btnIcon?.classList.remove("rotate-180");
		}
	}, [isOpen]);


	const _handleNavClick = (event: any) => {
		event.preventDefault();

		setIsOpen(!isOpen);
	};

	const _renderheader = () => {
		return (
			cloneElement(props.header, {
				onClick: (event: any) => _handleNavClick(event),
			})
		);
	};

	const _renderbody = () => {
		return (
			cloneElement(props.body, {
				className: `flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px ${isOpen ? "block" : "hidden"}`
			})
		);
	};

	return (
		<div className="flex flex-col gap-12px phablet:gap-16px bg-background-dark-tertiary phablet:bg-transparent rounded-8px px-20px py-8px phablet:p-0"
			id={props.id}>
			{_renderheader()}
			{_renderbody()}
		</div>
	);
};
