/* eslint-disable */
import { projects } from '../Data.js';
import { useState, useRef } from 'react';
import Modal from './Modal.js';
import { useDispatch, useSelector } from 'react-redux';
import { setModal, setProject } from '../store.js';

function Project({ ref }) {
    const project_list = useRef();
    const [animate, setAnimate] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);
    const onDragStart = (e) => {
        setIsDragging(true);
        const x = e.clientX;
        setStartX(x);
        console.log(isDragging, startX);
    }
    const onDragMove = (e) => {
        if (!isDragging) return;
        const move = e.clientX - startX;
        console.log(project_list.current.style.transform);
    }
    const onDragEnd = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
    }
    let showModal = useSelector((state) => { return state.showModal });
    let dispatch = useDispatch();
    
    function showProjectDetail(idx) {
        // dispatch(setProject(idx));
        // dispatch(setModal(true));
        window.open(projects[idx].url, '_blank');
    }

    return (
        <div className='projects-container' ref={ref}>
            <div className='projects-inner'>
                <h2 className='title'>project</h2>
                <div className='project-list'>
                    <ul ref={project_list} onMouseEnter={onStop} onMouseLeave={onRun} onMouseDown={onDragStart} onMouseUp={onDragEnd} onMouseMove={onDragMove}>
                        <div className={'slide original'.concat(animate ? '' : ' stop')}>
                            {projects.map((project, projectIdx) => {
                                return (
                                    <li className='project-box' key={projectIdx}
                                        onClick={() => {
                                            showProjectDetail(projectIdx);
                                        }}>
                                        <div className='project-img'>
                                            <img src={require(`../images/projects/${project.img}.jpg`)} alt={project.name} />
                                        </div>
                                        <div className='project-detail'>
                                            <h4 className='name'>{project.name}</h4>
                                            <p className='date'>{project.date}</p>
                                            <p className='description'>{project.description}</p>
                                            <ul className='tags'>
                                                {project.tags.map((tag, tagIdx) => {
                                                    return <li key={tagIdx}>{tag}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </div>
                        <div className={'slide clone'.concat(animate ? '' : ' stop')}>
                            {projects.map((project, projectIdx) => {
                                return (
                                    <li className='project-box' key={projectIdx}
                                        onClick={() => {
                                            showProjectDetail(projectIdx);
                                        }}>
                                        <div className='project-img'>
                                            <img src={require(`../images/projects/${project.img}.jpg`)} alt={project.name} />
                                        </div>
                                        <div className='project-detail'>
                                            <h4 className='name'>{project.name}</h4>
                                            <p className='date'>{project.date}</p>
                                            <p className='description'>{project.description}</p>
                                            <ul className='tags'>
                                                {project.tags.map((tag, tagIdx) => {
                                                    return <li key={tagIdx}>{tag}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </div>
                    </ul>
                </div>
                <ul className='pages'>
                    {projects.map((project, idx) => {
                        return <li id={project.img} key={idx}>{idx+1}</li>;
                    })}
                </ul>
            </div>
            {showModal ? <Modal></Modal> : ''}
        </div>
    );
}

export default Project;
