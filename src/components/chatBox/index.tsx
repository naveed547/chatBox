import React, { Fragment, useState } from 'react';
import TextsmsIcon from '@material-ui/icons/Textsms';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
        position: 'fixed',
        right: theme.spacing(5),
        bottom: theme.spacing(2.5),
        zIndex: 100,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        cursor: 'pointer',
        "& .MuiTooltip-arrow": {
            top: '3px !important',
        },
        "& .MuiTooltip-popper": {
            transform: 'none !important',
            position: 'static !important',
        }
    },
    iconButton: {
        background: 'rgba(0,0,0,0.2)',
    },
    paper: {
        position: 'fixed',
        bottom: 100,
        width: 300,
        textAlign: 'center',
        right: 40,
        minHeight: 100,
    }
  }),
);


function ChatBox() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    return (
        <Fragment>
            <div
                className={classes.wrapper}
                onClick={() => setChecked(!checked)}
            >
                <Tooltip
                    arrow
                    open
                    title="How may I help you?"
                    placement="left-start"
                    PopperProps={{
                        disablePortal: true,
                    }}
                >
                    <IconButton
                        aria-label="How may I help you?"
                        color="primary"
                        className={classes.iconButton}
                    >
                        <TextsmsIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                    Content
                </Paper>
            </Slide>
        </Fragment>
    );
}

export default ChatBox;