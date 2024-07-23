import React,{useEffect,useState} from 'react'

const ScrollTop = () => {
    const path = process.env.PUBLIC_URL;
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => { 
        if (window.scrollY > 300) {
            setVisible(true);
        } else { 
            setVisible(false);
        }
    }
    useEffect(() => { 
        window.addEventListener('scroll', handleVisibility);
        return () => {
        window.removeEventListener('scroll', handleVisibility);
    };
    }, [])
    
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // For Chrome, Firefox, Safari
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
        // For IE/Edge
    }

    return (
        <div className='top-btn' onClick={handleScrollTop}>
            {visible && (
                <div>
                    <img src={`${path}/img/assets/star.png`} alt='star icon'/>
                    <span>TOP</span>
                </div>
            )}
    </div>
  )
}

export default ScrollTop