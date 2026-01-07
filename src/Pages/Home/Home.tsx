import styles from './style.module.scss'
import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import Banner from "../../Components/Banner/Banner";

import bannerImg400 from '../../Assets/bank-tree-400w.webp'
import bannerImg800 from '../../Assets/bank-tree-800w.webp'
import bannerImg1200 from '../../Assets/bank-tree-1200w.webp'
import bannerImg from '../../Assets/bank-tree.webp'


const Home = () => {
  return (
    <main>
     <Banner  src={bannerImg}
              images={[
                { src: bannerImg400, width: 400 },
                { src: bannerImg800, width: 800 },
                { src: bannerImg1200, width: 1200 },]}
              sizes="(max-width: 400px) 400px,
                  (max-width: 800px) 800px,
                  1200px"
              alt="Picture of a plant in a glass full of coins">

        <section className={styles["hero-content"]}>
					<h2 className={styles["sr-only"]}>Promoted Content</h2>
					<p className={styles["subtitle"]}>No fees.</p>
					<p className={styles["subtitle"]}>No minimum deposit.</p>
					<p className={styles["subtitle"]}>High interest rates.</p>
					<p className={styles["text"]}>Open a savings account with Argent Bank today!</p>
				</section>

   </Banner>
      <section className={styles["features"]}>
				<h2 className={styles["sr-only"]}>Features</h2>
				<FeatureCard icon="chat" title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
				<FeatureCard icon="money" title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
				<FeatureCard icon="security" title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
			</section>
      </main>
  )
};

export default Home
