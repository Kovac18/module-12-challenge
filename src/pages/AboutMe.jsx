import profile from '../../assets/profile.png'

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={profile} alt='Profile' className="profile"/>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar aptent orci ornare malesuada est ut, aenean vitae. Quisque ridiculus gravida facilisi, habitasse lacus ante. Posuere ante gravida; aptent eleifend convallis in aenean mollis malesuada. Eros orci risus quam inceptos primis dis? Parturient cursus primis nisi vel condimentum interdum venenatis metus. Venenatis cras eros massa in consequat. Potenti neque purus accumsan morbi volutpat malesuada. Duis rhoncus commodo curae nostra donec commodo ut nibh neque.</p>
        </div>
    )
}