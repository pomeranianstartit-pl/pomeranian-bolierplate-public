import './styles.css';
import { TechStackCards } from '../Components/TechStackCards';
import { default as vectorSVG } from '../Images/tech-stack/vector.svg';
import { default as discordiconPNG } from '../Images/tech-stack/discordicon.png';
import { default as githuubSVG } from '../Images/tech-stack/githuub.svg';
import { default as htmlSVG } from '../Images/tech-stack/html.svg';
import { default as jira1PNG } from '../Images/tech-stack/jira1.png';
import { default as jsSVG } from '../Images/tech-stack/js.svg';
import { default as reactSVG } from '../Images/tech-stack/react.svg';
import { default as redminePNG } from '../Images/tech-stack/redmine.png';
import { default as reduxPNG } from '../Images/tech-stack/redux.png';
import { default as tsSVG } from '../Images/tech-stack/ts.svg';
import { default as vscodealt1PNG } from '../Images/tech-stack/vscodealt1.png';
import { default as bitbucektSVG } from '../Images/tech-stack/bitbucket.svg';
import { default as jestSVG } from '../Images/tech-stack/jest.svg';
import { default as firebaseSVG } from '../Images/tech-stack/firebase.svg';
import { default as gitSVG } from '../Images/tech-stack/git.svg'


export const TechStack = () => {
    const techstackData = [
        {
            title: 'CSS',
            icon: <img src={vectorSVG}></img>,
            description: 'css',
        },
        {
            title: 'HTML',
            icon: <img src={htmlSVG}></img>,
            description: 'html',
        },
        {
            title: 'TYPESCRIPT',
            icon: <img src={tsSVG}></img>,
            description: 'typescript',
        },
        {
            title: 'JAVASCRIPT',
            icon: <img src={jsSVG}></img>,
            description: 'javascript',
        },
        {
            title: 'REACT',
            icon: <img src={reactSVG}></img>,
            description: 'react',
        },
        {
            title: 'GITHUB',
            icon: <img src={githuubSVG}></img>,
            description: 'github',
        },
        {
            title: 'BITBUCKET',
            icon: <img src={bitbucektSVG}></img>,
            description: 'bitbucket',
        },
        {
            title: 'JEST',
            icon: <img src={jestSVG}></img>,
            description: 'jest',
        },
        {
            title: 'FIREBASE',
            icon: <img src={firebaseSVG}></img>,
            description: 'firebase',
        },
        {
            title: 'REDUX',
            icon: <img src={reduxPNG}></img>,
            description: 'redux',
        },
        {
            title: 'GIT',
            icon: <img src={gitSVG}></img>,
            description: 'git',
        },
        {
            title: 'VSCODE',
            icon: <img src={vscodealt1PNG}></img>,
            description: 'vscode',
        },
        {
            title: 'DISCORD',
            icon: <img src={discordiconPNG}></img>,
            description: 'discord',
        },
        {
            title: 'JIRA',
            icon: <img src={jira1PNG}></img>,
            description: 'jira',
        },
        {
            title: 'READMINE',
            icon: <img src={redminePNG}></img>,
            description: 'readmine',
        },

    ]

    return (
        <div className="techstack">
            <h2 className='techstack-header'>Tech Stack</h2>
            <p className='techstack-header-description'>Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.</p>
            <div className='techstack-cards'>
                {techstackData.map(element => {
                    return <TechStackCards
                        title={element.title}
                        icon={element.icon}
                        description={element.description}
                    />
                })}
            </div>
        </div>
    );

};



