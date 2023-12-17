'use client'

import React from 'react';

//This component will show the data from the source object

interface DataShowProps {
    randomParam: number;
}

// This function will download the source object as a JSON file
const downloadJsonFile = (source: Record<string, any>) => {
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(source));
    const a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'source_data.json';
    a.click();
};

// This component will show the data from the source object
const DataShow: React.FC<DataShowProps> = ({ randomParam }) => {
    //This is the source object
    const source = {
        objectID: 'ZTF21aaqjyho',
        id: 'ZTF21aaqjyho',
        ra: 0.0,
        dec: 0.0,
        redshift: 0.0,
        summary: 'This is a fake source',
        cutouts: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.ipac.caltech.edu%2Fstaff%2Ffmasci%2Fztf%2Fmasci_pasadena_05.04.18.pdf&psig=AOvVaw3gqvPQ6B8KclpZOIQHVOw-&ust=1702258106371000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiit-Dbg4MDFQAAAAAdAAAAABAI',
        generatedNumber: randomParam,
    };
    //This will return the data from the source object
    return (
        <>
            <div className='p-1 my-1 text-black text-2xl text-center '>
            <h1> Fake Data Information :</h1>
            <p> ObjectID : {source.objectID}</p>
            <p> ID : {source.id}</p>
            <p> RA : {source.ra}</p>
            <p> DEC : {source.dec}</p>
            <p> Redshift : {source.redshift}</p>
            <p> Summary : {source.summary}</p>
            <p>
                Cutouts :{' '}
                <a href={source.cutouts} className='link link-accent' target="_blank" rel="noopener noreferrer">
                    Click on the link
                </a>
            </p>
            {/* Use generatedNumber from the source object */}
            <p>Random Number: {source.generatedNumber}</p>
            <button className="btn btn-primary" onClick={() => downloadJsonFile(source)}>Download JSON</button>
            </div>
        </>
    );
};

export default DataShow;
