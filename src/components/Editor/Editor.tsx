import * as React from 'react';
import Quill from 'quill/core';
// import Emitter from 'quill/core/emitter';
import Toolbar from 'quill/modules/toolbar';
import Header from 'quill/formats/header';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Underline from 'quill/formats/underline';
import List, {ListItem} from 'quill/formats/list';
import BlockQuote from 'quill/formats/blockquote';
import Link from 'quill/formats/link';
import Tooltip from 'quill/ui/tooltip';
import SnowTheme from 'quill/themes/snow';
import Image from 'quill/formats/image';
import Video from 'quill/formats/video';
import DaTheme from '../../theme/theme';
import TextToolbar from '../Toolbar/Toolbar';

import 'quill/dist/quill.core.css';
import * as style from './editor.scss';

export interface EditorProps {
    placeholder?: string;
}

export interface EditorState {
    selected: boolean;
    rangeBounds?: any;
}

export class Editor extends React.Component<EditorProps, EditorState> {
    quill: any;
    editor: Element;
    toolbar: Element;

    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };

        Quill.register({
            'modules/toolbar': Toolbar,
            'themes/snow': SnowTheme,
            'themes/da': DaTheme,
            'formats/header': Header,
            'formats/bold': Bold,
            'formats/italic': Italic,
            'formats/underline': Underline,
            'formats/list': List,
            'formats/list/item': ListItem,
            'formats/blockquote': BlockQuote,
            'formats/link': Link,
            'formats/image': Image,
            'formats/video': Video,
            'ui/tooltip': Tooltip,
        });
    }

    componentDidMount() {
        const {placeholder} = this.props;
        this.quill = new Quill(this.editor, {
            modules: {
                toolbar: this.toolbar
            },
            placeholder,
            theme: 'da'
        });

        // this.quill.addContainer(this.toolbar);
        // this.quill.on(Emitter.events.EDITOR_CHANGE, this.handleChange);
    }

    // handleChange = (event, range, oldRange, source) => {
    //     // console.log(event, range, oldRange, source);
    //     // const rangeBounds = this.quill.getBounds(range);
    //     //
    //     // this.setState({
    //     //     selected: event === Emitter.events.SELECTION_CHANGE && range && range.length > 0,
    //     //     rangeBounds,
    //     // });
    // };

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
            <div className={style.editor}>
                <div ref={editor => this.editor = editor}/>
                <TextToolbar onMounted={toolbarNode => this.toolbar = toolbarNode} />
            </div>
        );
    }
}
