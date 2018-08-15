import * as React from 'react';
import * as style from './toolbar-button.scss';
import classNames from 'classnames';

export interface ToolbarButtonProps {
    className?: string;
    value?: string;
}

export default class ToolbarButton extends React.Component<ToolbarButtonProps> {
    render() {
        const {className, value} = this.props;

        return (
            <button className={classNames(style.button, className)} value={value}>
                {this.props.children}
            </button>
        );
    }
}
