import "../styles/CardWidget.css";


export default function CardWidget({ title, description, image }) {
return (
<div className="card-widget">
{image && <img src={image} alt={title} className="card-image" />}


<div className="card-content">
<h2 className="card-title">{title}</h2>
<p className="card-description">{description}</p>
</div>
</div>
);
}