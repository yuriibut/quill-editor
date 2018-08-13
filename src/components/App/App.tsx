import * as React from "react";
import {Editor} from '../Editor/Editor';

export interface AppProps {
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return <Editor/>;
    }
}
