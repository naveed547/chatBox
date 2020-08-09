import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import PageHeader from '../PaperHeader/';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
    name: string,
    chipServices: string[],
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipWrapper: {
        margin: theme.spacing(2.5, 0),
    },
    chipSpacing: {
        margin: 5,
    }
  }),
);

export default function Services({ name, chipServices }: Props) {
    const classes = useStyles();
    const [ chipData, setChipData ] = useState(chipServices.map(service => ({ label: service, selected: false})));
    return (
        <div>
            <div className={classes.chipWrapper}>
                {chipData.map(({ label, selected }, index) => (
                    <Chip
                        variant={selected ? 'default' : 'outlined'}
                        label={label}
                        clickable
                        color="primary"
                        className={classes.chipSpacing}
                        onClick={() => {
                            const existData = [...chipData];
                            existData[index] = {
                               ...existData[index],
                               selected: !existData[index].selected 
                            }
                            setChipData(existData);
                        }}
                    />
                ))}
            </div>
            <PageHeader
                headerMessage={name}
                message="I want to know about how to pay bill online?"
            />
        </div>       
    );
};