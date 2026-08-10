const MIN_SPEED = 1.5
const MAX_SPEED = 2.5

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

const createLiquidSmoothAnimator = function (element: HTMLDivElement, containerWidth: number, containerHeight: number) {

    const createData = () => {
        
        const boundingRect: DOMRect = element.getBoundingClientRect();
        const size: number = boundingRect.width;
        
        const initialX: number = randomNumber(0, containerWidth - size)
        const initialY: number = randomNumber(0, containerHeight - size)
        element.style.top = `${initialY}px`;
        element.style.left = `${initialX}px`;

        return {
            el:element,
            size,
            initialX,
            initialY,
            vx: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
            vy: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
            x: initialX,
            y: initialY,
        }
    }
    let _ = {
        data: createData(),
        update: function () {
            this.data.x += this.data.vx
            this.data.y += this.data.vy
            if (this.data.x >= containerWidth - this.data.size) {
                this.data.x = containerWidth - this.data.size
                this.data.vx *= -1
            }
            if (this.data.y >= containerHeight - this.data.size) {
                this.data.y = containerHeight - this.data.size
                this.data.vy *= -1
            }
            if (this.data.x <= 0) {
                this.data.x = 0
                this.data.vx *= -1
            }
            if (this.data.y <= 0) {
                this.data.y = 0
                this.data.vy *= -1
            } 
        },
        move: function() {
            this.data.el.style.transform = `translate(${this.data.x - this.data.initialX}px, ${this.data.y - this.data.initialY}px)`;
        }
    }

    return _;
}

export interface BlobController {
    /** Pause the animation loop (idempotent). */
    pause: () => void
    /** Resume the animation loop (idempotent). */
    resume: () => void
    /** Permanently stop and clean up. */
    stop: () => void
}

export function initBlobs(directive: string, containerEl?: Element | null): BlobController | null {
    // Respect the user's motion preference — return a no-op controller so the
    // caller doesn't need to guard every call site.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return null
    }

    const blobEls: NodeListOf<HTMLDivElement> = document.querySelectorAll(directive);
    const blobs = Array.from(blobEls).map((blobEl: HTMLDivElement) => {
        const container: HTMLElement = blobEl.parentElement as HTMLElement;
        const containerRect: DOMRect = container.getBoundingClientRect();
        return createLiquidSmoothAnimator(blobEl, containerRect.width, containerRect.height)
    })

    // Track the *current* rAF id so we can cancel it reliably at any point.
    let rafId: number | null = null
    let running = false

    function tick() {
        blobs.forEach((blob) => {
            blob.update()
            blob.move()
        });
        rafId = requestAnimationFrame(tick)
    }

    function pause() {
        if (!running) return
        running = false
        if (rafId !== null) {
            cancelAnimationFrame(rafId)
            rafId = null
        }
    }

    function resume() {
        if (running) return
        running = true
        rafId = requestAnimationFrame(tick)
    }

    function stop() {
        pause()
        visibilityCleanup()
        intersectionCleanup()
    }

    // --- visibilitychange: pause when tab is hidden -------------------------
    function onVisibilityChange() {
        if (document.hidden) {
            pause()
        } else {
            resume()
        }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    function visibilityCleanup() {
        document.removeEventListener('visibilitychange', onVisibilityChange)
    }

    // --- IntersectionObserver: pause when the container leaves viewport -----
    let intersectionCleanup: () => void = () => {}

    if (containerEl) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    resume()
                } else {
                    pause()
                }
            },
            { threshold: 0 }
        )
        observer.observe(containerEl)
        intersectionCleanup = () => observer.disconnect()
    }

    // Kick off the loop.
    resume()

    return { pause, resume, stop }
}
