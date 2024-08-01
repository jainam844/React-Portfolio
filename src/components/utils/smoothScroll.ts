export const smoothScroll = (targetId: string) => {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

    const scroll = (finalPosition: number, duration: number) => {
      const start = window.scrollY;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animateScroll = () => {
        const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const timeElapsed = currentTime - startTime;

        window.scrollTo(0, easeInOutQuad(timeElapsed, start, finalPosition - start, duration));

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          window.scrollTo(0, finalPosition);
        }
      };

      animateScroll();
    };

    scroll(offsetTop, 10); 
  }
};