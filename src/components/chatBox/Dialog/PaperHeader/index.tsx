import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
    withIcon?: boolean,
    message: string,
    headerMessage: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rounded: {
        borderRadius: 10,
    },
    outlined: {
        borderColor: theme.palette.primary.main,
        borderWidth: 4,
    },
    root: {
        margin: theme.spacing(.5, 0, 2),
        padding: theme.spacing(2),
    },
    icon: {
        marginTop: 20,
    }
  }),
);

function PageHeader({ message, withIcon, headerMessage }: Props) {
    const {icon, ...paperClasses} = useStyles();
    return (
        <Box>
            <Grid container spacing={2}>
                {withIcon && (
                    <Grid item>
                        <IconButton
                            aria-label="How may I help you?"
                            color="primary"
                            className={icon}
                        >
                            <RecordVoiceOverIcon />
                        </IconButton>
                    </Grid>
                )}
                <Grid item xs={12} sm>
                    <Typography color="primary" display="block" variant="body2">
                       {`I'm ${headerMessage}`}
                    </Typography>
                    <Paper
                        variant="outlined"
                        classes={{ ...paperClasses }}
                    >
                        <Typography color="primary" variant="body1">
                            {message}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

PageHeader.defaultProps = {
    withIcon: false,
};

export default PageHeader;