/** @format */

import React, { useEffect } from "react";

const withFormItem = (Wapper: any) => {
	return (props: any) => {
		const { path, setPath } = props;
		useEffect(() => {}, []);
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
