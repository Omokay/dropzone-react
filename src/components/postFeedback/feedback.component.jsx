import {useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Feedback = ({notify, status}) => {
    useEffect(() => {
        if (status.toLowerCase() === 'success') {
            toast.success(notify);
        } else if (status.toLowerCase() === 'error')  {
            toast.error(notify);
        } else if (status.toLowerCase() === 'hint') {
            toast.error(notify);
        }
    }, [notify, status]);
    return (
        <div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default Feedback;

