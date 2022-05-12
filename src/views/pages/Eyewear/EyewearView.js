import { useEffect, useState } from 'react';

// material-ui

import Eyewear from 'components/Eyewear/Eyewear';

const EyewearView = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return <Eyewear />;
};

export default EyewearView;
