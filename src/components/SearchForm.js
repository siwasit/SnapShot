import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import './style/SearchForm.css'

const SearchFormBytext = (props) => {
    const {getKeyword} = props
    const location = useLocation();
    const [keyword, setKeyWord] = useState(getDefaultKeyword())


    function getDefaultKeyword() {
        // Extract the keyword from the current URL
        const match = location.pathname.match(/\/search\/(.+)/);
        return match ? match[1] : "example";
    }
    // const [disable, setDisable] = useState(true)
    const inputKeyword = (event) => {
        setKeyWord(event.target.value)
    }

    // const getNew = (event) =>{
    //     event.preventDefault()
    //     const newSearchWord = keyword
    //     getKeyword(newSearchWord)
    // }

    const handClick = (value) => {
        getKeyword(value)
        setKeyWord(value)
    }

    // useEffect(() => {
    //     const IsValid = keyword.length > 0
    //     setDisable(!IsValid)
    // },[keyword])

    return (
        <div className="container mt-4">
            <h1 className='text-center mt-4 my-4'><Link to={`/`} className="Home" onClick={() => handClick('Example')}>Snap Shot</Link></h1>
            <form className="input-group mb-2 d-flex justify-content-center mb-4">
                <div className="">
                    <input type="text" className="form-control" placeholder="Search" onChange={inputKeyword} value={keyword}></input>
                </div>
                <div className="mx-1">
                    <Link to={`/search/${keyword}`} className="btn btn-dark" onClick={() => handClick(keyword)}>search</Link>
                </div>
            </form>
            <div className="d-flex justify-content-center gap-4 mb-4">
                <Link to={`/search/ocean`} className="btn btn-dark" onClick={() => handClick('Ocean')}>Ocean</Link>
                <Link to={`/search/Beaches`} className="btn btn-dark" onClick={() => handClick('Beaches')}>Beaches</Link>
                <Link to={`/search/Birds`} className="btn btn-dark" onClick={() => handClick('Birds')}>Birds</Link>
                <Link to={`/search/Glass`} className="btn btn-dark" onClick={() => handClick('Glass')}>Glass</Link>
            </div>
            <h2 className='text-center mb-4'>"{keyword}" images</h2>
        </div>
    ) 
}

//Success

export default SearchFormBytext
