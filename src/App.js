import React, {Component, Fragment} from 'react';
import './App.css'
import MyName from "./MyName";
import Counter from "./Counter";

/**
 * 공부중
 * https://velopert.com/3629
 */

class App extends Component {
    render() {
        const name = 'react';
        const value = 1;
        const style = {
            backgroundColor: '#eee',
            padding: '5px',
            color: '#c00',
            fontSize: '12px'
        };
        return (
            <Fragment>
                {/* 주석 */}
                <div style={style} // 주석
                >Hello {name}</div>
                <div className="App">삼항연산자기초 = {1 + 1 === 2 ? 'TRUE' : 'FALSE'}</div>
                <div>AND 연산자 기초 = {1 + 1 === 2 && 'TRUE'}</div>
                <div>{
                    (() => {
                        switch (value) {
                            case 1 :
                                return '하나';
                            case 2 :
                                return '둘';
                            case 3 :
                                return '셋';
                        }
                    })()
                }</div>
                <MyName name="리액트" />
                <Counter />
            </Fragment>
        );
    }
}

export default App;
