export default function Project({image, text}) {
    return (
        <div>
            <img src={image} alt="Error 404" className="projects"/>
            <div id="projectDesc">
                {text}
            </div>
        </div>
    )
}
