import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TransitionProps } from '@material-ui/core/transitions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Form from './Form/';
import Services from './Services/';
import PaperHeader from './PaperHeader/';

interface Props {
    handleClose(): any,
    open: boolean,
}
export interface details {
    name: string,
    email: string,
    phone: string,
    formFilled?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        bottom: '45px !important',
        right: '0 !important',
        minHeight: 100,
        left: 'auto !important',
    },
    container: {
        alignItems: 'flex-end'
    },
    paperScrollPaper: {
        width: theme.spacing(50),
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
    const emptyDetails = {
        name: '',
        email: '',
        phone: '',
    };
    const { closeButton, ...dialogClasses } = useStyles();
    const [step, setStep] = useState<number>(1);
    const [userDetails, setUserDetails] = useState<details>(emptyDetails);
    const clearAndClose = () => {
        setStep(1);
        setUserDetails(emptyDetails);
        handleClose();
    }
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={clearAndClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            classes={{
                ...dialogClasses
            }}
        >
            <DialogTitle id="alert-dialog-slide-title">
                Title
                <IconButton aria-label="close" className={closeButton} onClick={clearAndClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-slide-description">
                    <PaperHeader
                        message={step === 1 ? 'Please fill' : 'Please Select Options'}
                        withIcon
                        headerMessage="Qvantee"
                    />
                    { step === 1 ?
                        <Form
                            setStep={setStep}
                            setUserDetails={setUserDetails}
                            details={userDetails}
                        />
                        : 
                        <Services
                            name={userDetails.name}
                            chipServices={['Service1', 'Service2', 'Service3', 'Service4', 'Service5', 'Service6', 'Service7', 'Service8', 'Service9', 'Service10']}
                        />
                    }
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}