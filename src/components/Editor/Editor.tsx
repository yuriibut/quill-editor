import * as React from 'react';
import Quill from 'quill/core';
import Toolbar from 'quill/modules/toolbar';
import Header from 'quill/formats/header';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Underline from 'quill/formats/underline';
import List, {ListItem} from 'quill/formats/list';
import BlockQuote from 'quill/formats/blockquote';
import Link from 'quill/formats/link';
import DaTheme from '../../theme/theme';
import '../../theme/theme.scss';

export interface EditorProps {
}

export class Editor extends React.Component<EditorProps, {}> {
    quill: any;
    editor: Element;
    toolbar: Element;

    constructor(props) {
        super(props);
        Quill.register({
            'modules/toolbar': Toolbar,
            'themes/da': DaTheme,
            'formats/header': Header,
            'formats/bold': Bold,
            'formats/italic': Italic,
            'formats/underline': Underline,
            'formats/list': List,
            'formats/list/item': ListItem,
            'formats/blockquote': BlockQuote,
            'formats/link': Link
        });
    }

    componentDidMount() {
        this.quill = new Quill(this.editor, {
            modules: {
                toolbar: this.toolbar
            },
            theme: 'da'
        });
    }

    //
    // handleClick = () => {
    //     const selection = this.quill.getSelection();
    //     if (selection) {
    //         // const currentFormat = this.quill.getFormat();
    //         // let size;
    //         //
    //         // if (!currentFormat.size) {
    //         //     size = 'large';
    //         // } else if (currentFormat.size === 'large') {
    //         //     size = 'huge';
    //         // }
    //         //
    //         // this.quill.formatText(selection.index, selection.length, {size});
    //
    //         const currentFormat = this.quill.getFormat();
    //         let header = currentFormat.header;
    //
    //         // if (header > 2) {
    //         //     header = undefined;
    //         // }
    //
    //         this.quill.formatText(selection.index, selection.length, {header});
    //     }
    // };

    render() {
        return (
            <div>
                <div ref={editor => this.editor = editor}/>

                <div ref={toolbar => this.toolbar = toolbar} style={{marginTop: 30}}>
                    <button className="ql-bold" data-toggle="tooltip" data-placement="bottom" title="Bold"/>
                    <button className="ql-italic"/>
                    <button className="ql-underline"/>
                    <button className="ql-header"/>
                    <button className="ql-list" value="ordered"/>
                    <button className="ql-list" value="bullet"/>
                    <button className="ql-blockquote"/>
                    <button className="ql-link"/>
                </div>
            </div>
        );
    }
}
