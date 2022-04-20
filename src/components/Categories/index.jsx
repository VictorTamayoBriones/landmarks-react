import { ButtonCategory, ListCategories } from "./style"
import { useContext } from "react"
import { ContextCategories } from "../../context/categories"

export const Categories = () =>{

    const {setCategory}=useContext(ContextCategories)

    return(
        <ListCategories>
            <ButtonCategory onClick={()=>setCategory('Rivers')} >
                <button>Rivers</button>
                <div className="overlay"></div>
            </ButtonCategory>
            <ButtonCategory onClick={()=>setCategory('Mountains')} >
                <button>Mountains</button>
                <div className="overlay"></div>
            </ButtonCategory>
            <ButtonCategory onClick={()=>setCategory('Lakes')} >
                <button>Lakes</button>
                <div className="overlay"></div>
            </ButtonCategory>
            <ButtonCategory onClick={()=>setCategory('')} >
                <button>All</button>
                <div className="overlay"></div>
            </ButtonCategory>
        </ListCategories>
    )
}