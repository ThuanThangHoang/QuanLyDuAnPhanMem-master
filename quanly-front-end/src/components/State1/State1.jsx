import React, { Component } from 'react';
import { TextField, Button } from 'react-md'

class State1 extends Component {
    render() {
        return (
            <div>
                <TextField
                    style={{
                        fontSize: "200%"
                    }}
                    id="floating-center-title"
                    label="Nhập vào văn bản cần kiểm tra :"
                    placeholder="......"
                    rows={10}
                />
                <Button
                    raised
                    secondary
                    iconBefore={false}
                    iconClassName="fa fa-hand-paper-o"
                    style={{
                        marginTop: "30px",
                        backgroundColor: "green",
                        left: "50%",
                        marginRight: "-50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                >Kiem tra</Button>
            </div>
        );
    }
}

export default State1;