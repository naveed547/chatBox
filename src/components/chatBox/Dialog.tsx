import React from 'react';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TransitionProps } from '@material-ui/core/transitions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
    handleClose(): any,
    open: boolean,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        bottom: '0 !important',
        right: '0 !important',
        minHeight: 100,
        left: 'auto !important'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
  }),
);


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChatBoxDialog({ handleClose, open }: Props) {
    const classes = useStyles();
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            className={classes.paper}
        >
            <DialogTitle id="alert-dialog-slide-title">
                Title
                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-slide-description">
                    Content
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button color="primary">
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    )
}