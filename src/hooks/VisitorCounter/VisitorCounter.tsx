'use client'

import { useEffect, useState } from 'react'
import styles from './VisitorCounter.module.css'

type CounterResponse = {
    value: number
}

const COUNTER_URL = 'https://api.countapi.xyz/hit/wizxrdx-github-io/experience-page'

export default function VisitorCounter() {
    const [visits, setVisits] = useState<number | null>(null)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        let isMounted = true

        const updateVisitorCount = async () => {
            try {
                const response = await fetch(COUNTER_URL, { cache: 'no-store' })
                if (!response.ok) {
                    throw new Error('Failed to load visitor count')
                }

                const data = (await response.json()) as CounterResponse
                if (isMounted) {
                    setVisits(data.value)
                    setHasError(false)
                }
            } catch {
                if (isMounted) {
                    setHasError(true)
                }
            }
        }

        void updateVisitorCount()

        return () => {
            isMounted = false
        }
    }, [])

    if (hasError) {
        return <p className={styles.footerText}>Visitors: unavailable right now</p>
    }

    if (visits === null) {
        return <p className={styles.footerText}>Visitors: loading...</p>
    }

    return <p className={styles.footerText}>Visitors: {visits.toLocaleString()}</p>
}
