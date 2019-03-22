import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0,
        a: {
            aa: 10,
            ab: 20
        }
    }

    handleIncrease = () => {
        // setState 기초
        this.setState({
            number: ++this.state.number
        });

        // 화살표함수 응용
        this.setState(
            (state) => ({
                number: ++state.number
            })
        );

        // 비구조화 할당(구조분해 할당)
        this.setState(
            ({ number }) => ({
                number: number+1
            })
        );

        // 비구조화 할당 분해
        let object = ({ number }) => ({
            number: number+1
        })
        this.setState(object);
    }

    handleDecrease = () => {
        // this.setState({
        //     number: --this.state.number
        // });
        this.setState(
            (state) => ({
                number: --state.number
            })
        );
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;