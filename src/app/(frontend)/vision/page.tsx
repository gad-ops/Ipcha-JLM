import Image from 'next/image'

import heroImage from '../../../../assets/vision/hero.jpg'
import starPink from '../../../../assets/vision/star-pink.svg'
import doodle1 from '../../../../assets/vision/doodle-1.png'
import doodle2 from '../../../../assets/vision/doodle-2.png'
import doodle3 from '../../../../assets/vision/doodle-3.png'
import doodle4 from '../../../../assets/vision/doodle-4.png'
import doodle1Mobile from '../../../../assets/vision/doodle-1-mobile.png'
import doodle2Mobile from '../../../../assets/vision/doodle-2-mobile.png'
import doodle3Mobile from '../../../../assets/vision/doodle-3-mobile.png'
import doodle4Mobile from '../../../../assets/vision/doodle-4-mobile.png'
import supportPhoto from '../../../../assets/home/image-07.jpeg'
import { FadeInView } from '../components/FadeInView'
import { PageHero } from '../components/PageHero'
import { PhotoBand } from '../components/PhotoBand'
import { StepCardStack, type Step } from '../components/StepCardStack'
import styles from './page.module.css'
import { OG_IMAGES, pageMetadata } from '../seo'

const BELIEFS_ROWS = [
  [
    {
      content: (
        <>
          <p className={styles.beliefParagraph}>מהי בכלל חדשנות בחינוך?</p>
          <p className={styles.beliefParagraph}>
            להיות מורה חדשני זה לאתגר את השגרה המוכרת,{' '}
            <mark className={styles.marker}>ולהפוך את הכיתה למרחב שבו יצירתיות וסקרנות קובעות את הקצב.</mark>
          </p>
        </>
      ),
    },
    {
      content: (
        <p className={styles.beliefParagraph}>
          חינוך איכותי הוא תהליך דינמי ומתפתח.{' '}
          <mark className={styles.marker}>
            אנו מחויבים ליצירת סביבה חינוכית המקדמת הרחבת אופקים וצמיחה אישית ומקצועית למורה.
          </mark>{' '}
          אלו הן אבני היסוד של פדגוגיה פורצת דרך.
        </p>
      ),
    },
  ],
  [
    {
      content: (
        <p className={styles.beliefParagraph}>
          <mark className={styles.marker}>כדי להגשים את זה,</mark> הזרקור מופנה אל המורה, שמהווה את המנוע של כל המערכת.{' '}
          <mark className={styles.marker}>פדגוגיה פורצת דרך</mark> מתרחשת כאשר מרחיבים את נקודת המבט, מתנסים במתודות
          מעולמות תוכן אחרים ומאמצים עקרונות שמתאימים ליישום הלכה למעשה.
        </p>
      ),
    },
    {
      content: (
        <>
          <p className={styles.beliefParagraph}>איך אנחנו יודעים שהצלחנו?</p>
          <p className={styles.beliefParagraph}>
            <mark className={styles.marker}>כאשר המורה מצליח לראות באתגרים פדגוגיים הזדמנות לצמיחה.</mark> כאשר המורה
            מפתח שיעורים מדוייקים והופך את חוויית הלמידה למיטבית ומשמעותית, הוא מעצב את חוויית
            הלמידה, ומממש את מלוא הפוטנציאל שלו כאיש חינוך.
          </p>
        </>
      ),
    },
  ],
]

export const metadata = pageMetadata(
  'החזון שלנו | איפכא',
  'אצלינו מחברים בין חינוך לעיצוב, והכל בתהליכים מבוססי צורך על פי המודל שפותח באוניברסיטת סטנפורד.',
  OG_IMAGES.vision,
)

