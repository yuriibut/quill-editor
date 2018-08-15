import * as React from 'react';
import * as style from './toolbar.scss';
import BoldIcon from '../../assets/icons/bold.svg';
import ItalicIcon from '../../assets/icons/italic.svg';
import UnderlineIcon from '../../assets/icons/underline.svg';
import ParagraphIcon from '../../assets/icons/paragraph.svg';
import OrderedListIcon from '../../assets/icons/ordered-list.svg';
import UnorderedListIcon from '../../assets/icons/unordered-list.svg';
import BlockQuoteIcon from '../../assets/icons/block-quote.svg';
import LinkIcon from '../../assets/icons/link.svg';

import ToolbarButton from "../ToolbarButton/ToolbarButton";

export interface ToolbarProps {
    onMounted?: Function;
}

export default class Toolbar extends React.Component<ToolbarProps> {
    handleRef = (toolbarNode) => {
        const {onMounted} = this.props;
        if (onMounted) {
            onMounted(toolbarNode);
        }
    };

    render() {
        return (
            <div className={style.toolbar} ref={this.handleRef}>
                <ToolbarButton className="ql-bold">
                    <BoldIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-italic">
                    <ItalicIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-underline">
                    <UnderlineIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-header">
                    <ParagraphIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-list" value="ordered">
                    <OrderedListIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-list" value="bullet">
                    <UnorderedListIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-blockquote">
                    <BlockQuoteIcon/>
                </ToolbarButton>
                <ToolbarButton className="ql-link">
                    <LinkIcon/>
                </ToolbarButton>
                {/*<ToolbarButton className="ql-image">*/}
                {/*Image*/}
                {/*</ToolbarButton>*/}
                {/*<ToolbarButton className="ql-video">*/}
                {/*Video*/}
                {/*</ToolbarButton>*/}
            </div>
        );
    }
}
