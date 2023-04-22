import { useEffect, useState } from 'react'
import styles from '../styles/message.module.css'
import responsive from '../../Responsive/Message.module.css'

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
                <div className={`${styles.message} ${responsive.responsive_message} ${styles[type]}`}>
                    {message}
                </div>
            )}
        </>
    )
})