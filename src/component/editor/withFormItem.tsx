/** @format */

import React from "react";
import { setPath } from "../../store/actions/system";
import { connect } from "react-redux";

const mapStateTopProps = (state: EditorStore.Store) => {
	return {
		currentPath: state.system.path,
	};
};

const mapDispatchTopProps = {
	setPath: setPath,
};

const withFormItem = (Wapper: any) => {
	return connect(
		mapStateTopProps,
		mapDispatchTopProps
	)((props: any) => {
		const { path, setPath, currentPath } = props;
		return (
			<div
				onClick={(e: any) => {
					e.stopPropagation();
					setPath && setPath(path);
				}}
				style={{
					padding: "10px",
					backgroundColor: currentPath === path ? `rgba(34,34,34,.25)` : "",
					boxSizing: "border-box",
					border: "1px #222",
					borderStyle: "dashed",
				}}
			>
				<Wapper {...props} />
			</div>
		);
	});
};

export default withFormItem;
