import Image from "next/image";

export default function ProjectCard({ img, title, desc }) {
    return (
        <div className="projeto">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image
                            src={img}
                            alt={title}
                            width={300}
                            height={200}
                            className="rounded-xl object-cover"
                        />
                    </div>
                    <div className="flip-card-back">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    );
}
