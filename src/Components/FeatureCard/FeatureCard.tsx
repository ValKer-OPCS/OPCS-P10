import styles from './style.module.scss'
import Icon from "../Icon/Icon";

type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};


const FeatureCard = ({ icon, title, text }: FeatureProps) => {
  return (
    <div className={styles["feature-item"]}>
            <Icon name={icon} />
			<h3 className={styles["feature-item-title"]}>{title}</h3>
			<p>{text}</p>
		</div>
  )
};

export default FeatureCard
