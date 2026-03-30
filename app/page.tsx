import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.profileCard}>
        <div className={styles.avatarWrapper}>
          {/* 아바타 이미지가 public 폴더에 추가되면 작동합니다. */}
          <Image 
            src="/avatar.jpg" 
            alt="홍길동 아바타"
            width={160} 
            height={160} 
            className={styles.avatar}
            priority
          />
        </div>
        
        <h1 className={styles.name}>홍길동</h1>
        <h2 className={styles.title}>대학생 & 소프트웨어 엔지니어</h2>
        
        <p className={styles.bio}>
          안녕하세요! 문제를 해결하고 새로운 것을 배우는 과정을 즐깁니다. 
          아름다운 디자인과 깔끔한 코드를 작성하는 것에 열정을 가지고 있습니다.
        </p>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.linkButton}>GitHub</a>
          <a href="#" className={styles.linkButton}>LinkedIn</a>
          <a href="#" className={styles.linkButton}>Email</a>
        </div>
      </main>
    </div>
  );
}
