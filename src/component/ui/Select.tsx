/** @format */

import React, { memo } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select as BSelect, ItemPredicate, ItemRenderer } from "@blueprintjs/select";

interface Props extends BaseComponent { }

const CollapseObject: React.FC<Props> = (props) => {
    const { value, label, onChange, children, items } = props;

    return (
        // MenuItem for item. use @Param text
        <>
            <div>{label}</div>
            <BSelect
                items={items}
                itemRenderer={renderItem}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={(val: MenuItem) => onChange(val.props.text)}
            >
                <Button text={items[0].prop.text} rightIcon="double-caret-vertical"/>
            </BSelect>
        </>
    );
};

const renderItem: ItemRenderer<MenuItem> = (item, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = `${item.props.text}`;
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={item.props.about}
            key={item.props.accessKey}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    );
};

const highlightText = (text: string, query: string) => {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map((text: string) => text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens: React.ReactNode[] = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

export default memo(CollapseObject);
