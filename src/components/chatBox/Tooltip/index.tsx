import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextsmsIcon from '@material-ui/icons/Textsms';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
    handleOpen(): any,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
        background: 'rgba(0,0,0,0.2)',
    },
    wrapper: {
        position: 'fixed',
        right: theme.spacing(5),
        bottom: theme.spacing(2.5),
        zIndex: 100,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        cursor: 'pointer',
        "& .MuiTooltip-popper": {
            position: 'static !important'
        }
    },
    arrow: {
        top: '3px !important',
    },
    popper: {
        transform: 'none !important' 
    }
  }),
);

export default function ChatBoxToolTip({ handleOpen }: Props) {
    const { wrapper, iconButton, ...tooltipClasses } = useStyles();
    return (
        <Box
            className={wrapper}
            onClick={handleOpen}
            component="div"
        >
            <Tooltip
                arrow
                open
                title="How may I help you?"
                placement="left-start"
                PopperProps={{
                    disablePortal: true,
                }}
                classes={tooltipClasses}
            >
                <IconButton
                    aria-label="How may I help you?"
                    color="primary"
                    className={iconButton}
                >
                    <TextsmsIcon />
                </IconButton>
            </Tooltip>
        </Box>
    )
}