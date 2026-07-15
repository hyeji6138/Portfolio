/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../store.js';

function Modal() {
    let project = useSelector((state) => { return state.project });
    let dispatch = useDispatch();
    return (
        <div className='project-modal' onClick={() => { dispatch(setModal(false)); }}>
            {project.tags}
        </div>
    );
}

export default Modal;