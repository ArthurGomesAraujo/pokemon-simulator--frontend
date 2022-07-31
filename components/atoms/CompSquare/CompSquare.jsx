import classes from './CompSquare.module.css';

const CompSquare = ({ image }) => {
    const { compsquareContainer, compsquareImage } = classes;

    return (
        <div className={compsquareContainer}>
            <img src={image} alt="team-member" className={compsquareImage} />
        </div>
    )
}