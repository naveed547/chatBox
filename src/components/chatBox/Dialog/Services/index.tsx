import React from 'react';
import Chip from '@material-ui/core/Chip';
import PageHeader from '../PaperHeader/';

interface Props {
    name: string,
}


const chipServices:string[] = ['Service1', 'Service2', 'Service3', 'Service4', 'Service5', 'Service6', 'Service7', 'Service8', 'Service9', 'Service10'];

export default function Services({ name }: Props) {
    return (
        <div>
            <div style={{ margin: '20px 0' }}>
                {chipServices.map((label: string) => (
                    <Chip
                        variant="outlined"
                        label={label}
                        clickable
                        color="primary"
                        style={{ margin: 5 }}
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