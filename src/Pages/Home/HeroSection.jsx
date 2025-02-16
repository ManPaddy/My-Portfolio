export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey, I'm Favour </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere aperiam non?
                        <br /> Nihil fuga fugiat magnam accusantium aliquam?
                    </p>
                </div>
                <button className="btn btn-primary" href="https://wa.me/07032486756">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/PAN_4020 copy.jpg" alt="Hero Section" />
            </div>
        </section>
        );

}