const PROCESS_STEPS: Step[] = [
  {
    number: '01',
    title: 'מחקר אמפתי',
    text: 'שלב ראשוני שנועד להבין באמת את השטח ואת המצב הקיים. בעזרת כלי התבוננות שמתמקדים בחוויה האנושית, יוצאים לחקר משמעותי ורחב – מקיימים שיחות, בוחנים התנהגויות ומזהים את נקודות הכאב.',
    image: doodle1,
    mobileImage: doodle1Mobile,
    color: 'blue',
  },
  {
    number: '02',
    title: 'הגדרת הזדמנות',
    text: 'איסוף התובנות הגולמיות משלב המחקר האמפתי וגיבושן לכדי בעיה מוגדרת היטב, המזמינה פתרון יצירתי. זהו רגע של הארה – הבנה משמעותית של צורך אמיתי, שממנו מנסחים אתגר שניתן לעבוד איתו.',
    image: doodle2,
    mobileImage: doodle2Mobile,
    color: 'pink',
  },
  {
    number: '03',
    title: 'רעיונאות',
    text: 'שלב חשוב וחגיגי בתהליך, שבו מתקיים סיעור מוחות יצירתי, ובעזרת כלים ייחודיים מעלים כמה שיותר רעיונות מגוונים. רעיונאות מאפשרת לנו לפגוש רעיונות שונים ומשונים, להשתחרר מכל המגבלות ולעוף עם הדמיון. בסופו נבחר הרעיון בעל הפוטנציאל הגבוה ביותר.',
    image: doodle3,
    mobileImage: doodle3Mobile,
    color: 'blue',
  },
  {
    number: '04',
    title: 'פרוטוטייפ ובדיקה',
    text: 'השלב שבו הופכים רעיונות מופשטים לייצוגים מוחשיים, מהירים ופשוטים, כדי לבחון אותם בשטח. המטרה היא לנסות את הפתרון, ללמוד מהר מה עובד ומה לא, ובעת הצורך לחזור לשלבים הקודמים ולדייק.',
    image: doodle4,
    mobileImage: doodle4Mobile,
    color: 'pink',
  },
]

export default function VisionPage() {
  return (
    <>
      <PageHero image={heroImage} title="מורים הם מעצבי העתיד" />

      <section className={`${styles.intro} gridLinesWhite`}>
        <h2 className={styles.introHeading}>
          ברוכים הבאים לאיפכא -<br className={styles.introHeadingBreak} /> מרכז לחדשנות פדגוגית
        </h2>

        <div className={styles.beliefs}>
          {BELIEFS_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`${styles.beliefsRow} ${
                rowIndex === 0 ? styles.beliefsRowDivided : styles.beliefsRowSecond
              }`}
            >
              {row.map((item, itemIndex) => (
                <FadeInView key={itemIndex} className={styles.beliefBox}>
                  <Image src={starPink} alt="" className={styles.beliefStar} />
                  <div className={styles.beliefTextWrap}>{item.content}</div>
                </FadeInView>
              ))}
            </div>
          ))}
        </div>

        <FadeInView>
          <p className={styles.quote}>
            אז... בואו לעצב איתנו
            <br />
            <span className={styles.quoteHighlightWrap}>
              <span className={styles.quoteHighlightBg} />
              <span className={styles.quoteHighlightText}>את החוויה הבאה!</span>
            </span>
          </p>
        </FadeInView>
      </section>

      <section className={`${styles.steps} gridLinesBlue`}>
        <h2 className={styles.stepsHeading}>בואו נבין מהי חשיבה עיצובית?</h2>

        <StepCardStack steps={PROCESS_STEPS} />
      </section>

      <section className={styles.reflectionSection}>
        <div className={styles.reflection}>
          <div className={styles.reflectionText}>
            <Image src={starPink} alt="" className={styles.reflectionStar} />
            <h2 className={styles.reflectionHeading}>איך מעצבים חווית הוראה?</h2>
            <p>
              כאשר מתחיל תהליך העיצוב, המעצבים שלנו נפגשים עם המורה, בוחרים תחום דעת ומבררים יחד איתו
              מהם האתגרים שהוא חווה בשגרת ההוראה.{' '}
              <mark className={`${styles.marker} ${styles.markerBlue}`}>
                באמצעות כלי חשיבה עיצובית חוקרים ומדייקים את הצורך, ויחד מזהים את האזורים שבהם אפשר
                לפעול כדי לייצר שינוי.
              </mark>{' '}
              לאחר מכן, בסיעור מוחות יצירתי,
              מעלים מגוון רעיונות לפתרונות, בוחרים את הפתרון בעל פוטנציאל ההצלחה הגבוה ביותר, מנסים
              אותו בשטח, בוחנים את מידת ההצלחה שלו וחוזרים חזרה לדיוק, שינוי או ייצור סופי.
            </p>
          </div>
          <div className={styles.reflectionImageWrap}>
            <Image src={supportPhoto} alt="" className={styles.reflectionImage} />
          </div>
        </div>
      </section>

      <PhotoBand />
    </>
  )
}
