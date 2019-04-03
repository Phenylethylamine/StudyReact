import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0,
        a: {
            aa: 'static text',
            ab: 'variable text',
            ac: 10,
            ad: -10
        }
    };

    handleIncrease = () => {
        // setState 기초
        // this.setState({
        //     number: ++this.state.number
        // });

        // 전개연산자
        // this.setState({
        //     number: ++this.state.number,
        //     a: {
        //         ...this.state.a,
        //         ab : 'variant text 2'
        //     }
        // });

        // 함수전달
        this.setState(({number, a}) => ({
            number: ++number,
            a: {
                ...a,
                ac:a.ac+10,
                ad:a.ad-10
            }
        }))

        // 화살표함수 응용
        // this.setState(
        //     (state) => ({
        //         number: ++state.number
        //     })
        // );

        // 비구조화 할당(구조분해 할당)
        // this.setState(
        //     ({ number }) => ({
        //         number: number+1
        //     })
        // );

        // 비구조화 할당 분해
        // let object = ({ number }) => ({
        //     number: number+1
        // })
        // this.setState(object);
    };

    handleDecrease = () => {
        // this.setState({
        //     number: --this.state.number
        // });
        this.setState(
            (state) => ({
                number: --state.number
            })
        );
    };

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>number: {this.state.number}</div>
                <div>a.aa: {this.state.a.aa}</div>
                <div>a.ab: {this.state.a.ab}</div>
                <div>a.ac: {this.state.a.ac}</div>
                <div>a.ad: {this.state.a.ad}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;