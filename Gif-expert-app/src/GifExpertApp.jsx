import { useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one Punch']);

    const onAddCategory = () => {
        setCategories([...categories,'Dragon ball z'])
    }

    return (
        <>  
            {/* titulo */}
            <h1>GifExpertApp</h1>
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
        </>
    )
}