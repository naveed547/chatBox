import React, { Dispatch, SetStateAction, FormEvent } from 'react';
import { details as DetailsProp } from '../index';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
    setStep: Dispatch<SetStateAction<number>>,
    setUserDetails: Dispatch<SetStateAction<DetailsProp>>,
    details: DetailsProp,
}

interface formLableType {
    id: string,
    label: string,
    placeholder: string,
    name: string,
}
interface formLabel {
    name: formLableType
    phone: formLableType
    email: formLableType
}

const formLabel: formLabel = {
    name: {
        id: 'formName',
        label: 'Name',
        placeholder: 'Please enter your name',
        name: 'name',
    },
    phone: {
        id: 'formPhone',
        label: 'Phone',
        placeholder: 'Please enter your phone no',
        name: 'phone',
    },
    email: {
        id: 'formEmail',
        label: 'Email',
        placeholder: 'Please enter your email',
        name: 'email',
    }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textFieldMargin: {
        margin: theme.spacing(1.25, 0),
    },
    buttonMargin: {
        marginTop: theme.spacing(1.25)
    }
  }),
);

export default function Form({ setStep, setUserDetails, details: { formFilled, ...exactDetails } }: Props) {
    const detailsMap = Object.entries(exactDetails);
    const classes = useStyles();
    const onChange = (event: FormEvent<EventTarget>) => {
        const element = event.target as HTMLInputElement
        setUserDetails({
            ...exactDetails,
            [element.name]: element.value
        });
    };
    return (
        <form noValidate autoComplete="off">
            {detailsMap.map(([formName, formValue]) => (
                <TextField
                    {...(formLabel[formName as keyof typeof formLabel])}
                    fullWidth
                    variant="outlined"
                    value={formValue}
                    onChange={onChange}
                    className={classes.textFieldMargin}
                />
            ))}
            <Button
                className={classes.buttonMargin}
                variant="contained"
                color="primary"
                name="phone"
                disabled={!(exactDetails.name && exactDetails.email && exactDetails.phone)}
                onClick={() => setStep(2)}
            >
                Submit
            </Button>
        </form>
    )
};