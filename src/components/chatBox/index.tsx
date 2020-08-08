import React, { Fragment, useState } from 'react';
import ChatBoxDialog from './Dialog';
import ChatBoxToolTip from './Tooltip';

function ChatBox() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
           <ChatBoxToolTip
                handleOpen={handleOpen} 
            />
            <ChatBoxDialog
                handleClose={handleClose}
                open={open}
            />
        </Fragment>
    );
}

export default ChatBox;