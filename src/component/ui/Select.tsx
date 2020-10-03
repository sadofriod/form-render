/** @format */

import React, { ReactNode, useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select as BlSelect, ItemRenderer } from "@blueprintjs/select";

interface Film {
	key: string;
	value: string;
}

/**
 * @param defineValue Render Model
 */
export interface ISelectProps extends BaseComponent {
	items: Film[];
	onChange: any;
	isDisable: boolean;
}

const FilmSelect = BlSelect.ofType<Film>();

export const Select: ReactNode = (props: ISelectProps) => {
	const { items, onChange, label, value, isDisable } = props;
	console.log(items);

	const renderFilm: ItemRenderer<Film> = (film, { modifiers, handleClick }) => {
		if (!modifiers.matchesPredicate) {
			return null;
		}
		return <MenuItem active={modifiers.active} key={film.key.toString()} text={film.value} onClick={handleClick} shouldDismissPopover={false} />;
	};

	const handleOnSelect = (film: Film) => {};

	return (
		<FilmSelect onItemSelect={handleOnSelect} itemRenderer={renderFilm} items={items}>
			<Button icon="film" rightIcon="caret-down" text={value ? value : "(No selection)"} disabled={isDisable} />
		</FilmSelect>
	);
};
