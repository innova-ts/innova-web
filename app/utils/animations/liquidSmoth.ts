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

export function initBlobs(directive: string) {
    const blobEls: NodeListOf<HTMLDivElement> = document.querySelectorAll(directive);
    const blobs = Array.from(blobEls).map((blobEl: HTMLDivElement) => {
        const container: HTMLElement = blobEl.parentElement as HTMLElement;
        const containerRect: DOMRect = container.getBoundingClientRect();
        return createLiquidSmoothAnimator(blobEl, containerRect.width, containerRect.height)
    })

    function update() {
        requestAnimationFrame(update)
        blobs.forEach((blob) => {
            blob.update()
            blob.move()
        });
    }
    
    requestAnimationFrame(update)
}
