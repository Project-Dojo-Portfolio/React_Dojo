import {PropTypes} from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);
    return (
        <>
            {
                isLoading && (<p>Cargando....</p>)
            }
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image}/>
                    ))
                
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}