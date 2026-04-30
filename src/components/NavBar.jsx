// Needed Tabs: Dice Settings, Profile, Dice roller
// We will def need vite for User info within the components
import '../styles.css'

function NavBar() {
    return (
        <div class="navContainer">        
            <button class="navControls">Dice Roller</button>
            <button class="navControls">Dice Settings</button>
            <button class="navControls">Profile</button>
        </div>
    )
}

export default NavBar