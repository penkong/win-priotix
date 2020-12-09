import React from 'react'

const _DropDownItem = () => {
	return (
		<div
			style={{ pointerEvents: 'all' }}
			role="option"
			aria-checked="false"
			aria-selected="true"
			className="selected item"
		>
			<i className="af flag"></i>
			<span className="text">Afghanistan</span>
		</div>
	)
}

export const DropDownItem = _DropDownItem
