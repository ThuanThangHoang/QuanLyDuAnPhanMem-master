import React, { Component } from 'react';
import { TextField, Button } from 'react-md'
import CustomWord from './CustomWord.jsx'
import CustomReplace from './CustomReplace.jsx'
class State2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible_word: false,
            visible_replace:false
        }

        this.show_word = this.show_word.bind(this)
        this.hide_word = this.hide_word.bind(this)
        this.show_replace = this.show_replace.bind(this)
        this.hide_replace = this.hide_replace.bind(this)
    }
    show_word() { this.setState({ visible_word: true }) }
    hide_word() { this.setState({ visible_word: false }) }

    show_replace() { this.setState({ visible_replace: true }) }
    hide_replace() { this.setState({ visible_replace: false }) }

    render() {
        const { visible_replace, visible_word } = this.state
        return (
            <div>
                <TextField
                    id="floating-center-title"
                    label="Kết quả :"
                    placeholder="......"
                    rows={10}
                    disabled={true}
                />
                <Button
                    raised
                    secondary
                    iconBefore={false}
                    iconClassName="fa fa-hand-paper-o"
                    style={{
                        margin: "15px",
                        backgroundColor: "green"
                    }}
                >Sủa tất cả</Button>
                <Button
                    raised
                    secondary
                    iconBefore={false}
                    iconClassName="fa fa-hand-paper-o"
                    style={{
                        margin: "15px",
                        backgroundColor: "green"
                    }}
                >Sửa từng từ</Button>
                <Button
                    raised
                    secondary
                    iconBefore={false}
                    iconClassName="fa fa-hand-paper-o"
                    style={{
                        margin: "15px",
                        backgroundColor: "green"
                    }}
                    onClick={this.show_replace}
                >Thay thế từ của tôi</Button>
                <Button
                    raised
                    secondary
                    iconBefore={false}
                    iconClassName="fa fa-hand-paper-o"
                    style={{
                        margin: "15px",
                        backgroundColor: "green"
                    }}
                    onClick={this.show_word}
                >Đóng góp từ</Button>
                <CustomWord visible={visible_word} hide={this.hide_word} />
                <CustomReplace visible={visible_replace} hide={this.hide_replace} />
            </div>
        );
    }
}

export default State2;