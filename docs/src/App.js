/* eslint-disable */
import './App.css';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import { useEffect, useRef, useState } from 'react';

function App() {
    let outerDivRef = useRef();
    let [currentPage, setCurrentPage] = useState(0);
    let [scrolled, setScrolled] = useState(true);
    const introSec = useRef();
    const aboutSec = useRef();
    const skillSec = useRef();
    const projectSec = useRef();
    const contactSec = useRef();
    let sections = [introSec, aboutSec, skillSec, projectSec, contactSec];
    useEffect(() => {
        let wheeling;
        const wheelHandler = (e) => {
            clearTimeout(wheeling);
            e.preventDefault();
            const { deltaY } = e;
            if (0 < deltaY && scrolled) {
                setScrolled(false); // 휠 막기
                let nextPage = Math.min(currentPage + 1, sections.length - 1);
                outerDivRef.current.scrollTo({
                    top: sections[nextPage].current.offsetTop,
                    behavior: 'smooth',
                });
                setCurrentPage(nextPage);
            } else if (deltaY < 0 && scrolled) {
                setScrolled(false); // 휠 막기
                let nextPage = Math.max(currentPage - 1, 0);
                outerDivRef.current.scrollTo({
                    top: sections[nextPage].current.offsetTop,
                    behavior: 'smooth',
                });
                setCurrentPage(nextPage);
            }
            // 일정 시간동안 휠 입력 막기
            wheeling = setTimeout(() => {
                wheeling = undefined;
                setScrolled(true);
            }, 1000);
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    });

    function clickMenu(sectionIdx, e) {
        e.preventDefault();
        outerDivRef.current.scrollTo({
            top: sections[sectionIdx].current.offsetTop,
            behavior: 'smooth',
        });
        setCurrentPage(sectionIdx);
    }

    return (
        <div className='App' ref={outerDivRef}>
            <header className='App-header'>
                <ul>
                    <li><a href='#' onClick={(e) => {clickMenu(0, e);}}>Intro</a></li>
                    <li><a href='#' onClick={(e) => {clickMenu(1, e);}}>About</a></li>
                    <li><a href='#' onClick={(e) => {clickMenu(2, e);}}>Skill</a></li>
                    <li><a href='#' onClick={(e) => {clickMenu(3, e);}}>Project</a></li>
                    <li><a href='#' onClick={(e) => {clickMenu(4, e);}}>Contact</a></li>
                </ul>
            </header>
            <main className='smooth-wrapper'>
                <Intro ref={introSec}></Intro>
                <About ref={aboutSec}></About>
                <Skill ref={skillSec}></Skill>
                <Project ref={projectSec}></Project>
                <Contact ref={contactSec}></Contact>
            </main>
        </div>
    );
}

export default App;
