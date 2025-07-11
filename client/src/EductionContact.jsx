import Education from './Education'
import Contact from './Contact'
function EductionContact() {
    return (
        <>
        <section id = "EductionContact" className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <Education />
                <Contact />
            </div>

        </section>
        </>
    )
}

export default EductionContact;