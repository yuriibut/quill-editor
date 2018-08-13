import * as React from "react";
import {Editor} from '../Editor/Editor';
import './app.scss';

export interface AppProps {
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="app">
                <Editor placeholder="Placeholder..."/>
            </div>
        );
    }
}
