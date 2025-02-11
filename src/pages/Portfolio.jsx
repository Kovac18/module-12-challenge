import Project from "../components/Project"
import redWall from '../../assets/02-portfolio-1.jpg'
import calc from '../../assets/02-portfolio-2.jpg'
import pastel from '../../assets/02-portfolio-3.jpg'
import surf from '../../assets/02-portfolio-4.jpg'
import run from '../../assets/02-run-buddy.jpg'

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <ul className="projectList">
                <Project image={redWall} text="Red Wall"/>
                <Project image={calc} text="Calculator"/>
                <Project image={pastel} text="Pastel Car"/>
                <Project image={surf} text="Surf Set"/>
                <Project image={run} text="Run Buddy"/>
            </ul>
        </div>
    )
}