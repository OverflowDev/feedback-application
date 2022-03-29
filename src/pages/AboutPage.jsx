import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>ABOUT this Project</h1>
            <p>This is a react app to post a feedback</p>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage