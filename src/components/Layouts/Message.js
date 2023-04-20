import { useEffect, useState } from 'react'
import styles from '../styles/message.module.css'

export default (({ type, message }) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);
    }, [message])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {message}
                </div>
            )}
        </>
    )
})