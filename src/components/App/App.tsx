import * as React from 'react';
import {Editor} from '../Editor/Editor';
import * as style from './app.scss';

export interface AppProps {
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className={style.app}>
                <Editor placeholder="Placeholder..."/>
            </div>
        );
    }
}
