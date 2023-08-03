import './styles.css'

export const TechStackCards = (props) => {
    return (
        <div>
            <div className='techstack-cards-two'>
                <div className='techstack-icon'>{props.icon}</div>
                <p className="techstack-description">{props.description}</p>
            </div>
        </div>
    )
};