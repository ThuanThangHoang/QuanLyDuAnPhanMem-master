import React, { PureComponent } from 'react';
import { Button, DialogContainer, TextField } from 'react-md';

export default class SimpleModal extends PureComponent {

    render() {
        const { hide, visible } = this.props
        const actions = [];
        actions.push({ secondary: true, children: 'Hủy', onClick: hide });
        actions.push(<Button flat primary onClick={hide}>Gửi</Button>);

        return (
            <div>
                <DialogContainer
                    id="simple-action-dialog"
                    visible={visible}
                    onHide={hide}
                    actions={actions}
                    title="Thêm từ mới"
                >
                    <TextField
                        id="simple-action-dialog-field"
                        label="Từ muốn thay "
                        placeholder="Content..."
                        defaultValue="..."
                    />
                    <TextField
                        id="simple-action-dialog-field"
                        label="Thay bằng"
                        placeholder="Content..."
                        defaultValue="..."
                    />
                </DialogContainer>
            </div>
        );
    }
}