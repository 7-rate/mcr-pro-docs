import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';



export default function DownloadButton(file: String): JSX.Element {
  return (
    <Link
      className="button button--secondary button--lg"
      to={file}>
      Download
    </Link>
  );
}
