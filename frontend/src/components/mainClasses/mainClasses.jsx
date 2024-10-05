import './mainClasses.scss'


const MainClasses = ({title, image, list, altWord}) => {
    const elements = [];
    for (let key in list) {
        elements.push(
            <li>
            {list[key]}
            </li>
        );
    }
    return (
        <section id='mainClasses'>
            <div className='main-class'>
                <div className='main-class-title'>{title}</div>
                <div className='main-class-content'>
                    <ul className='main-class-description'>
                        {elements}
                    </ul>
                    <div className='main-class-image'>
                        <img src={image} alt={altWord} className='main-class-actual-image'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainClasses;