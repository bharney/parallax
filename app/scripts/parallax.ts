class ParallaxPart {
  private el: HTMLElement;
  private speed: number;
  private maxScroll: number;

  constructor(el: HTMLElement) {
    this.el = el;
    this.speed = parseFloat(this.el.getAttribute('data-parallax-speed') || '0');
    this.maxScroll = parseInt(this.el.getAttribute('data-max-scroll') || '0', 10);
  }

  update(scrollY: number): void {
    if (this.maxScroll > 0 && scrollY > this.maxScroll) { return; }
    const offset = -(scrollY * this.speed);
    this.setYTransform(offset);
  }

  private setYTransform(val: number): void {
    const style = this.el.style as any;
    style.webkitTransform = `translate3d(0, ${val}px, 0)`;
    style.MozTransform = `translate3d(0, ${val}px, 0)`;
    style.OTransform = `translate3d(0, ${val}px, 0)`;
    style.transform = `translate3d(0, ${val}px, 0)`;
    style.msTransform = `translateY(${val}px)`;
  }
}

class ParallaxManager {
  private parts: ParallaxPart[] = [];
  private elements: HTMLElement[];

  constructor(selector: string) {
    const nodeList = document.querySelectorAll<HTMLElement>(selector);
    if (nodeList.length === 0) {
      throw new Error('Parallax: No elements found');
    }
    this.elements = Array.from(nodeList);
    for (const el of this.elements) {
      this.parts.push(new ParallaxPart(el));
    }
    window.addEventListener('scroll', this.onScroll.bind(this));
    // Set correct initial positions so layers don't flash from 0 on load
    this.scrollHandler();
  }

  private onScroll(): void {
    window.requestAnimationFrame(this.scrollHandler.bind(this));
  }

  private scrollHandler(): void {
    const scrollY = Math.max(window.pageYOffset, 0);
    for (const part of this.parts) {
      part.update(scrollY);
    }
  }
}

export { ParallaxManager };
