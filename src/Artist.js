import React from 'react';
const Artist = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.artist.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">is {props.artist.name}</h6>
            <img src={props.artist.image} alt="new" />

        </div>
    </div>
);
export default Artist;