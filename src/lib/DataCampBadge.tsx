import Link from "next/link";
import styles from './DataCampBadge.module.css';

export default function DataCampBadge({ badgeId, image }: { badgeId: string, image: string }) {

  return (
    <Link href={`https://www.datacamp.com/certificate/${badgeId}`} className={styles.mfeAppPortfolios}>
        <img alt="SQL Associate" src={image}/>
        <h4>SQL Associate</h4>
    </Link>
  );
}
