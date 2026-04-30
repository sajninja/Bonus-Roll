// NEEDS to be imported to index.html, and is the main entry point for the app
// Define page contents here
// import {COMPONENT NAME} from ''

import NavBar from './components/NavBar.jsx'

function App(){
    return(
        <div>
            <NavBar />
            <p>Hello</p>
        </div>
    )
    
}

export default App