import Star from "../assets/Star.svg";
import StarOuter from "../assets/StarOuter.svg";

interface TestimonialCardProps {
  image: string;
  testimonial: string;
  name: string;
  role: string;
  stars: number;
}

export default function TestimonialCard({
  image,
  testimonial,
  name,
  role,
  stars,
}: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={image} alt={`Imagem perfil ${name}`} />

      <span className="testimony">
        <p>{testimonial}</p>
      </span>

      <span className="rating">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < stars ? Star : StarOuter}
            alt="ícone estrela"
            width={22}
            height={20}
          />
        ))}
      </span>

      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
}