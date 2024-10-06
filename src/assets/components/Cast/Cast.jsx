import React from 'react'
import "./styles.css"
const Cast = ({ cast }) => {
    return (
        <>
            <div className="cast-card">
                < img
                    src={
                        cast.
                            profile_path
                            !== "N/A"
                            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : "#"
                    }
                    alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
            </div >
        </>
    )
}

export default Cast