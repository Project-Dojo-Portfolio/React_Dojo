import { useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one Punch']);

    return (
        <>  
            {/* titulo */}
            <h1>GifExpertApp</h1>
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
        </>
    )
}