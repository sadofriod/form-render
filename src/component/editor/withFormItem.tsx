import React from "react";

const withFormItem = (Wapper: any) => {
	return (props: any) => {
		const { path, setPath } = props;
		return (
			<div
				onClick={(e: any) => {
					e.stopPropagation();
					setPath && setPath(path);
				}}
			>
				<Wapper {...props} />
			</div>
		);
	};
};

export default withFormItem;
