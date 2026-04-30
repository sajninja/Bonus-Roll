// Needed Tabs: Dice Settings, Profile, Dice roller
// We will def need vite for User info within the components
import '../styles.css'
// Use vite to omit the data from navbar to react elements for pages

function NavBar() {
    return (
        <nav class="navContainer">        
            <div class="navControls">
                <a href="https://litera-ggh0.onrender.com/#/">
                Dice Roller
                </a>
                </div>
            <div class="navControls">Dice Settings</div>
            <div class="navControls">Profile</div>
        </nav>
    )
}

export default NavBar