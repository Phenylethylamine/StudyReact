import React, { Component } from 'react';

// 새 컴포넌트 만들기
class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요, 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}
MyName.defaultProps = {
    name: 'defaultName'
};

// const MyName = ({ name }) => {
//     return (
//         <div>안녕하세요, 제 이름은 {name} 입니다</div>
//     );
// };

export default MyName;