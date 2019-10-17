import React from 'react';
import { Button, notification } from 'antd';

export default class NotificationDemo extends React.Component {
    close = () => {
        console.log(
            'Notification was closed. Either the close button was clicked or duration time elapsed.',
        );
    };

    openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description:
                'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: this.close,
            placement: 'bottomRight'
        });
    };
    render() {
        return (
            <Button type="primary" onClick={this.openNotification}>
                Open the notification box
            </Button>
        )
    }
}
